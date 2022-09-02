import { motion } from "framer-motion";
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { selectAllProducts, selectFiltered, selectisLoading, selectSearchValue, selectState } from "../modules/redux/selectors";
import styled from "styled-components";
import { setFilteredAC } from "../modules/redux/action";
import { CircleLoader } from "react-spinners";
import ALLProducts from "./AllProducts";

export const Home = () => {
    const dispatch = useDispatch();
    const allProducts = useSelector(selectAllProducts);
    const isLoading = useSelector(selectisLoading);
    const searchValue = useSelector(selectSearchValue);
    const state = useSelector(selectState);
    const filtered = useSelector(selectFiltered);

    useEffect(() => {
        dispatch(setFilteredAC());
    }, [allProducts, searchValue]);

    return (
        <Wrapper animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 1 }}
            transition={{ duration: 0.5 }}>
            {
                isLoading ?
                    <ALLProducts props={filtered} />
                    : <CircleLoader color='#22577E' size={200} />
            }
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    min-height: 90vh;
    padding: 30px 80px;
    background: #F9F9F9;

`;