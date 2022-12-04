import Image, { ImageProps } from "next/image";
import styled from "styled-components";

import {
  Container,
  HorizontalContainer,
  VerticalContainer,
} from "@/common/container";
import { Title } from "@/common/title";

import ClockSrc from "@/images/emoji-result/clock.png";
import MoneySrc from "@/images/emoji-result/money.png";
import PortfolioSrc from "@/images/emoji-result/portfolio.png";
import GraphSrc from "@/images/emoji-result/graph.png";
import RocketSrc from "@/images/emoji-result/rocket.png";
import FireSrc from "@/images/emoji-result/fire.png";

import CrownSrc from "@/images/crown.png";
import LineSrc from "@/icons/dashed-line.svg";
import { Text } from "@/common/text";

const Wrapper = styled.section`
  width: 100%;
  padding: 100px 0 0 0;
  position: relative;
  background-color: var(--bg-primary);
  overflow: hidden;

  @media (max-width: 576px) {
    padding: 50px 0 62px 0;
  }
`;

// const BlocksWrapper = styled.div`
//   width: 100%;
//   display: grid;
//   grid-template-columns: 1fr 1fr;
//   gap: 20px;

//   @media (max-width: 768px) {
//     grid-template-columns: 1fr;
//   }
// `;

const BlocksWrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 16px;
  }
`;

const BlocksColumn = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (max-width: 576px) {
    gap: 16px;
  }
`;

const Block = styled.div`
  min-width: 325px;
  min-height: 88px;
  display: flex;
  align-items: center;
  padding: 24px;
  border: 1px solid #e6e6e6;
  border-radius: 10px;
`;

const BlockTitle = styled.h4`
  font-weight: 700;
  font-size: 24px;
  line-height: 100%;
  color: var(--orange-primary);

  @media (max-width: 576px) {
    font-size: 18px;
  }
`;

const BlockImage = styled(Image)<ImageProps>`
  width: 28px;
  height: auto;

  @media (max-width: 576px) {
    width: 20px;
    height: 20px;
  }
`;

const CrownImage = styled(Image)<ImageProps>`
  position: absolute;
  top: 100px;
  right: 560px;
  z-index: 2;
  transform: rotate(-45deg);
  @media (max-width: 1200px) {
    right: 410px;
  }
  @media (max-width: 996px) {
    display: none;
  }
`;

const LineImage = styled(Image)<ImageProps>`
  position: absolute;
  top: 70px;
  right: -60px;
  z-index: 1;
  transform: rotate(20deg);

  @media (max-width: 1200px) {
    right: -200px;
  }
  @media (max-width: 996px) {
    display: none;
  }
`;

const Component = () => {
  return (
    <Wrapper>
      <Container>
        <VerticalContainer gap={12}>
          <VerticalContainer gap={4} width="440px" mbWidth="100%">
            <Title>Какой результат даёт Fluvi</Title>
            <Text width="400px" mbWidth="280px">
              Мы помогаем пользователям с двумя вещами: вести соцсети легче,
              вести соцсети эффективнее
            </Text>
          </VerticalContainer>
          <BlocksWrapper>
            <BlocksColumn>
              <Block>
                <VerticalContainer gap={3}>
                  <HorizontalContainer gap={2}>
                    <BlockImage src={ClockSrc} alt="clock" />
                    <BlockTitle>Регулярность</BlockTitle>
                  </HorizontalContainer>
                  <Text>Начнешь вести блог системно и не выпадать</Text>
                </VerticalContainer>
              </Block>
              <Block>
                <VerticalContainer gap={3}>
                  <HorizontalContainer gap={2}>
                    <BlockImage src={MoneySrc} alt="money" />
                    <BlockTitle>Рост дохода</BlockTitle>
                  </HorizontalContainer>
                  <Text>Заработаешь больше и быстрее денег с блога</Text>
                </VerticalContainer>
              </Block>
              <Block>
                <VerticalContainer gap={3}>
                  <HorizontalContainer gap={2}>
                    <BlockImage src={PortfolioSrc} alt="portfolio" />
                    <BlockTitle>Блог как бизнес</BlockTitle>
                  </HorizontalContainer>
                  <Text>Будешь управлять всеми процессами блога</Text>
                </VerticalContainer>
              </Block>
            </BlocksColumn>
            <BlocksColumn>
              <Block>
                <VerticalContainer gap={3}>
                  <HorizontalContainer gap={2}>
                    <BlockImage src={GraphSrc} alt="graph" />
                    <BlockTitle>Статистика</BlockTitle>
                  </HorizontalContainer>
                  <Text>Сможешь увидеть продвинутую статистику блога</Text>
                </VerticalContainer>
              </Block>

              <Block>
                <VerticalContainer gap={3}>
                  <HorizontalContainer gap={2}>
                    <BlockImage src={RocketSrc} alt="rocket" />
                    <BlockTitle>Продвижение</BlockTitle>
                  </HorizontalContainer>
                  <Text>Сможешь ежедневно привлекать подписчиков</Text>
                </VerticalContainer>
              </Block>

              <Block>
                <VerticalContainer gap={3}>
                  <HorizontalContainer gap={2}>
                    <BlockImage src={FireSrc} alt="fire" />
                    <BlockTitle>Эффективность</BlockTitle>
                  </HorizontalContainer>
                  <Text>Сможешь повышать все показатели блога</Text>
                </VerticalContainer>
              </Block>
            </BlocksColumn>
          </BlocksWrapper>
        </VerticalContainer>
      </Container>
      <CrownImage src={CrownSrc} alt="crown" />
      <LineImage src={LineSrc} alt="line" priority />
    </Wrapper>
  );
};

export default Component;
