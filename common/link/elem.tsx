import Link, { LinkProps } from "next/link";

import styled from "styled-components";

interface ILink extends LinkProps {
  type: "header" | "footer";
}

export const LinkElem = styled(Link)<ILink>`
  font-size: ${(props) => (props.type === "header" ? "18px" : "16px")};
  line-height: ${(props) => (props.type === "header" ? "23px" : "20px")};
  color: ${(props) =>
    props.type === "header" ? "var(--text-white)" : "var(--text-dark-primary)"};
  font-weight: 500;
  &:hover {
    text-decoration: underline;
  }
`;

interface ILinkButton extends LinkProps {}

export const LinkButton = styled(Link)<ILinkButton>`
  padding: 16px 28px;
  background-color: var(--bg-primary);
  border-radius: 10px;

  font-weight: 700;
  font-size: 16px;
  line-height: 100%;
  color: var(--orange-primary);

  cursor: pointer;

  @media (max-width: 576px) {
    font-size: 14px;
    display: flex;
    justify-content: center;
    width: 100%;
  }
`;
