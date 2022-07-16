import { useDispatch, useSelector } from "react-redux";
import { selectFavorites } from "../modules/redux/selectors"
import { motion } from "framer-motion";
import styled from "styled-components";
import { NavLink } from "react-router-dom"
import { Product } from "./Product";

export const Favorites = () => {
    const dispatch = useDispatch();
    const favorites  = useSelector(selectFavorites);
    return (
        <Main>
            <Product props={favorites} />
        </Main>
    )
}


const Main = styled(motion.div)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    width: 100%;
    min-height: 100vh;
    padding: 30px 80px;
    background: linear-gradient(to bottom right, #FFDEF2, #E6F0FF);
`;