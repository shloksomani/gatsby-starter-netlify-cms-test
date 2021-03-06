import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import Content, { HTMLContent } from "../components/Content";
import Helmet from "react-helmet";

import Layout from "../components/Layout";

export const IndexPageTemplate = ({
  title,
  image,
  subheading,
  content,
  contentComponent,
}) => {
  const PostContent = contentComponent || Content;
  return (
    <div>
      <div
        className="full-width-image margin-top-0"
        style={{
          backgroundImage: `url(${
            !!image.childImageSharp ? image.childImageSharp.fluid.src : image
          })`,
          backgroundPosition: `top left`,
          backgroundAttachment: `fixed`,
        }}
      >
        <div
          style={{
            display: "flex",
            height: "150px",
            lineHeight: "1",
            justifyContent: "space-around",
            alignItems: "left",
            flexDirection: "column",
          }}
        >
          <h1
            className="is-size-2-mobile is-size-2-tablet is-size-1-widescreen headingPhoto"
            style={{
              color: "white",
              lineHeight: "2",
              padding: "0.25em 1.5rem",
              letterSpacing: "5px",
              borderBottom: "3px solid white",
              display: "inline-block",
              paddingBottom: "10px",
            }}
          >
            {title}
          </h1>
        </div>
      </div>
      <section className="section section--gradient">
        <div className="container">
          <div className="section">
            <div className="columns">
              <div className="column is-10 is-offset-1">
                <div className="content">
                  <div className="columns">
                    <div className="column is-12">
                      <div style={{ color: "#000066" }}>{subheading}</div>
                      <br />
                      <br />
                      <div>
                        <PostContent content={content} />
                      </div>
                      <br />
                      <br />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  description: PropTypes.string,
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout
      noIndex={frontmatter.noIndex}
      title={frontmatter.seo.title}
      description={frontmatter.seo.description}
      browserTitle={frontmatter.seo.browserTitle}
    >
      <IndexPageTemplate
        content={data.markdownRemark.html}
        contentComponent={HTMLContent}
        image={frontmatter.image}
        title={frontmatter.title}
        description={frontmatter.description}
        subheading={frontmatter.subheading}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      html
      frontmatter {
        title
        subheading
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        seo {
          browserTitle
          title
          description
        }
        noIndex
      }
    }
  }
`;
