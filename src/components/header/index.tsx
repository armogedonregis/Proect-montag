import { Link } from "gatsby";
import React, { useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import logo from "../../assets/logo.png";
import { Button } from "../button";
import Hamb from "../../assets/icons/hamburger.svg";
import Phone from "../../assets/icons/phone.svg";
import HambUp from "../../assets/icons/hamburger_down.svg";
import HambDown from "../../assets/icons/hamburger_up.svg";
import Close from "../../assets/icons/hamburger_close.svg";

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

const Desktop = styled.div`
  ${tw`
  text-right
  md:block
  display[none]
  `};
`;

const Mobile = styled.div`
  ${tw`
  md:hidden
  flex
  items-center
  `};
`;

const ButtonForCallMobile = styled.a`
${tw`
  mr-5
`}
`;

const ButtonForBurgerMobile = styled.button`
${tw`
  
  
`}
`; 

const ButtonCloseBurgerMobile = styled.button`
${tw`
  
  z-50
`}
`; 

const ButtonArrowBurgerMobile = styled.button`
${tw`
  absolute
  top-[72px]
  right-[11px]
  z-50
`}
`;

const BurgerList = styled.ul`
    box-shadow: 0px 5px 16px -8px #c5c5c5;
    background: #ffffff;
    font-size: 14px;
    padding: 10px 0 17px;
${tw`
    w-full
    absolute
    z-40
    top-0
    left-0
`}
`;

const BurgeItem = styled.li`
padding: 5px 0 3px 17px;
${tw`

`}
`;

const BurgerList1 = styled.ul`
    box-shadow: 0px 5px 16px -8px #c5c5c5;
    background: #ffffff;
    font-size: 14px;
    padding: 10px 0 17px;
${tw`
    
    z-40
    
`}
`;

const BurgeItem1 = styled.li`
padding: 5px 0 3px 17px;
${tw`

`}
`;

const ButtonForBurgerPhone = styled.a`
  ${tw`
  text-base
  font-bold
  `}
`;

export const Header: React.FC = () => {
  const [active, setActive] = useState(false);
  const [active1, setActive1] = useState(false);
    return (
        <Head>
          <Link to="/"><img src={logo} alt="" /></Link>
          <Desktop>
            <Button className="mr-6 tracking-wider text-accent" theme="phone" href="tel:+79255775456">+7 (925) 577-54-56</Button>
            <Button className="tracking-wider border-black" theme="call">Заказать звонок</Button>
            <br />
            <span 
              className="text-base tracking-wider">
                Ежедневно с <b>8:00</b> до <b>23:00</b> МСК
            </span>
          </Desktop>
          <Mobile>
            <ButtonForCallMobile href="tel:+79255775456"><Phone /></ButtonForCallMobile>
            {!active ? 
            <ButtonForBurgerMobile onClick={() => setActive(!active)}><Hamb /></ButtonForBurgerMobile>
            :
            <ButtonCloseBurgerMobile onClick={() => setActive(!active)}><Close /></ButtonCloseBurgerMobile>
            }
            {active && (!active1 ?
                
                <ButtonArrowBurgerMobile onClick={() => setActive1(!active1)}><HambUp /></ButtonArrowBurgerMobile> 
                :
                <ButtonArrowBurgerMobile onClick={() => setActive1(!active1)}><HambDown /></ButtonArrowBurgerMobile> 
             )}
            {active &&
              <BurgerList>
              <BurgeItem className="mb-4 mt-3"><ButtonForBurgerPhone href="tel:+79255775456">+7 (925) 577-54-56</ButtonForBurgerPhone></BurgeItem>
              <BurgeItem onClick={() => setActive1(!active1)}><Button className="flex flex-row justify-between" to={'/vidy-remonta'} theme="burger">
                Виды ремонта
                </Button>
              {active1 &&
                        <BurgerList1>
                            <BurgeItem1><Button to={'/vidy-remonta/kosmeticheskiy-remont'} theme="burger">Косметический ремонт</Button></BurgeItem1>
                            <BurgeItem1><Button to={'/vidy-remonta/kapitalniy-remont'} theme="burger">Капитальный ремонт</Button></BurgeItem1>
                            <BurgeItem1><Button to={'/vidy-remonta/elitnyy-remont/'} theme="burger">Элитный ремонт</Button></BurgeItem1>
                            <BurgeItem1><Button to={'/vidy-remonta/evroremont/'} theme="burger">Евроремонт</Button></BurgeItem1>
                            <BurgeItem1><Button to={'/vidy-remonta/remont-v-odnokomnatnoy-kvartire/'} theme="burger">Ремонт в однокомнатной квартире</Button></BurgeItem1>
                            <BurgeItem1><Button to={'/vidy-remonta/remont-v-dvukhkomnatnoy-kvartire/'} theme="burger">Ремонт в двухкомнатной квартире</Button></BurgeItem1>
                            <BurgeItem1><Button to={'/vidy-remonta/remont-v-trekhkomnatnoy-kvartire/'} theme="burger">Ремонт в трехкомнатной квартире</Button></BurgeItem1>
                            <BurgeItem1><Button to={'/vidy-remonta/remont-v-novostroykakh/'} theme="burger">Ремонт в новостройках</Button></BurgeItem1>
                            <BurgeItem1><Button to={'/vidy-remonta/remont-taunkhausov/'} theme="burger">Ремонт таунхаусов</Button></BurgeItem1>
                            <BurgeItem1><Button to={'/vidy-remonta/remont-zagorodnykh-domov/'} theme="burger">Ремонт загородных домов</Button></BurgeItem1>
                        </BurgerList1>
                        }
              </BurgeItem>
              <BurgeItem><Button to={'/dizayn-interera'} theme="burger">Дизайн интерьера</Button></BurgeItem>
                    <BurgeItem><Button to={'/protsess-remonta'} theme="burger">Процесс ремонта</Button></BurgeItem>
                    <BurgeItem><Button to={'/nashi-raboty'} theme="burger">Наши работы</Button></BurgeItem>
                    <BurgeItem><Button to={'/tseny'} theme="burger">Цены</Button></BurgeItem>
                    <BurgeItem><Button to={'/kontakty'} theme="burger">Контакты</Button></BurgeItem>
                    <BurgeItem><Button to={'/stati-o-remonte'} theme="burger">Статьи о ремонте</Button></BurgeItem>
                    <BurgeItem><Button to={'/vidirimonti'} theme="burger">Калькулятор ремонта</Button></BurgeItem>
              </BurgerList>
                }
          </Mobile>
        </Head>
    );
};