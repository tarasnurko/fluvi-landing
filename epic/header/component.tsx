import React from "react";
import styled from "styled-components";

import Link, { LinkProps } from "next/link";

import LogoSrc from "@/icons/logo.svg";

import Image from "next/image";

import { HorizontalContainer } from "@/common/container";
import { BurgerMenu } from "@/epic/burger-menu";

const Wrapper = styled.div`
  width: 100%;

  position: sticky;
  top: 0;
  left: 0;
  background-color: var(--orange-primary);
  z-index: 100;
`;

const Container = styled.div`
  width: 1100px;
  margin: 0 auto;
  padding: 20px 0;

  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1200px) {
    width: 960px;
  }

  @media (max-width: 996px) {
    width: 720px;
  }

  @media (max-width: 768px) {
    width: 540px;
  }
  @media (max-width: 576px) {
    width: 325px;
  }
`;

const HeaderLink = styled(Link)<LinkProps>`
  position: relative;

  font-weight: 500;
  font-size: 18px;
  line-height: 23px;

  color: var(--text-white);

  transition: all 0.6s ease-in-out;

  &::after {
    content: "";

    width: 0;
    height: 2px;

    position: absolute;
    bottom: 0;
    left: 0;

    opacity: 0;
    background-color: var(--text-white);
    border-radius: 1px;

    transition: all 0.6s ease-in-out;
  }

  &:hover {
    &::after {
      width: 100%;

      opacity: 1;
    }
  }

  @media (max-width: 576px) {
    display: none;
  }
`;

const Component = () => {
  return (
    <Wrapper>
      <Container>
        <Image src={LogoSrc} alt="logo" />
        <HorizontalContainer gap={8}>
          <HeaderLink href="link">Регистрация</HeaderLink>
          <HeaderLink href="link">Вход</HeaderLink>
          <BurgerMenu />
        </HorizontalContainer>
      </Container>
    </Wrapper>
  );
};

export default Component;
