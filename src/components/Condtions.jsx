import styled from "styled-components";
import { MdDone } from "react-icons/md";
import { TiDeleteOutline } from "react-icons/ti";
import { TbCircleDot } from "react-icons/tb";

const Conditions = (props) => {
    const { pass, checkPasswordToUpperCase, checkPasswordToNumber, checkPasswordToSpecialSymbol } = props;
    return (
        <ConditionsWrapper className="conditions_wrapper">
            <OneCondition>{pass.length > 6 ? <Done /> : <Live />}The password must be more than 6 characters.</OneCondition>
            <OneCondition>{checkPasswordToUpperCase(pass) ? <Done/> : <Live/>}The password must have at least one capital letter.</OneCondition>
            <OneCondition>{checkPasswordToNumber(pass) ? <Done/> : <Live/>}The password must have at least one digit.</OneCondition>
            <OneCondition>{checkPasswordToSpecialSymbol(pass) ? <Done/> : <Live/>}The password must have at least one special symbols.</OneCondition>
        </ConditionsWrapper>
    )
}

const ConditionsWrapper = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    gap: 5px;
`
const OneCondition = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    gap: 5px;
`

const Done = styled(MdDone)`
    height: '28px';
    width: '28px';
    color: #00FFAB;
`

const Live = styled(TbCircleDot)`
    height: '28px';
    width: '28px';
`
export default Conditions;