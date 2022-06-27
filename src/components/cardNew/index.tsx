import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Wrapper } from "../wrapper";
import { StaticImage } from "gatsby-plugin-image";

const Container = styled.section`
  ${tw`
  lg:mb-20
  mb-5
  `};
`;

const Text = styled.p`
  ${tw`
  lg:text-center lg:font-normal lg:text-xl
  text-left
  lg:leading-[31px]
  lg:mb-[100px]
  mb-5
  lg:px-12
  text-sm
  leading-[22px]
  font-light
  `};
`;

const CardContainer = styled.ul`
${tw`

`}
`;

const Card = styled.li<{ pos?: boolean; }>`
  ${tw`
  lg:justify-between
  lg:mb-[60px]
  mb-[30px]
  `};
${({ pos }) => 
pos ? tw`lg:flex flex-row-reverse` : tw`lg:flex`
}
`;

const TextContainer = styled.div`
${tw`
    lg:w-1/2
    lg:text-center
    text-left
    lg:shadow-none
    shadow-[0px 7px 11px -1px #eaeaea]
    lg:rounded-none
    rounded-[0 0 5px 5px]
    p-[1px 0 15px]
`}
`;

const CardTitle = styled.h3`
  ${tw`
    lg:text-3xl
    text-base
    lg:leading-[35px]
    leading-[23px]
    font-extrabold
    lg:font-bold
    lg:px-16
    pt-2.5
    px-[15px]
    mb-5
  `};
`;

const CardText = styled.p`
${tw`
    text-xs
    font-light
    leading-[18px]
    lg:text-sm
    lg:leading-[22px]
    lg:font-normal
    lg:px-16
    px-[15px]
`}
`;

export const CardNew: React.FC = () => {
    return (
        <Container>
            <Wrapper>
                <Text>Компания Проект Монтаж обладает большим опытом и знанием ремонта квартир в новостройках в Москве и Московской области. Знаем какие материалы нужно использовать, Вам не придется ничего переделывать, после того как дом даст усадку. На все наши отделочные работы мы предоставляем 3-летнию гарантию</Text>
                <CardContainer>
                    <Card>
                        <StaticImage 
                            placeholder={"blurred"}
                            src={"../../assets/images/card_new_1.jpg"} 
                            alt={""}
                            quality={100}
                            formats={["auto", "webp", "avif"]}
                        />
                        <TextContainer>
                            <CardTitle>Работаем по чертежам</CardTitle>
                            <CardText>Вместо писанины на стенах разрабатываем чертежи на каждый этап работ.
                                Работа по чертежам позволяет избежать ошибок, ускоряет процесс ремонта. 
                                Все наши мастера читают проектную документацию как книгу</CardText>
                        </TextContainer>
                    </Card>
                    <Card pos>
                        <StaticImage 
                            placeholder={"blurred"}
                            src={"../../assets/images/card_new_2.jpg"} 
                            alt={""}
                            quality={100}
                            formats={["auto", "webp", "avif"]}
                        />
                        <TextContainer>
                            <CardTitle>Разбираемся где и какие материалы нужно использовать</CardTitle>
                            <CardText>Все электромонтажные работы делаются по ГОСТу и СНИПу. 
                                Используем медный одножильный провод с двойной изоляцией, каждое помещение имеет отдельный автомат, в мокрых зонах устанавливаем дифференциальный автомат, 
                                все розетки и выключатели на правильной высоте.</CardText>
                        </TextContainer>
                    </Card>
                    <Card>
                        <StaticImage 
                            placeholder={"blurred"}
                            src={"../../assets/images/card_new_3.jpg"} 
                            alt={""}
                            quality={100}
                            formats={["auto", "webp", "avif"]}
                        />
                        <TextContainer>
                            <CardTitle>Все инженерные коммуникации скрыты</CardTitle>
                            <CardText>Современное оборудование и материалы позволяют делать все коммуникации скрытыми. Используем трубы из шитого полиэтилена, эти трубы устойчивы к перепадам давления, канализационные трубы из ПВХ. Устанавливаем датчики от протечки воды, монтируем редуктора давление с помывочной системой.</CardText>
                        </TextContainer>
                    </Card>
                    <Card pos>
                        <StaticImage 
                            placeholder={"blurred"}
                            src={"../../assets/images/card_new_4.jpg"} 
                            alt={""}
                            quality={100}
                            formats={["auto", "webp", "avif"]}
                        />
                        <TextContainer>
                            <CardTitle>Применяем современные технологии</CardTitle>
                            <CardText>Не оставляем метала в стенах. Устанавливаем маяки по струне, используем пластиковые уголки и малярную сетку, что предотвращает появление трещин при усадке дома. Соблюдаем технологии производителей, дадим высохнуть штукатурке, знаем где нужна акриловая грунтовка, а где бетоноконтакт.</CardText>
                        </TextContainer>
                    </Card>
                </CardContainer>
            </Wrapper>
        </Container>
    );
};