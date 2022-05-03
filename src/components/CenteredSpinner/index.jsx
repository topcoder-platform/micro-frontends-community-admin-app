/**
 * A centered spinner used to indicate loading in modals
 */

import React from "react";
import PT from "prop-types";
import Loader from "react-loader-spinner";
import "./styles.module.scss";

function CenteredSpinner(props) {
  const { type = "Hearts", color = "#EF3A3A", height = 80, width = 80 } = props;

  return (
    <div styleName="loader-container">
      <Loader type={type} color={color} height={height} width={width} />
    </div>
  );
}

CenteredSpinner.propTypes = {
  type: PT.string,
  color: PT.string,
  height: PT.number,
  width: PT.number,
};

export default CenteredSpinner;
