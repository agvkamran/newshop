import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { selectAllProducts, selectFavorites, selectFiltered, selectisLoading, selectSearchValue, selectState } from "../modules/redux/selectors";
import { motion } from "framer-motion";
import styled from "styled-components";
import { setFilteredAC, setSearchValueAC } from "../modules/redux/action";
import { IoSearchOutline } from "react-icons/io5";
import { Product } from "./Product";
import { CircleLoader } from "react-spinners";

export const Home = () => {
    const dispatch = useDispatch();
    const allProducts = useSelector(selectAllProducts);
    const isLoading = useSelector(selectisLoading);
    const searchValue = useSelector(selectSearchValue);
    const state = useSelector(selectState);
    const filtered = useSelector(selectFiltered);
    console.log(allProducts)
    const favorites = useSelector(selectFavorites);

    useEffect(() => {
        dispatch(setFilteredAC());
    }, [allProducts, searchValue]);

    const onInputChange = (e) => {
        dispatch(setSearchValueAC(e));
    }

    return (
        // <Main>
        <Wrapper animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}>
            {
                isLoading ?
                    <>
                        <InputWrapper>
                            <SearchIcon />
                            <Input type='text' onChange={(e) => onInputChange(e.target.value)} />
                        </InputWrapper>
                        <Product props={filtered} />
                    </>
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
    min-height: 100vh;
    padding: 30px 80px;
    background: linear-gradient(to bottom right, #FFDEF2, #E6F0FF);
`;

const InputWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-top: 30px;
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
