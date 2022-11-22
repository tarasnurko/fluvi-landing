import React, { useState } from "react";
import styled from "styled-components";

const Text = styled.span`
  font-size: 18px;
  line-height: 27px;
  font-weight: 500;
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
}

const DropdownContainer = styled.div<IDropdownContainer>`
  width: 556px;
  display: ${(props) => (props.active ? "block" : "none")};
  padding: 16px;
  background-color: var(--bg-primary);
  box-shadow: 0px 0px 75px rgba(0, 0, 0, 0.075);
  border-radius: 10px;

  position: absolute;
  top: 120%;
  left: 0;
  z-index: 10;

  @media (max-width: 768px) {
    width: 400px;
  }

  @media (max-width: 576px) {
    width: 280px;
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
}

const Component: React.FC<IProps> = ({ children, text }) => {
  const [active, setActive] = useState<boolean>(false);

  const handleClick = () => setActive((prevVal) => !prevVal);

  return (
    <Text onClick={handleClick}>
      {children}
      <DropdownContainer active={active}>
        <DropdownText>{text}</DropdownText>
      </DropdownContainer>
    </Text>
  );
};

export default Component;
