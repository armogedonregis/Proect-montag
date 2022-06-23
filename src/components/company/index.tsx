import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Wrapper } from "../wrapper";
import { Button } from "../button";
import Refresh from "../../assets/icons/refresh.svg";

const Container = styled.section`
  ${tw`
  lg:w-screen
  lg:bg-bgWhite
  p-[70px 0 30px]
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
  `};
`;

const CardContainer = styled.div<{ master?: boolean }>`
${({ master }) => 
master ? tw`pl-[80px] mt-[30px]` : tw`flex lg:justify-between mt-[25px] lg:mt-[50px]`
}
`;

const Card = styled.div<{ 
    blue?: boolean; orange?: boolean; 
    person?: boolean; brigade?: boolean; 
    stand?: boolean;
}>`
${tw`
    text-left
    p-[30px]
    rounded
`}
${({ stand }) => 
stand && tw`relative`
}
${({ blue, orange, person, brigade }) => 
blue ? tw`bg-accent relative w-[460px]` : 
orange ? tw`bg-tertiary w-[460px]` :
person ? tw`relative bg-white shadow-card w-[320px] ml-[31px]` :
brigade ? tw`flex items-end bg-white shadow-card pb-[15px] w-full` :
tw`bg-white shadow-card w-[364px]`
}
`;

const Linea = styled.div<{ 
    first?: boolean; second?: boolean; 
    third?: boolean; fourth?: boolean;
    fifth?: boolean;
}>`
${({ fourth, fifth }) => 
fourth || fifth ?
`border-radius: 0 15px 0 0;
border-right: 6px solid #0a68c8;
border-top: 6px solid #0a68c8;`
:
`border-radius: 0 0 0 15px;
border-left: 6px solid #0a68c8; 
border-bottom: 6px solid #0a68c8;`
}
${tw`
    absolute
    z-20
`}
${({ first, second, third, fourth, fifth }) =>
first ? tw`left-[13px] bottom-[-150px] w-[18px] h-[155px]` :
second ? tw`left-[24px] bottom-[-110px] w-[25px] h-[110px]` :
third ? tw`left-[220px] bottom-[-30px] w-[815px] h-[30px]` :
fourth ? tw`w-[25px] h-[25px] left-[141px] top-[-26px]` :
fifth ? tw`w-[25px] h-[25px] left-[150px] top-[-26px]` : tw``
}
`;

const CardTitle = styled.h4<{ colorTitle?: boolean }>`
${tw`
    font-black
    text-xl
    mb-4
`}
${({ colorTitle }) => 
colorTitle ? tw`text-white` : tw`text-primary`
}
`;

const CardText = styled.p<{ colorText?: boolean; brigadeText?: boolean; }>`
${tw`
    text-base
`}
${({ colorText }) => 
colorText ? tw`text-white` : tw`text-primary`
}
${({ brigadeText }) => 
brigadeText && tw`m-[2px 0 16px 80px]`
}
`;

const QuestionContainer = styled.div`
${tw`
    flex
    justify-center
    py-[50px]
`}
`;

const QuestionText = styled.i`
${tw`
    text-2xl
    w-4/12
`}
`;

export const Company: React.FC = () => {
    return (
        <Container>
            <Wrapper>
                <Title>Компания полного цикла</Title>
                <Descr>Ремонт под ключ вместе с нами</Descr>
                <CardContainer>
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
                    <Button className="px-[100px]" theme="button" to="/">задать вопрос</Button>
                </QuestionContainer>
            </Wrapper>
        </Container>
    );
};