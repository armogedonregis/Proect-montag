import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import tw from "twin.macro";

const ButtonForPhone = styled.a`
  ${tw`
  text-xl
  font-bold
  `}
`;

const ButtonForCall = styled.button`
  ${tw`
  text-base
  border-b
  border-dashed
  `}
`;

const ButtonForNavLink = styled(Link)`
  ${tw`
  text-white
  md:text-xs
  lg:text-sm
  xl:text-base
  md:px-1
  lg:px-4
  xl:px-5
  md:py-[0.6rem]
`}
`;

const ButtonForBurger = styled(Link)`
${tw`
  text-sm
  hover:text-accent
`}
`;

const ButtonForFootLink = styled(Link)`
  ${tw`
  text-white
  lg:text-base
  text-sm
  lg:font-semibold
  font-normal
  hover:text-btn-gray
`}
`;

const ButtonForButton = styled(Link)`
  ${tw`
  text-white
  text-center
  text-[11px]
  xl:text-lg
  lg:text-base
  lg:font-bold
  font-medium
  xl:p-[23px 45px]
  lg:p-[17px 39px]
  p-[8px 15px]
  leading-[16px]
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

const ButtonForNavigate = styled(Link)`
${tw`
  text-accent
  text-xs
  lg:text-sm
  underline 
  hover:no-underline
`}
`;

export const Button: React.FC<{
  children?: React.ReactNode;
  className?: string;
  theme?: string;
  to?: string;
  href?: string;
  onMouseOver?: any;
  onMouseOut?: any;
}> = ({ children, onMouseOver, onMouseOut, className, href, theme = "phone", to }) => {
  if (theme === "call") {
    return <ButtonForCall className={className}>{children}</ButtonForCall>;
  }
  if (theme === "burger") {
    return <ButtonForBurger className={className} to={to}>{children}</ButtonForBurger>;
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
    return <ButtonForPrice onMouseOut={onMouseOut} onMouseOver={onMouseOver} className={className} to={to}>{children}</ButtonForPrice>;
  }
  if (theme === "navigate") {
    return <ButtonForNavigate className={className} to={to}>{children}</ButtonForNavigate>;
  }
  return <ButtonForPhone className={className} href={href}>{children}</ButtonForPhone>;
};
