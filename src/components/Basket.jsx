import { useSelector } from "react-redux";
import { selectBasket } from "../modules/redux/selectors";
import { motion } from "framer-motion";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { selectToken } from "../modules/redux/user/selector";
import { Product } from "./Product";

const Basket = () => {
    const basket = useSelector(selectBasket);
    const token = useSelector(selectToken);
    const navigate = useNavigate();

    useEffect(() => {
        if (!token) {
            navigate('/signIn')
        }
    }, []);

    return (
        <>
            {token && (
                <Wrapper>
                    {basket.length > 0 ? <Product props={basket} /> : <h1>Your favorite list is currently empty!</h1>}
                </Wrapper>
            )
            }
        </>
    )
}

const Wrapper = styled(motion.div)`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    flex-wrap: wrap;
    padding: 30px 80px;
`;

export default Basket;