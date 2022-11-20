import Link, { LinkProps } from "next/link";

import styled from "styled-components";

interface IProps extends LinkProps {
  type: "header" | "footer";
}

const LinkElem = styled(Link)<IProps>`
  font-size: ${(props) => (props.type === "header" ? "18px" : "16px")};
  line-height: ${(props) => (props.type === "header" ? "23px" : "20px")};
  color: ${(props) =>
    props.type === "header" ? "var(--text-white)" : "var(--text-dark-primary)"};
  font-weight: 500;
  &:hover {
    text-decoration: underline;
  }
`;

export default LinkElem;
