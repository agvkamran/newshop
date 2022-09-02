import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom"
import { selectisLoading, selectProducts } from "../../modules/redux/selectors";
import { loadCategoryASC } from "../../modules/sagas/saga-action";
import { motion } from "framer-motion";
import styled from "styled-components";
import { removeProductsAC } from "../../modules/redux/action";
import { Product } from "../Product";
import { CircleLoader } from "react-spinners";
import Pagination from "../Pagination";

export const Category = () => {
    const products = useSelector(selectProducts);
    const isLoading = useSelector(selectisLoading);
    const params = useParams();
    const dispatch = useDispatch();

    const [stateElems, setStateElems] = useState(products);

    const [activeButton, setActiveButton] = useState(1);
    const [currentPage, setCurrentPage] = useState(1);
    const elementsQuantity = 4;
    const pages = [];

    for (let i = 1; i <= (Math.ceil(products.length / elementsQuantity)); i++) {
        pages.push(i);
    };

    const setElementsInPage = (e) => {
        setActiveButton(e);
        setCurrentPage(e);
    };


    useEffect(() => {
        setStateElems(products.slice((currentPage - 1) * elementsQuantity, (currentPage * elementsQuantity)));
    }, [products, currentPage, elementsQuantity]);

    useEffect(() => {
        setCurrentPage(1);
    }, [products]);

    useEffect(() => {
        dispatch(loadCategoryASC(params.type));
        return () => {
            dispatch(removeProductsAC());
        }
    }, [params.type]);

    return (
        <Wrapper>
            {
                isLoading ?
                    <>
                        <Product props={stateElems} />
                        <Pagination setElementsInPage={setElementsInPage} currentPage={currentPage} pages={pages} activeButton={activeButton} />
                    </>
                    : <CircleLoader color='#22577E' size={200} />
            }
        </Wrapper>
    )
}

const Wrapper = styled(motion.div)`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 50px;
    flex-direction: column;
    width: 100%;
    min-height: 90vh;
    padding: 30px 80px;
    background: #F9F9F9;
`;
