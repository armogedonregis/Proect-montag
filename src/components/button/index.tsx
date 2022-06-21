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
  hover:bg-btn
  md:px-1
  lg:px-4
  xl:px-5
  md:py-[1rem]
  lg:py-[0.9rem]
  -ml-4
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
  text-base
  font-semibold
  hover:text-btn-gray
`}
`;

const ButtonForButton = styled(Link)`
  ${tw`
  text-white
  text-center
  text-[11px]
  lg:text-lg
  lg:font-bold
  font-medium
  lg:p-[23px 45px]
  p-[8px 15px]
  w-[133px]
  lg:w-full
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
  return <ButtonForPhone className={className} href={href}>{children}</ButtonForPhone>;
};
