/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";
import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const ProgressBar = ({ value, size = "medium" }) => {
  return (
    <Root
      role="progressbar"
      aria-valuemin={0}
      aria-valuenow={value}
      aria-valuemax={100}
      size={size}
    >
      <VisuallyHidden>{value}%</VisuallyHidden>
      <Bar size={size} style={{ "--width": `${value}%` }} />
    </Root>
  );
};

export default ProgressBar;

const Root = styled.strong`
  display: block;
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  border-radius: ${({ size }) => borderRadiusBySize[size]};
  padding: ${({ size }) => paddingBySize[size]};
  overflow: hidden;
`;

const Bar = styled.div`
  background-color: ${COLORS.primary};
  height: ${({ size }) => barHeightBySize[size]};
  border-radius: 4px;
  transition: width 0.2s, border-radius 0.2s;
  width: var(--width);

  [role="progressbar"]:not([aria-valuenow="100"]) & {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
`;

const paddingBySize = {
  large: "4px",
  medium: "0px",
  small: "0px",
};

const borderRadiusBySize = {
  large: "8px",
  medium: "4px",
  small: "4px",
};

const barHeightBySize = {
  large: "16px",
  medium: "12px",
  small: "8px",
};
