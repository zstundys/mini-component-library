import React, { useMemo } from "react";
import styled from "styled-components";
import { COLORS } from "../../constants";
import Icon from "../Icon/Icon";

const IconInput = ({
  label,
  icon,
  width = 250,
  size = "small",
  placeholder,
}) => {
  const id = useMemo(() => `icon-input--${++inputId}`, []);

  const iconSize = { small: 16, large: 24 }[size];
  const iconStrokeWidth = { small: 1, large: 2 }[size];
  const iconSpace = { small: 16 + 8, large: 24 + 12 }[size];
  const inputHeight = { small: 24, large: 36 }[size];
  const inputBorderSize = { small: 1, large: 2 }[size];

  return (
    <Root>
      <Label for={id}>{label}</Label>
      <Input
        id={id}
        style={{
          "--width": `${width}px`,
          "--height": `${inputHeight / 16}rem`,
          "--icon-space": `${iconSpace}px`,
          "--border-size": `${inputBorderSize}px`,
        }}
        type="text"
        placeholder={placeholder}
        size={size}
      />
      <InputIcon id={icon} size={iconSize} strokeWidth={iconStrokeWidth} />
    </Root>
  );
};

const Root = styled.div`
  display: grid;
  grid-template-columns: 130px 1fr;
  align-items: center;
  position: relative;
  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black};
  }
`;

const Label = styled.label`
  font-size: 1.25rem;
  font-weight: 500;
`;

const Input = styled.input`
  width: var(--width);
  font-size: ${({ size }) => propertiesBySize[size].fontSize};
  appearance: none;
  background: none;
  border: none;
  border-bottom: var(--border-size) solid ${COLORS.black};
  font-weight: bold;
  padding-left: var(--icon-space);
  height: var(--height);
  color: currentColor;

  outline-offset: 2px;

  &::placeholder {
    font-weight: normal;
  }
`;

const InputIcon = styled(Icon)`
  grid-column: 2/2;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
  color: currentColor;
`;

const propertiesBySize = {
  small: {
    fontSize: "0.875rem",
  },
  large: {
    fontSize: "1.125rem",
  },
};

let inputId = 0;

export default IconInput;
