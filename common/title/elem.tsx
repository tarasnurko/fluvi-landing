import styled from "styled-components";

export const MainTitle = styled.h1`
  font-weight: 700;
  font-size: 54px;
  line-height: 110%;

  color: var(--text-white);

  @media (max-width: 576px) {
    font-size: 32px;
    line-height: 120%;
  }
`;

interface ITitle {
  type: "normal" | "white";
}

export const Title = styled.h2<ITitle>`
  font-weight: 700;
  font-size: 36px;
  line-height: 115%;
  color: ${(props) =>
    props.type === "normal" ? "var(--text-dark-primary)" : "var(--text-white)"};

  @media (max-width: 576px) {
    font-size: 20px;
  }
`;

interface ISubtitle {
  type: "normal" | "white";

  width?: string;
  height?: string;

  lgWidth?: string;
  lgHeight?: string;

  mdWidth?: string;
  mdHeight?: string;

  smWidth?: string;
  smHeight?: string;

  mbWidth?: string;
  mbHeight?: string;
}

export const Subtitle = styled.h3<ISubtitle>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};

  font-weight: ${(props) => (props.type === "normal" ? 400 : 500)};
  font-size: 18px;
  line-height: 150%;
  color: ${(props) =>
    props.type === "normal"
      ? "var(--text-dark-secondary)"
      : "var(--text-white)"};

  @media (max-width: 1200px) {
    width: ${(props) => (props.lgWidth ? props.lgWidth : "")};
    height: ${(props) => (props.lgHeight ? props.lgHeight : "")};
  }

  @media (max-width: 996px) {
    width: ${(props) => (props.mdWidth ? props.mdWidth : "")};
    height: ${(props) => (props.mdHeight ? props.mdHeight : "")};
  }

  @media (max-width: 768px) {
    width: ${(props) => (props.smWidth ? props.smWidth : "")};
    height: ${(props) => (props.smHeight ? props.smHeight : "")};
  }

  @media (max-width: 576px) {
    width: ${(props) => (props.mbWidth ? props.mbWidth : "")};
    height: ${(props) => (props.mbHeight ? props.mbHeight : "")};

    font-size: 12px;
  }
`;
