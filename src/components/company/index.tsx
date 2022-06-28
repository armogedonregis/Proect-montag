import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Wrapper } from "../wrapper";
import { Button } from "../button";
import Refresh from "../../assets/icons/refresh.svg";

const Container = styled.section`
  ${tw`
  w-screen
  lg:bg-bgWhite
  lg:p-[70px 0 30px]
  `};
`;

const Title = styled.h2`
  ${tw`
  lg:text-center font-extrabold lg:text-4xl lg:mb-10
  text-xl mb-3 text-left
  `};
`;

const Descr = styled.h3`
  ${tw`
  text-center
  font-normal
  lg:text-2xl
  text-sm
  mb-[15px] lg:mb-[initial]
  `};
`;

const CardContainer = styled.div<{ 
    master?: boolean;
    mobile?: boolean; 
}>`
${({ master }) => 
master ? tw`pl-[92px] lg:pl-[80px] lg:mt-[30px]` :
tw`flex flex-col lg:flex-row lg:justify-between 
lg:mt-[50px]
svg:display[none]
svg:lg:display[block]
`
}
${({ mobile }) =>
mobile && tw`flex-col-reverse`
}
`;

const Card = styled.div<{ 
    blue?: boolean; orange?: boolean; 
    person?: boolean; brigade?: boolean; 
    stand?: boolean;
}>`
${tw`
    text-left
    lg:p-[30px]
    p-[20px 15px 15px]
    rounded
`}
${({ stand }) => 
stand && tw`relative`
}
${({ blue, orange, person, brigade }) => 
blue ? tw`bg-accent mb-[15px] lg:mb-[initial] relative w-[initial] lg:w-[400px] xl:w-[460px]` : 
orange ? tw`bg-tertiary mb-5 lg:mb-[initial] w-[initial] lg:w-[400px] xl:w-[460px]` :
person ? tw`relative bg-white shadow-cardMob lg:shadow-card w-[initial] lg:w-[260px] xl:w-[320px] h-[170px] lg:h-[initial] ml-[50px] lg:ml-[31px] mb-[15px] lg:mb-[initial]` :
brigade ? tw`lg:flex lg:items-end bg-white shadow-cardMob lg:shadow-card mb-[15px] lg:mb-[initial] lg:pb-[15px] h-[initial] sm:h-[170px] lg:h-[initial] w-[initial] lg:w-full` :
tw`bg-white ml-[50px] lg:ml-[initial] mb-[15px] lg:mb-[initial] shadow-cardMob lg:shadow-card h-[170px] lg:h-[initial] w-[initial] lg:w-[330px] xl:w-[364px]`
}
`;

const Linea = styled.div<{ 
    first?: boolean; second?: boolean; 
    third?: boolean; fourth?: boolean;
    fifth?: boolean;
}>`
${({ fourth, fifth }) => 
fourth || fifth ?
`
@media (min-width: 1024px) {
    border-radius: 0 15px 0 0;
    border-right: 6px solid #0a68c8;
    border-top: 6px solid #0a68c8;
}

@media (max-width: 1023px) {
    border-radius: 0 0 0 15px;
    border-left: 6px solid #0a68c8; 
    border-bottom: 6px solid #0a68c8;
}
`
:
`
border-radius: 0 0 0 15px;
border-left: 6px solid #0a68c8; 
border-bottom: 6px solid #0a68c8;
`
}
${tw`
    absolute
    z-20
`}
${({ first, second, third, fourth, fifth }) =>
first ? tw`left-[13px] bottom-[-450px] lg:bottom-[-150px] lg:w-[18px] w-[37px] h-[450px] lg:h-[155px]` :
second ? tw`left-[-37px] lg:left-[24px] bottom-[41px] lg:bottom-[-110px] w-[37px] lg:w-[25px] h-[10px] lg:h-[110px]` :
third ? tw`display[none] lg:block left-[220px] bottom-[-30px] lg:w-[600px] xl:w-[815px] h-[30px]` :
fourth ? tw`w-[37px] lg:w-[25px] h-[10px] lg:h-[25px] left-[-37px] lg:left-[141px] top-[82px] lg:top-[-26px]` :
fifth ? tw`w-[33px] lg:w-[270px] xl:w-[25px] h-[115px] lg:h-[25px] left-[9px] lg:left-[-100px] xl:left-[141px] top-[170px] lg:top-[-26px]` : tw``
}
`;

