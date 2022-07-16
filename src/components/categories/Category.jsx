import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom"
import { selectisLoading, selectProducts } from "../../modules/redux/selectors";
import { loadCategoryASC } from "../../modules/sagas/saga-action";
import { motion } from "framer-motion";
import styled from "styled-components";
import { removeProductsAC } from "../../modules/redux/action";
import { Product } from "../Product";
import { CircleLoader } from "react-spinners";

export const Category = () => {
    const products = useSelector(selectProducts);
    const isLoading = useSelector(selectisLoading);
    const params = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        //@ts-ignore
        dispatch(loadCategoryASC(params.type));
        return () => {
            dispatch(removeProductsAC());
        }
    }, [params.type]);

    return (
        <Main>
            {
                isLoading ? <Wrapper
                    animate={{ opacity: 1 }}
                    initial={{ opacity: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}>
                    <Product props={products} />
                </Wrapper> : <CircleLoader color='#22577E' size={200} />
            }
        </Main>
    )
}

const Main = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
`;

const Wrapper = styled(motion.div)`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    width: 100%;
    min-height: 100vh;
    padding: 30px 80px;
    background: linear-gradient(to bottom right, #FFDEF2, #E6F0FF);
`;
