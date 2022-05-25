import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import tw from "twin.macro";

const ButtonForPhone = styled(Link)`
  ${tw`
  text-xl
  text-accent
  font-bold
  `}
`;

const ButtonForCall = styled.button`
  ${tw`
  text-base
  border-b
  border-dashed
  border-black
  `}
`;

const ButtonForNavLink = styled(Link)`
  ${tw`
  text-white
  text-base
  hover:bg-btn
  px-5
  py-4
  -ml-4
`}
`;

const ButtonForFootLink = styled(Link)`
  ${tw`
  text-white
  text-base
  font-semibold
  hover:text-btn-gray
`}
`;

const ButtonForButton = styled(Link)`
  ${tw`
  text-white
  text-lg
  font-bold
  p-[23px 45px]
  bg-tertiary
  uppercase
  border
  border-tertiary
  rounded
  hover:bg-transparent
  hover:text-tertiary
`}
`;

const ButtonForPrice = styled(Link)`
  ${tw`
  
`}
`;

export const Button: React.FC<{
  children: React.ReactNode;
  className?: string;
  theme?: string;
  to?: string;
}> = ({ children, className, theme = "phone", to }) => {
  if (theme === "call") {
    return <ButtonForCall className={className}>{children}</ButtonForCall>;
  }
  if (theme === "navLink") {
    return <ButtonForNavLink className={className} to={to}>{children}</ButtonForNavLink>;
  }
  if (theme === "footLink") {
    return <ButtonForFootLink className={className} to={to}>{children}</ButtonForFootLink>;
  }
  if (theme === "button") {
    return <ButtonForButton className={className} to={to}>{children}</ButtonForButton>;
  }
  if (theme === "price") {
    return <ButtonForPrice className={className} to={to}>{children}</ButtonForPrice>;
  }
  return <ButtonForPhone className={className} to={to}>{children}</ButtonForPhone>;
};