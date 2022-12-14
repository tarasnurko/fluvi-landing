import Image, { ImageProps } from "next/image";
import styled from "styled-components";

import { VerticalContainer } from "@/common/container";
import { LinkButton } from "@/common/link";

import AnalyticsSrc from "@/images/screen/analytics.png";
import TasksSrc from "@/images/screen/tasks.png";
import PeopleSrc from "@/images/people.png";
import RocketSrc from "@/images/rocket.png";

// import TopLinesSrc from "@/images/idea-lines/top-lines.png";
// import BottomLinesSrc from "@/images/idea-lines/bottom-lines.png";

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

const Text = styled.p`
  width: 415px;

  font-weight: 400;
  font-size: 16px;
  line-height: 150%;

  color: var(--text-white);

  @media (max-width: 996px) {
    width: 300px;
  }

  @media (max-width: 768px) {
    width: auto;
  }

  @media (max-width: 576px) {
    font-size: 12px;
  }
`;

const AnalyticsImage = styled(Image)<ImageProps>`
  width: 320px;
  height: auto;
  position: absolute;
  bottom: 0;
  right: 20px;
  z-index: 9;
  box-shadow: 0px 0px 75px rgba(0, 0, 0, 0.075);
  border-radius: 20px 20px 0 0;

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
  z-index: 10;
  box-shadow: 0px 0px 75px rgba(0, 0, 0, 0.075);
  border-radius: 20px 0 20px 0;

  @media (max-width: 996px) {
    width: 180px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const PeopleImage = styled(Image)<ImageProps>`
  width: 180px;
  height: auto;
  display: none;
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: 11;

  @media (max-width: 768px) {
    display: block;
  }
`;

const RocketImage = styled(Image)<ImageProps>`
  width: 82px;
  height: auto;
  position: absolute;
  top: -41px;
  left: -47px;
  z-index: 10;

  @media (max-width: 768px) {
    display: none;
  }
`;

// const LinesContainer = styled.div`
//   width: 100%;
//   height: 100%;
//   overflow: hidden;
//   position: absolute;
//   top: 0;
//   left: 0;
//   z-index: 2;
// `;

// const TopLines = styled(Image)<ImageProps>`
//   position: absolute;
//   top: 0;
//   left: 0;
// `;

// const BottomLines = styled(Image)<ImageProps>`
//   position: absolute;
//   bottom: 0;
//   left: 0;
// `;

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
            <Title>?????????????? ???????? Fluvi</Title>
            <Text>
              ???? ???????????????? ?? 1?? ?????????? ????????, ?????? ?????????????????????????????? ???????????????? ??
              ?????????????????????? ????????????. ???? ???????????? ???????????? ?? ?????????????? ???????????????????? ??
              ?????????????? ???????????????????? ??????????. ???? ???????????? ?????? ????????????????, ?????????????? ??
              ??????????????????????
            </Text>
          </VerticalContainer>
          <LinkButton href="link">?????????????????????? ??????????????????</LinkButton>
        </VerticalContainer>
        <AnalyticsImage src={AnalyticsSrc} alt="analytics" priority />
        <TasksImage src={TasksSrc} alt="tasks" />
        <PeopleImage src={PeopleSrc} alt="people" />
        <RocketImage src={RocketSrc} alt="rocket" />
        {/* <LinesContainer>
          <TopLines src={TopLinesSrc} alt="top-lines" />
          <BottomLines src={BottomLinesSrc} alt="bottom-lines" />
        </LinesContainer> */}
      </Container>
    </Wrapper>
  );
};

export default Component;