const CardTitle = styled.h4<{ colorTitle?: boolean }>`
${tw`
    font-black
    lg:text-xl
    lg:leading-[24px]
    text-base
    leading-[20px]
    mb-4
`}
${({ colorTitle }) => 
colorTitle ? tw`text-white` : tw`text-primary`
}
`;

const CardText = styled.p<{ colorText?: boolean; brigadeText?: boolean; }>`
${tw`
    lg:text-base
    text-xs
    font-light
    leading-[20px]
    lg:font-normal
`}
${({ colorText }) => 
colorText ? tw`text-white` : tw`text-primary`
}
${({ brigadeText }) => 
brigadeText && tw`lg:m-[2px 0 16px 80px]`
}
`;

const QuestionContainer = styled.div`
${tw`
    flex
    flex-col 
    lg:flex-row
    items-center
    lg:justify-center
    py-[50px]
`}
`;

const QuestionText = styled.i`
${tw`
    mb-2 lg:mb-[initial]
    lg:text-2xl
    lg:w-4/12
`}
`;

export const Company: React.FC = () => {
    return (
        <Container>
            <Wrapper>
                <Title>Компания полного цикла</Title>
                <Descr>Ремонт под ключ вместе с нами</Descr>
                <CardContainer mobile>
                    <Card blue>
                        <CardTitle colorTitle>Руководитель проекта</CardTitle>
                        <CardText colorText>На каждом объекте работают узкопрофильные специалисты, ответственные только за свою работу. За весь процесс ремонта ответственным лицом является руководитель.
                            <br />Он отвечает за качество работ, сроки их выполнения, за поставку отделочных материалов и решение вопросов с управляющей компанией. <br />Он освобождает клиентов от множества вопросов, связанных с ремонтом.
                        </CardText>
                        <Linea first />
                        <Linea third />
                    </Card>
                    <Refresh width={60} height={60} />
                    <Card orange>
                        <CardTitle colorTitle>Наши клиенты</CardTitle>
                        <CardText colorText>Нашим клиентам нет необходимости ежедневно посещать объект и общаться с мастерами. Ответственным лицом от начала и до конца ремонта является руководитель проекта. Еженедельный фото/видео отчет, решение всех спорных вопросов с управляющей компанией и соседями — обязнность руководителя, он всегда на связи.
                        </CardText>
                    </Card>
                </CardContainer>
                <CardContainer>
                    <Card person>
                        <CardTitle>Персональный прораб</CardTitle>
                        <CardText>Всегда находится на объекте. Следит за процессом ремонта.</CardText>
                        <Linea second />                        
                    </Card>
                    <Card stand>
                        <Linea fourth /> 
                        <CardTitle>Команда дизайнеров</CardTitle>
                        <CardText>Вам нет необходимости продумывать оформление интерьера — наши дизайнеры продумают за вас и учтут все ваши пожелания.</CardText>
                    </Card>
                    <Card stand>
                        <Linea fifth /> 
                        <CardTitle>Своя служба доставки</CardTitle>
                        <CardText>Обеспечивает всеми необходимыми отделочными материалами ежедневно.</CardText>
                    </Card>
                </CardContainer>
                <CardContainer master>
                    <Card brigade>
                        <CardTitle>Наши бригады</CardTitle>
                        <CardText brigadeText>У нас нет мастеров универсалов. На каждом этапе ремонта работают профессиональные строители, укомплектованные современным инструментом. Каждый строитель занимается конкретно своим делом.</CardText>
                    </Card>
                </CardContainer>
                <QuestionContainer>
                    <QuestionText>Есть вопрос? Задайте его руководителю проектов</QuestionText>
                    <Button className="lg:px-[100px]" theme="button" to="/">задать вопрос</Button>
                </QuestionContainer>
            </Wrapper>
        </Container>
    );
};