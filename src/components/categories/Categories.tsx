import mens from '../../assets/images/mens.png';
import womens from '../../assets/images/womens.png';
import jewelry from '../../assets/images/jewelry.png';
import electronics from '../../assets/images/electronics.png';
import styled from "styled-components";
import { useDispatch } from "react-redux"
import { NavLink } from 'react-router-dom';
import { motion } from "framer-motion";
import Theme from '../theme/Theme';

export const Categories = () => {
    const dispatch = useDispatch();
    return (
        <Main>
            <Logo to={"/"}>
                LOGO
            </Logo>
            <CategoriesWrapper>
                <Category to={"/category/electronics"}>Electronics</Category>
                <Category to={"/category/jewelery"}>Jewelery</Category>
                <Category to={"/category/men's clothing"}>Men's clothing</Category>
                <Category to={"/category/women's clothing"}>Women's clothing</Category>
                <Category to={"/favorites"}>Favorites</Category>
                <Theme />
            </CategoriesWrapper >
        </Main>
    )
}

const Main = styled(motion.div)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    background-color: lightblue;
    padding: 15px 30px;
`

const Logo = styled(NavLink)`
    font-size: 40px;
    text-decoration: none;
    color: #000;
`

const CategoriesWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: end;
    width: 100%;
    background-color: lightblue;
`

const Category = styled(NavLink)`
    margin-left: 20px;
    text-decoration: none;
    font-size: 20px;
    color: #000;
`
