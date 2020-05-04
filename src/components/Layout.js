import React from "react";
import { Helmet } from "react-helmet";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "./all.sass";
import useSiteMetadata from "./SiteMetadata";
import { withPrefix } from "gatsby";
import ScrollButton from "./scroolToTop";

const TemplateWrapper = ({
  children,
  noIndex = false,
  googleLink = "",
  title,
  browserTitle,
  description,
}) => {
  return (
    <div>
      <Helmet>
        <html lang="en" />
        <meta name="title" content={title} />
        <title>{browserTitle}</title>
        {noIndex && <meta name="robots" content="noindex" />}
        {googleLink !== "" && (
          <meta name="google-site-verification" content={googleLink} />
        )}
        <meta name="description" content={description} />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${withPrefix("/")}img/apple-touch-icon.png`}
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix("/")}img/favicon-32x32.png`}
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix("/")}img/favicon-16x16.png`}
          sizes="16x16"
        />

        <link
          rel="mask-icon"
          href={`${withPrefix("/")}img/safari-pinned-tab.svg`}
          color="#ff4400"
        />
        <meta name="theme-color" content="#fff" />

        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        <meta
          property="og:image"
          content={`${withPrefix("/")}img/og-image.jpg`}
        />
      </Helmet>
      <Navbar />
      <div>{children}</div>
      <Footer />
      <ScrollButton scrollStepInPx="50" delayInMs="16.66" />
    </div>
  );
};

export default TemplateWrapper;
