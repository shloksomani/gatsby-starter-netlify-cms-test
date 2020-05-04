import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import Contact from "../pages/contact/ContactForm";
import Helmet from "react-helmet";

import Layout from "../components/Layout";

export const ContactPageTemplate = ({
  image,
  heading,
  email,
  number,
  note,
}) => (
  <div>
    <div
      className="full-width-image margin-top-0"
      style={{
        backgroundImage: `url(${
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        })`,
        backgroundPosition: `center`,
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
      ></div>
    </div>
    <section className="section section--gradient">
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-10">
              <div className="content">
                <div className="columns">
                  <div className="column is-12">
                    <b>{heading}</b>
                    <br />
                    <br />
                    <b>
                      <u>Toll Free:</u>
                    </b>{" "}
                    {number}
                    <br />
                    <br />
                    <b>
                      <u>Email:</u>
                    </b>
                    {email}
                    <br />
                    <br />
                    <Contact />
                    <br />
                    <b>
                      <u>Note:</u>
                    </b>
                    {note}
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

ContactPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  heading: PropTypes.string,
  number: PropTypes.string,
  email: PropTypes.string,
  note: PropTypes.string,
};

const ContactPage = ({ data }) => {
  console.log(data);
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout
      noIndex={frontmatter.noIndex}
      title={frontmatter.seo.title}
      description={frontmatter.seo.description}
      browserTitle={frontmatter.seo.browserTitle}
    >
      <ContactPageTemplate
        image={frontmatter.image}
        heading={frontmatter.heading}
        email={frontmatter.email}
        number={frontmatter.number}
        note={frontmatter.note}
      />
    </Layout>
  );
};

ContactPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default ContactPage;

export const pageQuery = graphql`
  query ContactPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "contact-page" } }) {
      frontmatter {
        heading
        number
        email
        note
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
