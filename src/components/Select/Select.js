import React from "react";
import styled from "styled-components";
import { COLORS } from "../../constants";
import Icon from "../Icon";
import { getDisplayedValue } from "./Select.helpers";

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Root style={{ "--content-width": `${String(displayedValue).length}ch` }}>
      <Input value={value} onChange={onChange}>
        {children}
      </Input>
      <Chevron />
    </Root>
  );
};

const Root = styled.div`
  --padding-y: 12px;
  --padding-x: 16px;
  --caret-width: 44px;
  --color: ${COLORS.gray700};
  --color-hover: ${COLORS.black};
  --background: ${COLORS.transparentGray15};
  --radius: 8px;
  --font-size: 1rem;

  position: relative;
  display: block;
  width: calc(var(--content-width) + var(--caret-width) + var(--padding-x) / 2);
  color: var(--color);

  &:hover {
    color: var(--color-hover);
  }
`;

const Input = styled.select`
  width: 100%;
  background: var(--background);
  border-radius: var(--radius);
  padding: var(--padding-y) var(--caret-width) var(--padding-y) var(--padding-x);
  border: none;
  appearance: none;
  color: currentColor;
  font-size: var(--font-size);
`;

const Chevron = styled(Icon)`
  position: absolute;
  top: 0;
  width: var(--caret-width);
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  right: 0;
  color: currentColor;
  pointer-events: none;
`;

Chevron.defaultProps = { id: "chevron-down", size: 24, strokeWidth: 2 };

export default Select;
