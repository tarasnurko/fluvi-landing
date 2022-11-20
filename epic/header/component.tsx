import React from "react";
import styled from "styled-components";

import Logo from "@/icons/logo.svg";

import { Container } from "@/common/container";

import Image from "next/image";
import { ContainerHorizontal } from "@/common/container-horizontal";
import { Link } from "@/common/link";
import { BurgerMenu } from "../burger-menu";

const InnerContainer = styled.div`
  margin-top: 20px;
  width: 100%;
  height: 45px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  left: 0;
  background-color: #7c5555;
`;

const Component = () => {
  return (
    <Container>
      <InnerContainer>
        <Image src={Logo} alt="logo" />
        <ContainerHorizontal gap={8}>
          <Link href="test" type="header">
            Регистрация
          </Link>
          <Link href="test" type="header">
            Вход
          </Link>
          <BurgerMenu />
        </ContainerHorizontal>
      </InnerContainer>
    </Container>
  );
};

export default Component;
