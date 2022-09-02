import styled from "styled-components";
import { BsFillQuestionCircleFill } from "react-icons/bs"

const Question = () => {
    return (
        <QuestionWrapper>
            <InnerQuestionWrapper>
                <QuestionIcon />
                <HelpText>
                    Special characters mean: !, ", ', #, $, %, ^, (, ), *, +, -, ., /, ",", :, ;, =, ?, @, [, ], \, _, `, ~
                </HelpText>
            </InnerQuestionWrapper>
        </QuestionWrapper>
    )
}

// &, <, >, [,],{,}

const QuestionWrapper = styled.div`
    position: absolute;
    bottom: 25px;
    right: 25px;
    width: 50px;
    height: 50px;
`

const HelpText = styled.p`
    display: none;
`

const InnerQuestionWrapper = styled.div`
    position: relative;
    &:hover ${HelpText}{
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #558599;
        color: #fff;
        position: absolute;
        top: -90px;
        right: 45px;
        padding: 20px;
        border-radius: 10px;
        width: 250px; 
    }
}
`

const QuestionIcon = styled(BsFillQuestionCircleFill)`
    width: 50px;
    height: 50px;
    color: #558599;
    cursor: help;
`

export default Question;