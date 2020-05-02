import React from "react";
import PropTypes from "prop-types";
import IndexPage from "../../templates/index-page";

const IndexPagePreview = ({ entry, getAsset }) => {
  // const data = entry.getIn(["data"]).toJS();

  return <IndexPage />;
};

IndexPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
};

export default IndexPagePreview;
