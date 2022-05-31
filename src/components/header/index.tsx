import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import logo from "../../assets/logo.png";
import { Button } from "../button";

const Head = styled.header`
  ${tw`
  w-full
  mt-4
  mb-4
  flex
  justify-between
  items-center
  `};
`;

const Mobile = styled.div`
  ${tw`
  text-right
  `};
`;

export const Header: React.FC = () => {
    return (
        <Head>
          <Link to="/"><img src={logo} alt="" /></Link>
          <Mobile>
            <Button className="mr-6 tracking-wider text-accent" theme="phone" href="tel:+74999933445">+7 (499) 993-34-45</Button>
            <Button className="tracking-wider border-black" theme="call">Заказать звонок</Button>
            <br />
            <span 
              className="text-base tracking-wider">
                Ежедневно с <b>8:00</b> до <b>24:00</b> МСК
            </span>
          </Mobile>
        </Head>
    );
};