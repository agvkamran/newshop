import { useSelector } from "react-redux";
import { selectFavorites } from "../modules/redux/selectors"
import { motion } from "framer-motion";
import styled from "styled-components";
import { useNavigate } from "react-router-dom"
import { selectToken } from "../modules/redux/user/selector";
import { useEffect } from "react";
import { Product } from "./Product";

export const Favorites = () => {
    const favorites = useSelector(selectFavorites);
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
                    {favorites.length > 0 ? <Product props={favorites} /> : <h1>Your favorite list is currently empty!</h1>}
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
    min-height: 90vh;
    background: #F9F9F9;
`;