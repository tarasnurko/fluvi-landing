import Image, { ImageProps } from "next/image";
import styled from "styled-components";

import { Container, VerticalContainer } from "@/common/container";
import { ListContainer, ListItem } from "@/common/list";
import { Title } from "@/common/title";
import { DropdownText } from "@/epic/dropdown-text";

import BottleSrc from "@/images/bottle.png";

const Wrapper = styled.section`
  width: 100%;
  padding: 100px 0 132px 0;

  position: relative;
  background-color: var(--bg-primary);
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 50px 0 100px 0;
  }
`;

const Text = styled.div`
  font-weight: 400;
  font-size: 18px;
  line-height: 150%;
  color: var(--text-dark-secondary);

  @media (max-width: 576px) {
    font-size: 12px;
  }
`;

const RoadmapContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;

  @media (max-width: 768px) {
    flex-direction: row;
  }
`;

const StepsContaier = styled.div`
  display: flex;
  gap: 64px;

  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    gap: 32px;
  }
`;

const StepBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  position: relative;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const StepDot = styled.div<{ active?: boolean }>`
  width: 12px;
  height: 12px;
  position: absolute;
  top: -38px;
  left: 0;
  z-index: 5;
  border-radius: 100%;
  background: ${(props) =>
    props.active
      ? "linear-gradient(128.28deg, #F12C11 -28.29%, #F59019 103.39%)"
      : "var(--color-gray)"};

  @media (max-width: 768px) {
    top: unset;
    left: -38px;
  }
`;

const LineContainer = styled.div`
  width: 100%;
  height: 1px;
  position: relative;

  @media (max-width: 768px) {
    height: auto;
    width: 1px;
  }
`;

const GrayLine = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 1;
  background-color: var(--color-gray);

  @media (max-width: 768px) {
  }
`;

const ActiveLine = styled.div`
  position: absolute;
  width: 50%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 2;
  background-color: var(--orange-primary);
  @media (max-width: 768px) {
    width: 100%;
    height: 50%;
  }
`;

const LineEnd = styled.div`
  position: absolute;
  width: 150px;
  height: 100%;
  top: 0;
  right: -150px;
  z-index: 3;
  background: linear-gradient(
    to right,
    var(--bg-dark-light),
    rgba(230, 230, 230, 0)
  );
  @media (max-width: 768px) {
    width: 100%;
    height: 50px;
    top: unset;
    right: unset;
    left: 0;
    bottom: -50px;
    background: linear-gradient(
      to bottom,
      var(--bg-dark-light),
      rgba(230, 230, 230, 0)
    );
  }
`;

const StepTitle = styled.h3`
  font-weight: 500;
  font-size: 18px;
  line-height: 100%;
  color: var(--text-dark-primary);

  @media (max-width: 576px) {
    font-size: 16px;
  }
`;

const StepSubtitle = styled.h4`
  font-weight: 500;
  font-size: 16px;
  line-height: 100%;
  color: var(--text-light-primary);

  @media (max-width: 576px) {
    font-size: 14px;
  }
`;

const BottleImage = styled(Image)<ImageProps>`
  position: absolute;
  top: 270px;
  right: 0;
  z-index: 5;

  filter: drop-shadow(0px 10px 50px rgba(0, 0, 0, 0.1));

  @media (max-width: 1200px) {
    display: none;
  }
`;

const BgCircle = styled.div`
  width: 128px;
  height: 128px;

  position: absolute;
  top: 400px;
  left: -64px;
  z-index: 5;

  border: 1px solid var(--bg-dark-light);
  border-radius: 100%;

  @media (max-width: 1200px) {
    display: none;
  }
`;

const BgCircleDot = styled.div`
  width: 8px;
  height: 8px;

  position: absolute;
  top: 60px;
  right: -4px;
  z-index: 6;

  background-color: var(--bg-dark-light);
  border-radius: 100%;

  @media (max-width: 1200px) {
    display: none;
  }
`;

const Component = () => {
  return (
    <Wrapper>
      <Container>
        <VerticalContainer gap={12}>
          <VerticalContainer
            gap={3}
            width="665px"
            mdWidth="500px"
            mbWidth="100%"
          >
            <Title>Fluvi Roadmap</Title>
            <Text>
              Каждый месяц мы планируем улучшать продукт и добавлять новые
              функции. К началу 2023 мы превратим Fluvi в&nbsp;
              <DropdownText
                text="Super App*"
                dropdownText="* Приложение 10 в 1. Суть идеи «Super App» - решение всех задач в одном месте. Теперь планировать, создавать, редактироватьи анализировать контент можно в одном месте. Это Super App Fluvi."
              ></DropdownText>
              &nbsp;с широким функционалом.
            </Text>
          </VerticalContainer>

          <RoadmapContainer>
            <LineContainer>
              <GrayLine />
              <ActiveLine />
              <LineEnd />
            </LineContainer>
            <StepsContaier>
              <StepBlock>
                <StepDot active />
                <VerticalContainer gap={3}>
                  <StepTitle>Альфа версия</StepTitle>
                  <StepSubtitle>Октябрь 2022</StepSubtitle>
                </VerticalContainer>
                <ListContainer>
                  <ListItem type="normal">Закрытый релиз приложения</ListItem>
                  <ListItem type="normal">
                    4-х уровневый планировщик контента
                  </ListItem>
                  <ListItem type="normal">
                    Возможность работать с командой
                  </ListItem>
                </ListContainer>
              </StepBlock>
              <StepBlock>
                <StepDot active />
                <VerticalContainer gap={3}>
                  <StepTitle>Бета версия</StepTitle>
                  <StepSubtitle>Декабрь 2022</StepSubtitle>
                </VerticalContainer>
                <ListContainer>
                  <ListItem type="normal">Ивент в честь запуска Fluvi</ListItem>
                  <ListItem type="normal">50+ статей в базе знаний</ListItem>
                  <ListItem type="normal">
                    10+ показателей блога в аналитике
                  </ListItem>
                </ListContainer>
              </StepBlock>
              <StepBlock>
                <StepDot />
                <VerticalContainer gap={3}>
                  <StepTitle>Релиз</StepTitle>
                  <StepSubtitle>Февраль 2023</StepSubtitle>
                </VerticalContainer>
                <ListContainer>
                  <ListItem type="normal">
                    ИИ, который подбирает идеи для контента
                  </ListItem>
                  <ListItem type="normal">
                    Функционал 20+ других приложений, ботов
                  </ListItem>
                  <ListItem type="normal">
                    Автопостинг контента во все соцсети
                  </ListItem>
                </ListContainer>
              </StepBlock>
            </StepsContaier>
          </RoadmapContainer>
        </VerticalContainer>
      </Container>
      <BgCircle>
        <BgCircleDot />
      </BgCircle>
      <BottleImage src={BottleSrc} alt="bottle" />
    </Wrapper>
  );
};

export default Component;
