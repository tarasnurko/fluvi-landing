import Image, { ImageProps } from "next/image";
import styled from "styled-components";

import { LinkButton } from "@/common/link";

import LogoSrc from "@/icons/logo.svg";
import BgLinesSrc from "@/images/bg-lines.png";

const Wrapper = styled.section`
  width: 100%;
  position: relative;
  background-image: linear-gradient(115.73deg, #f12c11 -0.82%, #f59019 84.14%);
  overflow: hidden;

  padding: 100px 0;

  @media (max-width: 996px) {
    padding: 50px 0;
  }
`;

const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;

  @media (max-width: 1200px) {
    max-width: 960px;
  }

  @media (max-width: 996px) {
    max-width: 720px;
  }

  @media (max-width: 768px) {
    max-width: 540px;
    align-items: flex-start;
  }

  @media (max-width: 576px) {
    max-width: 325px;
    gap: 24px;
  }
`;

const LogoImg = styled(Image)<ImageProps>`
  width: 77px;
  height: auto;

  @media (max-width: 576px) {
    width: 66px;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;

  @media (max-width: 768px) {
    max-width: 540px;
    align-items: flex-start;
  }
`;

const Title = styled.h2`
  font-weight: 700;
  font-size: 36px;
  line-height: 115%;
  color: var(--text-white);

  @media (max-width: 576px) {
    font-size: 24px;
  }
`;

const Text = styled.p`
  font-weight: 500;
  font-size: 18px;
  line-height: 150%;
  color: var(--text-white);

  @media (max-width: 576px) {
    font-size: 14px;
  }
`;

const BgLinesImg = styled(Image)<ImageProps>`
  width: 100%;
  height: auto;
  position: absolute;
  bottom: -100%;
  left: 50%;
  transform: translateX(-50%);

  @media (max-width: 768px) {
    bottom: -70%;
  }

  @media (max-width: 576px) {
    width: 140%;
    bottom: -70%;
  }
`;

const Component = () => {
  return (
    <Wrapper>
      <Container>
        <LogoImg src={LogoSrc} alt="logo" />
        <TextContainer>
          <Title>Начать пользоватся</Title>
          <Text>
            Набирай подписчиков и зарабатывай деньги в социальных сетях вместе с
            Fluvi
          </Text>
        </TextContainer>
        <LinkButton href="#">Попробовать бесплатно</LinkButton>
      </Container>
      <BgLinesImg src={BgLinesSrc} alt="bg-lines" priority />
    </Wrapper>
  );
};

export default Component;
