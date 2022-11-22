import styled from "styled-components";
import { convertToPx, setSpacing, setValueOrAuto } from "utils/design";

export const Container = styled.div`
  width: 1100px;
  margin: 0 auto;

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

export const PageContainer = styled.div`
  width: 100%;
  height: 100%;
`;

interface IVertivalContainer {
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

  gap?: number;
}

export const VerticalContainer = styled.div<IVertivalContainer>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: ${(props) => setSpacing(props.gap)};

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
  }
`;

interface IHorizontalContainer {
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

  gap?: number;
}

export const HorizontalContainer = styled.div<IHorizontalContainer>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${(props) => setSpacing(props.gap)};

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
  }
`;
