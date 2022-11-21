import Image, { ImageProps } from "next/image";
import styled from "styled-components";

import { VerticalContainer } from "@/common/container";
import { LinkButton } from "@/common/link";
import { Subtitle } from "@/common/title";

import AnalyticsSrc from "@/images/screen/analytics.png";
import TasksSrc from "@/images/screen/tasks.png";
import PeopleSrc from "@/images/people.png";

const Wrapper = styled.section`
  width: 100%;
  padding: 200px 0 50px 0;
  position: relative;
  background-color: var(--bg-primary);

  @media (max-width: 996px) {
    padding-top: 100px;
  }
  @media (max-width: 576px) {
    padding: 0;
  }
`;

const Container = styled.div`
  width: 1100px;
  margin: 0 auto;
  padding: 86px 100px;
  position: relative;
  background: linear-gradient(128.28deg, #f12c11 -28.29%, #f59019 103.39%);
  border-radius: 20px;

  @media (max-width: 1200px) {
    width: 960px;
  }

  @media (max-width: 996px) {
    width: 720px;
    margin: 0 auto;
  }

  @media (max-width: 768px) {
    width: 100%;
    display: flex;
    justify-content: center;
    padding-bottom: 390px;
    border-radius: unset;
  }

  @media (max-width: 576px) {
    padding: 50px 0 390px 0;
  }
`;

const Title = styled.h2`
  font-weight: 700;
  font-size: 32px;
  line-height: 125%;
  color: var(--text-white);

  @media (max-width: 576px) {
    font-size: 20px;
  }
`;

const AnalyticsImage = styled(Image)<ImageProps>`
  width: 320px;
  height: auto;
  position: absolute;
  bottom: 0;
  right: 20px;
  z-index: 3;
  box-shadow: 0px 0px 75px rgba(0, 0, 0, 0.075);

  @media (max-width: 996px) {
    width: 250px;
  }
  @media (max-width: 768px) {
    right: 130px;
  }
  @media (max-width: 576px) {
    right: 70px;
  }
`;

const TasksImage = styled(Image)<ImageProps>`
  width: 225px;
  height: auto;
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: 4;
  box-shadow: 0px 0px 75px rgba(0, 0, 0, 0.075);

  @media (max-width: 996px) {
    width: 180px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const PeopleImage = styled(Image)<ImageProps>`
  display: none;
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: 5;

  @media (max-width: 768px) {
    display: block;
    width: 180px;
  }
`;

const Component = () => {
  return (
    <Wrapper>
      <Container>
        <VerticalContainer
          gap={8}
          width="415px"
          mdWidth="340px"
          smWidth="540px"
          mbWidth="325px"
        >
          <VerticalContainer gap={3}>
            <Title>Главная идея Fluvi</Title>
            <Subtitle type="white">
              Мы собираем в 1м месте всех, кто профессионально работает с
              социальными сетями. Мы меняем подход к контент маркетингу и
              ведению социальных сетей. Мы делаем его понятным, удобным и
              эффективным
            </Subtitle>
          </VerticalContainer>
          <LinkButton href="link">Попробовать бесплатно</LinkButton>
        </VerticalContainer>
        <AnalyticsImage src={AnalyticsSrc} alt="analytics" />
        <TasksImage src={TasksSrc} alt="tasks" />
        <PeopleImage src={PeopleSrc} alt="people" />
      </Container>
    </Wrapper>
  );
};

export default Component;
