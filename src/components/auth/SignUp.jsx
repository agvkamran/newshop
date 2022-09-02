import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import Form from "./Form";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { setUserAC } from "../../modules/redux/user/action";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleRegister = (email, password) => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                const { email, uid, accessToken } = user;
                dispatch(setUserAC({ email, uid, accessToken }));
                navigate('/');
            })
            .catch(console.error)
    }

    return (
        <motion.div
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <Form
                title='Registration'
                handleClick={handleRegister}
            />
        </motion.div>
    )
}

export default SignUp;
