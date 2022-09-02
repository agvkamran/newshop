import { BsArrowUpCircle } from "react-icons/bs";
import styled from "styled-components";

const Scroll = () => {
    const goTop = () => {
        window.scroll({
            top: 0,
            behavior: 'smooth'
        })
    }
    return (
        <ArrowUp onClick={() => goTop()}/>
    )
}

export default Scroll;

const ArrowUp = styled(BsArrowUpCircle)`
    border: 1px solid #558599;
    width: 70px;
    height: 40px;
    padding: 5px;
    cursor: pointer;
    background: #558599;
    color: #fff;
`