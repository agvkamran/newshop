import { useState } from "react";
import { checkPasswordToNumber, checkPasswordToSpecialSymbol, checkPasswordToUpperCase } from "../../utils/utils";
import './form.css';
import { IoEyeSharp, IoEyeOffSharp } from "react-icons/io5";
import Conditions from "../Condtions";
import { NavLink } from "react-router-dom";
import { TbHanger } from "react-icons/tb";
import styled from "styled-components";

const Form = ({ title, handleClick }) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [disabled, setDisabled] = useState(true);
    const [eye, setEye] = useState(false);

    const setPassword = (pass) => {
        setPass(pass);
        if ((checkPasswordToSpecialSymbol(pass) && checkPasswordToNumber(pass) && checkPasswordToUpperCase(pass)) && pass.length > 6) {
            setDisabled(false);
        }
        else {
            setDisabled(true);
        }
    };

    const sendInfo = () => {
        handleClick(email, pass);
        setEmail('');
        setPass('');
    };

    return (
        <div className="form_wrapper">
            <div className="inner_wrapper">
                <Hanger />
                <div className="titles_wrapper">
                    {title === 'Login'
                        ? <div className="titles_inner">
                            <h2 className="welcome">
                                Welcome back!
                            </h2>
                            <p className="paragraph">If you don't have an account</p>
                            <NavLink className='navlink_button' to='/signUp'>Registration</NavLink>
                        </div>
                        : <div className="titles_inner">
                            <h2 className="welcome">
                                Welcome!
                            </h2>
                            <p className="paragraph">Log in to your account</p>
                            <NavLink className='navlink_button' to='/signIn'>Login</NavLink>
                        </div>
                    }
                </div>
                <div className="inner_form">
                    <input type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder='Email'
                        className="input" />
                    <input type={eye ? 'password' : 'text'}
                        value={pass}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder='Password'
                        className="password input"
                    />
                    {eye
                        ? <IoEyeSharp className='eye' style={{ height: '28px', width: '28px' }} onClick={() => setEye(prev => !prev)} />
                        : <IoEyeOffSharp className='eye' style={{ height: '28px', width: '28px' }} onClick={() => setEye(prev => !prev)} />
                    }
                    <button className='button' onClick={() => sendInfo(email, pass)}>{title}</button>
                    <Conditions pass={pass} checkPasswordToUpperCase={checkPasswordToUpperCase} checkPasswordToNumber={checkPasswordToNumber} checkPasswordToSpecialSymbol={checkPasswordToSpecialSymbol} />
                </div>
            </div>
        </div>
    )
}

const Hanger = styled(TbHanger)`
    font-size: 48px;
    position: absolute;
    top: 10px;
    left: 10px;
    transform: rotate(-45deg);
    color: #fff;
`
export default Form;