import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;

  border: 1px solid var(--color-gray);
  border-radius: 10px;

  overflow: hidden;
`;

interface IDropdownButton {
  active: boolean;
}

const DropdownButton = styled.button<IDropdownButton>`
  width: 100%;
  padding: 16px 60px 16px 24px;

  font-weight: 500;
  font-size: 20px;
  line-height: 100%;

  color: var(---text-dark-secondary);

  background-color: transparent;
  border: none;
  outline: none;
  text-align: left;
  cursor: pointer;

  position: relative;

  &::before,
  &::after {
    height: 2px;
    width: 12px;
    content: "";
    position: absolute;
    top: 50%;
    border-radius: 2px;
    background-color: var(--orange-primary);
    transition: all 0.6s;
  }

  &::before {
    right: 34px;
    transform: ${(props) =>
      props.active
        ? "translateY(-50%) rotate(-45deg)"
        : "translateY(-50%) rotate(45deg)"};
  }

  &::after {
    right: 26.5px;
    transform: ${(props) =>
      props.active
        ? "translateY(-50%) rotate(45deg)"
        : "translateY(-50%) rotate(-45deg)"};
  }

  @media (max-width: 576px) {
    font-size: 16px;
    line-height: 135%;
  }
`;

interface IDescription {
  active: boolean;
}

const Description = styled.p<IDescription>`
  padding: ${(props) =>
    props.active ? "8px 24px 24px 24px" : "0 24px 0 24px"};

  margin-left: ${(props) => (props.active ? "0" : "-100%")};

  width: 100%;
  max-height: ${(props) => (props.active ? "500px" : "0px")};

  overflow: hidden;

  opacity: ${(props) => (props.active ? 1 : 0)};

  font-weight: 400;
  font-size: 16px;
  line-height: 150%;

  color: var(---text-dark-secondary);

  transition: all 0.6s ease-in;

  @media (max-width: 576px) {
    font-size: 14px;
  }
`;

interface IDropdownProps {
  text: string;
  description: string;
  dropdownId: number;
  activeId: number | null;
  handleActive: (a: number) => void;
}

const Dropdown: React.FC<IDropdownProps> = ({
  text,
  description,
  dropdownId,
  activeId,
  handleActive,
}) => {
  const handleClick = () => {
    handleActive(dropdownId);
  };

  const isActive = dropdownId === activeId;

  return (
    <Container>
      <DropdownButton active={isActive} onClick={handleClick}>
        {text}
      </DropdownButton>
      <Description active={isActive}>{description}</Description>
    </Container>
  );
};

export default Dropdown;
