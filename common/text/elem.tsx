import styled from "styled-components";

interface ITextProps {
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

export const Text = styled.p<ITextProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};

  font-weight: 400;
  font-size: 18px;
  line-height: 150%;
  color: var(--text-dark-secondary);

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
