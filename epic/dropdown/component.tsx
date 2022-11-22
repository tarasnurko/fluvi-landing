import React, { useState } from "react";
import styled from "styled-components";

const Text = styled.span`
  font-size: 18px;
  line-height: 27px;
  font-weight: 500;
  color: var(--text-dark-primary);
  cursor: pointer;
  position: relative;

  &:hover {
    text-decoration: underline;
  }

  @media (max-width: 576px) {
    font-size: 12px;
    line-height: 18px;
  }
`;

interface IDropdownContainer {
  active: boolean;

  width?: string;
  height?: string;

  lgWidth?: string;
  lgHeight?: string;

  mdWidth?: string;
  mdHeight?: string;

  smWidth?: string;
  smHeight?: string;

  mbWidth?: string;
  mbHeight?: string;
}

const DropdownContainer = styled.div<IDropdownContainer>`
  width: ${(props) => (props.width ? props.width : "")};
  height: ${(props) => (props.height ? props.height : "")};

  display: ${(props) => (props.active ? "block" : "none")};
  padding: 16px;
  background-color: var(--bg-primary);
  box-shadow: 0px 0px 75px rgba(0, 0, 0, 0.075);
  border-radius: 10px;

  position: absolute;
  top: 120%;
  left: 0;
  z-index: 10;

  @media (max-width: 1200px) {
    width: ${(props) => (props.lgWidth ? props.lgWidth : "")};
    height: ${(props) => (props.lgHeight ? props.lgHeight : "")};
  }

  @media (max-width: 996px) {
    width: ${(props) => (props.mdWidth ? props.mdWidth : "")};
    height: ${(props) => (props.mdHeight ? props.mdHeight : "")};
  }

  @media (max-width: 768px) {
    width: ${(props) => (props.smWidth ? props.smWidth : "")};
    height: ${(props) => (props.smHeight ? props.smHeight : "")};
  }

  @media (max-width: 576px) {
    width: ${(props) => (props.mbWidth ? props.mbWidth : "")};
    height: ${(props) => (props.mbHeight ? props.mbHeight : "")};
  }
`;

const DropdownText = styled.span`
  font-size: 14px;
  line-height: 150%;
  font-weight: 400;

  @media (max-width: 576px) {
    font-size: 12px;
  }
`;

interface IProps {
  children: React.ReactNode;
  text: string;

  width?: string;
  height?: string;
  lgWidth?: string;
  lgHeight?: string;
  mdWidth?: string;
  mdHeight?: string;
  smWidth?: string;
  smHeight?: string;
  mbWidth?: string;
  mbHeight?: string;
}

const Component: React.FC<IProps> = ({
  children,
  text,
  width,
  height,
  lgWidth,
  lgHeight,
  mdWidth,
  mdHeight,
  smWidth,
  smHeight,
  mbWidth,
  mbHeight,
}) => {
  const [active, setActive] = useState<boolean>(false);

  const handleClick = () => setActive((prevVal) => !prevVal);

  return (
    <Text onClick={handleClick}>
      {children}
      <DropdownContainer
        active={active}
        width={width}
        height={height}
        lgWidth={lgWidth}
        lgHeight={lgHeight}
        mdWidth={mdWidth}
        mdHeight={mdHeight}
        smWidth={smWidth}
        smHeight={smHeight}
        mbWidth={mbWidth}
        mbHeight={mbHeight}
      >
        <DropdownText>{text}</DropdownText>
      </DropdownContainer>
    </Text>
  );
};

export default Component;
