import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux"
import { NavLink, useNavigate } from 'react-router-dom';
import { motion } from "framer-motion";
import Theme from '../theme/Theme';
import { IoSearchOutline } from 'react-icons/io5';
import { setSearchValueAC } from '../../modules/redux/action';
import { useEffect, useState } from 'react';
import { RiShoppingBasketLine } from 'react-icons/ri';
import { BsSuitHeartFill } from "react-icons/bs";
import { selectToken } from '../../modules/redux/user/selector';
import Profile from "../Profile";

export const Categories = (props) => {
    const dispatch = useDispatch();
    const token = useSelector(selectToken);
    const [searchInput, setSearchInput] = useState('');
    const { mobMenu, setMobMenu } = props;
    console.log('mobmenu', mobMenu)
    const nav = useNavigate();
    const onInputChange = (e) => {
        setSearchInput(e);
        dispatch(setSearchValueAC(searchInput));
        nav('/search');
        if (!e.length) {
            nav('/');
            setSearchInput('');
        }
    };

    useEffect(() => {
        if (window.location.pathname !== '/search') {
            setSearchInput('');
            dispatch(setSearchValueAC(''))
        }
    }, [searchInput, window.location.pathname]);

    useEffect(() => {
        return () => {
            setSearchInput('');
            dispatch(setSearchValueAC(''))
        }
    }, []);
    
    return (
        <>
            {mobMenu ?
                <>
                    <Main>
                        <Logo to={"/"}>
                            union
                        </Logo>
                        <BurgerIcon onClick={() => setMobMenu(prev => !prev)}>
                            <TopLine line={mobMenu}></TopLine>
                            <CenterLine line={mobMenu}></CenterLine>
                            <BottomLine line={mobMenu}></BottomLine>
                        </BurgerIcon>
                    </Main>
                    <CategoriesWrapperMob>
                        <span onClick={() => setMobMenu(false)}><Category to={"/category/electronics"}>Electronics</Category></span>
                        <span onClick={() => setMobMenu(false)}><Category to={"/category/jewelery"}>Jewelery</Category></span>
                        <span onClick={() => setMobMenu(false)}><Category to={"/category/men's clothing"}>Men's</Category></span>
                        <span onClick={() => setMobMenu(false)}><Category to={"/category/women's clothing"}>Women's</Category></span>
                        {token ?
                            <Profile />
                            :
                            <>
                                <span onClick={() => setMobMenu(false)}><Category to={"/signIn"}>Sign In</Category></span>
                                <span onClick={() => setMobMenu(false)}><Category to={"/signUp"}>Sign Up</Category></span>
                            </>
                        }
                        <InputWrapper>
                            <SearchIcon />
                            <Input type='text' value={searchInput} onChange={(e) => onInputChange(e.target.value)} />
                        </InputWrapper>
                        <span onClick={() => setMobMenu(false)}><Category to={"/favorites"}><BsSuitHeartFill style={{ fontSize: '28px' }} /></Category></span>
                        <span onClick={() => setMobMenu(false)}><Category to={"/basket"}><RiShoppingBasketLine style={{ fontSize: '28px' }} /></Category></span>
                        <Theme />
                    </CategoriesWrapperMob >
                </>
                :
                <Main>
                    <Logo to={"/"}>
                        union
                    </Logo>
                    <BurgerIcon onClick={() => setMobMenu(prev => !prev)}>
                        <TopLine line={mobMenu}></TopLine>
                        <CenterLine line={mobMenu}></CenterLine>
                        <BottomLine line={mobMenu}></BottomLine>
                    </BurgerIcon>
                    <CategoriesWrapper>
                        <Category to={"/category/electronics"}>Electronics</Category>
                        <Category to={"/category/jewelery"}>Jewelery</Category>
                        <Category to={"/category/men's clothing"}>Men's</Category>
                        <Category to={"/category/women's clothing"}>Women's</Category>
                        <InputWrapper>
                            <SearchIcon />
                            <Input type='text' value={searchInput} onChange={(e) => onInputChange(e.target.value)} />
                        </InputWrapper>
                        <Category to={"/favorites"}><BsSuitHeartFill style={{ fontSize: '28px' }} /></Category>
                        <Category to={"/basket"}><RiShoppingBasketLine style={{ fontSize: '28px' }} /></Category>
                        <Theme />
                        {token ?
                            <Profile />
                            :
                            <>
                                <Category to={"/signIn"}>Sign In</Category>
                                <Category to={"/signUp"}>Sign Up</Category>
                            </>
                        }
                    </CategoriesWrapper >
                </Main>
            }
        </>
    )
}

const Main = styled(motion.div)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #558599;
    padding: 15px 30px;
    min-height: 10vh;
`

const BurgerIcon = styled.div`
    display: flex;
    flex-direction: column;
    color: #fff;
    gap: 5px;
    display: none;
    cursor: pointer;
    @media (max-width: 1200px) {
        display: flex;
    }
 `

const TopLine = styled.span`
    height: 4px;
    width: 28px;
    background: #fff;
    border-radius: 5px;
    transition: .4s all ease;
    transform: ${props => props.line ? 'rotate(45deg)' : 'rotate(0deg)'};
    transform-origin: top left;
 `

const CenterLine = styled.span`
    height: 4px;
    background: #fff;
    border-radius: 5px;
    transition: .2s all ease;
    width: ${props => props.line ? '0' : '28px'}
 `

const BottomLine = styled.span`
    height: 4px;
    width: 28px;
    background: #fff;
    border-radius: 5px;
    transition: .4s all ease;
    transform: ${props => props.line ? 'rotate(-45deg)' : 'rotate(0deg)'};
    transform-origin: bottom left;
 `

const Logo = styled(NavLink)`
    font-size: 40px;
    text-decoration: none;
    color: #fff;
`

const CategoriesWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: end;
    width: 100%;
    max-height: 10vh;
    background-color: #558599;
    @media (max-width: 1200px) {
        display: none;
    }
`

const CategoriesWrapperMob = styled.div`
    display: flex;
    align-items: center;
    min-height: 90vh;
    justify-content: center;
    width: 100%;
    background-color: #558599;
    flex-direction: column;
    gap: 10px;
`

const Category = styled(NavLink)`
    margin-left: 20px;
    text-decoration: none;
    font-size: 18px;
    color: #fff;
`

const InputWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 300px;
`

const SearchIcon = styled(IoSearchOutline)`
    color: #000;
    font-size: 30px;
    height: 40px;
    padding-left: 10px;
    background: #fff;
    border-radius: 25px 0 0 25px;
`

const Input = styled.input`
    width: 85%;
    height: 40px;
    padding: 5px 20px;
    border: none;
    outline: none;
    font-size: 20px;
    border-radius: 0 25px 25px 0;
`