import React from "react";
import styled from "styled-components";

import Logo from "@/icons/logo.svg";

import Image from "next/image";

import { HorizontalContainer } from "@/common/container";
import { Link } from "@/common/link";
import { BurgerMenu } from "@/epic/burger-menu";

const Wrapper = styled.div`
  width: 100%;

  position: absolute;
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

const LinkWrapper = styled.div`
  @media (max-width: 576px) {
    display: none;
  }
`;

const Component = () => {
  return (
    <Wrapper>
      <Container>
        <Image src={Logo} alt="logo" />
        <HorizontalContainer gap={8}>
          <LinkWrapper>
            <Link href="test" type="header">
              Регистрация
            </Link>
          </LinkWrapper>
          <LinkWrapper>
            <Link href="test" type="header">
              Вход
            </Link>
          </LinkWrapper>
          <BurgerMenu />
        </HorizontalContainer>
      </Container>
    </Wrapper>
  );
};

export default Component;
