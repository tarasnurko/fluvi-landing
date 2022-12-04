import styled from "styled-components";
import Image, { ImageProps } from "next/image";

import { Container, VerticalContainer } from "@/common/container";
import { Title } from "@/common/title";

import Number1 from "@/icons/numbers/01.svg";
import Number2 from "@/icons/numbers/02.svg";
import Number3 from "@/icons/numbers/03.svg";
import Number4 from "@/icons/numbers/04.svg";
import Number5 from "@/icons/numbers/05.svg";
import NumberActive1 from "@/icons/numbers/01-active.svg";
import NumberActive2 from "@/icons/numbers/02-active.svg";

import CowboySrc from "@/images/cowboy.png";
import PleasureSrc from "@/images/emoji/pleasure.png";
import CircleSrc from "@/icons/circle-gray.svg";

const Wrapper = styled.section`
  width: 100%;
  padding: 100px 0;

  position: relative;
  background-color: var(--bg-primary);
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 50px 0 85px 0;
  }
`;

const TitleContainer = styled.div`
  width: 100%;
  text-align: center;
`;

const StepsContainer = styled.div`
  position: relative;

  width: 100%;
  padding-bottom: 30px;
  display: flex;
  flex-direction: column;
  gap: 80px;

  @media (max-width: 996px) {
    padding-bottom: 15px;
  }
`;

const StepNumberContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    padding-left: 10px;
  }

  @media (max-width: 576px) {
    padding-left: 24px;
  }
`;

const StepNumberImage = styled(Image)<ImageProps>`
  width: auto;
  height: 35px;

  @media (max-width: 768px) {
    width: auto;
    height: 51px;
    padding: 8px 0;

    background-color: var(--bg-primary);
  }

  @media (max-width: 576px) {
    width: auto;
    height: 38px;
  }
`;

const StepActiveNumberImage = styled(Image)<ImageProps>`
  display: none;
  padding: 8px 0;
  width: auto;
  height: 51px;
  background-color: var(--bg-primary);

  @media (max-width: 768px) {
    display: block;
  }

  @media (max-width: 576px) {
    height: 38px;
  }
`;

const StepBlock = styled.div`
  position: relative;

  display: flex;
  flex-direction: row;
  gap: 80px;

  z-index: 10;

  &::before {
    content: "";
    width: 12px;
    height: 12px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 3;
    border-radius: 50%;
    background-color: var(--orange-primary);
  }

  &:nth-of-type(2n) {
    flex-direction: row-reverse;

    ${StepNumberContainer} {
      justify-content: flex-end;

      @media (max-width: 768px) {
        justify-content: flex-start;
      }
    }
  }

  &:nth-of-type(n + 3) {
    &::before {
      background-color: #e6e6e6;
    }
  }

  @media (max-width: 768px) {
    flex-direction: row-reverse;
    gap: 24px;

    &::before {
      display: none;
    }

    &:nth-of-type(-n + 2) {
      ${StepNumberImage} {
        display: none;
      }
    }
  }
`;

const StepTitle = styled.h3`
  flex: 1;
  font-weight: 500;
  font-size: 24px;
  line-height: 150%;

  color: var(--text-dark-secondary);

  @media (max-width: 768px) {
    flex: 8;
  }

  @media (max-width: 576px) {
    font-size: 16px;
  }
`;

const LineContainer = styled.div`
  width: 1px;
  height: 100%;

  position: absolute;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);

  @media (max-width: 996px) {
    top: 35px;
  }

  @media (max-width: 768px) {
    left: 35px;
  }

  @media (max-width: 576px) {
    left: 40px;
  }
`;

const GrayLine = styled.div`
  width: 100%;
  height: 100%;

  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  background-color: #e6e6e6;
`;

const ActiveLine = styled.div`
  width: 100%;
  height: 30%;

  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  background-color: var(--orange-primary);
`;

const CowboyImage = styled(Image)<ImageProps>`
  position: absolute;
  top: 170px;
  right: 190px;
  z-index: 1;

  filter: drop-shadow(0px 10px 50px rgba(0, 0, 0, 0.1));
  transform: rotate(-45deg);

  @media (max-width: 996px) {
    top: 180px;
    right: 100px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const PleasureImage = styled(Image)<ImageProps>`
  width: 64px;
  height: 65px;
  position: absolute;
  bottom: 280px;
  left: 180px;
  z-index: 1;

  filter: drop-shadow(0px 10px 50px rgba(0, 0, 0, 0.1));
  transform: rotate(45deg);

  @media (max-width: 996px) {
    bottom: 310px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const CircleBg = styled(Image)<ImageProps>`
  width: 496px;
  height: 496px;

  position: absolute;
  bottom: -260px;
  right: -260px;
  z-index: 1;

  transform: rotate(30deg);

  @media (max-width: 768px) {
    display: none;
  }
`;

const Component = () => {
  return (
    <Wrapper>
      <Container>
        <VerticalContainer gap={12}>
          <TitleContainer>
            <Title>Как начать пользоваться Fluvi</Title>
          </TitleContainer>
          <StepsContainer>
            <StepBlock>
              <StepTitle>Зарегистрироваться и добавить свой блог</StepTitle>
              <StepNumberContainer>
                <StepNumberImage src={Number1} alt="01" />
                <StepActiveNumberImage src={NumberActive1} alt="01-active" />
              </StepNumberContainer>
            </StepBlock>
            <StepBlock>
              <StepTitle>
                Изучить базу знаний, как пользоваться функциями Fluvi
              </StepTitle>
              <StepNumberContainer>
                <StepNumberImage src={Number2} alt="02" />
                <StepActiveNumberImage src={NumberActive2} alt="02-active" />
              </StepNumberContainer>
            </StepBlock>
            <StepBlock>
              <StepTitle>
                Создать задачу, контент стратегию или план, записать идею,
                редактировать текст и т.д.
              </StepTitle>
              <StepNumberContainer>
                <StepNumberImage src={Number3} alt="03" />
              </StepNumberContainer>
            </StepBlock>
            <StepBlock>
              <StepTitle>
                Увидеть все процессы и показатели своего блога
              </StepTitle>
              <StepNumberContainer>
                <StepNumberImage src={Number4} alt="04" />
              </StepNumberContainer>
            </StepBlock>
            <StepBlock>
              <StepTitle>
                Каждый месяц улучшать результат с помощью наших инструментов
              </StepTitle>
              <StepNumberContainer>
                <StepNumberImage src={Number5} alt="05" />
              </StepNumberContainer>
            </StepBlock>
            <LineContainer>
              <GrayLine />
              <ActiveLine />
            </LineContainer>
          </StepsContainer>
        </VerticalContainer>
      </Container>
      <CowboyImage src={CowboySrc} alt="cowboy" />
      <PleasureImage src={PleasureSrc} alt="pleasure" priority />
      <CircleBg src={CircleSrc} alt="circle" />
    </Wrapper>
  );
};

export default Component;
