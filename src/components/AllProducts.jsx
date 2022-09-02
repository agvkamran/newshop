import { motion } from "framer-motion";
import styled from "styled-components";
import { NavLink } from "react-router-dom"
import { HiArrowNarrowRight } from "react-icons/hi";
import { useEffect, useState } from "react";
import Scroll from "./Scroll";
import Pagination from "./Pagination";
import { Product } from "./Product";
import { useSelector } from "react-redux";

export const ALLProducts = ({ props }) => {
    const [scrollToTop, setScrollToTop] = useState(false);
    const [stateElems, setStateElems] = useState(props);
    const [activeButton, setActiveButton] = useState(1);
    const elementsQuantity = 4;
    const pages = [];
    const [currentPage, setCurrentPage] = useState(1);

    for (let i = 1; i <= (Math.ceil(props.length / elementsQuantity)); i++) {
        pages.push(i);
    };

    const setElementsInPage = (e) => {
        setActiveButton(e);
        setCurrentPage(e);
    };

    useEffect(() => {
        setStateElems(props.slice((currentPage - 1) * elementsQuantity, (currentPage * elementsQuantity)));
    }, [props, currentPage, elementsQuantity]);

    useEffect(() => {
        const windowScrollFunction = window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                setScrollToTop(prev => !prev);
            }
            else {
                setScrollToTop(false)
            }
        })
        return () => window.removeEventListener('scroll', windowScrollFunction);
    }, [window.scrollY]);

    return (
        <Wrapper
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 1 }}
            transition={{ duration: 0.5 }}>
            {
                scrollToTop
                &&
                <ScrollWrapper>
                    <Scroll />
                </ScrollWrapper>
            }
            <Product props={stateElems} />
            <Pagination setElementsInPage={setElementsInPage} currentPage={currentPage} pages={pages} activeButton={activeButton} />
        </Wrapper>
    )
}

export const Wrapper = styled(motion.div)`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    // background: red;
    gap: 50px;
    padding: 30px 80px;
    flex-direction: column;
    position: relative;
`;

export const PaginationWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
`

export const Products = styled.div`
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    align-items: center;    
    justify-content: center;
`

export const ScrollWrapper = styled(motion.div)`
    position: fixed;
    bottom: 10px;
    right: 10px;
    width: 70px;
    height: 40px;
    z-index: 2;
`

export const ImageWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 100%;
    transition: .3s all ease;
`;

export const Circle = styled(NavLink)`
    width: 0em;
    height: 0em;
    border-radius: 50%;
    position: absolute;
    background-color: #558599;
    transition: .5s all ease;
    bottom: -25%;
    right: -12%;
`;

export const ProductWrapper = styled(motion.div)`
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: column;
    min-width: 22em;
    max-width: 22em;
    min-height: 490px;
    max-height: 490px;
    margin: 30px 10px;
    padding-top: 20px;
    text-decoration: none;
    box-shadow: rgba(50, 50, 93, 0.10) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
    background-color: #fff;
    border-radius: 25px;
    position: relative;
    transition: box-shadow .2s linear;
    overflow: hidden;
    cursor: auto;
    &:hover ${Circle}{
        background-color: #92B7C0;
        width: 9em;
        height: 9em;
        cursor: pointer;
        opacity: 0.6;
    }
    &:hover {
        box-shadow: rgba(50, 50, 93, 0.35) 0px 50px 300px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
    }
`;

export const Image = styled.img`
    min-height: 325px;
    max-height: 325px;
    min-width: 75%;
    max-width: 75%;
`;

export const Price = styled.p`
    font-size: 1.5em;
    color: #000;
    font-weight: bold;
`;

export const Info = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 10px;
    width: 100%;
    padding: 2em;
    position: relative;
`;

export const ArrowRight = styled(HiArrowNarrowRight)`
    font-size: 32px;
`;

export const Heart = styled.div`
    position: absolute;
    top: 20px;
    right: 20px;
`

export default ALLProducts;