import React from "react";
import styled from "styled-components";

const DropdownContainer = styled.div`
  width: 556px;

  display: none;
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

const Container = styled.div`
  display: inline;
  position: relative;

  &:hover {
    ${DropdownContainer} {
      display: block;
    }
  }
`;

const Text = styled.span`
  font-size: 18px;
  line-height: 27px;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }

  @media (max-width: 576px) {
    font-size: 12px;
    line-height: 18px;
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

interface IDropdown {
  text: string;
  dropdownText: string;
}

const Component: React.FC<IDropdown> = ({ text, dropdownText }) => {
  return (
    <Container>
      <Text>{text}</Text>
      <DropdownContainer>
        <DropdownText>{dropdownText}</DropdownText>
      </DropdownContainer>
    </Container>
  );
};

export default Component;
