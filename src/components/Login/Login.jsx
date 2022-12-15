import { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

import { ButtonText } from "../ui/ButtonText";

import "./Login.scss";

export const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const location = useLocation();
  const pathname = location.state ? location.state.from : "/product";

  const [isRegistration, setIsRegistrtion] = useState(false);
  const [inputStatus, setInputStatus] = useState({
    loginValue: "",
    passwordValue: "",
    loginWarning: "",
    passwordWarning: "",
    authWarning: "",
  });

  const handleSubmit = (
    event,
    login = inputStatus.loginValue,
    password = inputStatus.passwordValue
  ) => {
    if (isRegistration) {
      event.stopPropagation();
      localStorage.setItem(login, password);
      sessionStorage.setItem("isAuth", true);
      dispatch({ type: "LOGIN" });
      if (pathname) {
        navigate(pathname);
      } else {
        navigate("/product");
      }
    } else {
      if (localStorage.getItem(login) === password) {
        sessionStorage.setItem("isAuth", true);
        setInputStatus({
          ...inputStatus,
          authWarning: "",
        });
        dispatch({
          type: "LOGIN",
        });
        if (pathname) {
          navigate(pathname);
        } else {
          navigate("/product");
        }
      } else {
        setInputStatus({
          ...inputStatus,
          authWarning: "Логин или пароль неверен",
        });
      }
    }
    event.preventDefault();
  };

  const handleLinkClick = (e) => {
    setIsRegistrtion(!isRegistration);
    e.preventDefault();
  };

  const handleInputChange = (event) => {
    setInputStatus({
      ...inputStatus,
      [event.target.name]: event.target.value,
      loginWarning: "",
      passwordWarning: "",
      authWarning: "",
    });
  };

  const checkInput = (e, inputValue, inputName) => {
    if (inputValue.length === 0) {
      e.preventDefault();
      return "Поле не должно быть пустым";
    } else if (inputValue.length < 4 && isRegistration) {
      e.preventDefault();
      return `${inputName} должен содержать не менее 4-х символов`;
    } else {
      return "";
    }
  };

  const handleMouseEnter = (e) => {
    setInputStatus({
      ...inputStatus,
      loginWarning: checkInput(e, inputStatus.loginValue, "Логин"),
      passwordWarning: checkInput(e, inputStatus.passwordValue, "Пароль"),
    });
  };

  return (
    <section className="section-authentication">
      <form
        onSubmit={handleSubmit}
        className="authentication-form"
        action=""
        method="post"
      >
        <button className="form__link" onClick={handleLinkClick}>
          {isRegistration ? "Авторизоваться" : "Зарегистрироваться"}
        </button>
        <h2 className="form__header">
          {isRegistration ? "Регистрация" : "вход"}
        </h2>
        <label className="form__label-input">
          <input
            className="form__input-text"
            type="text"
            name="loginValue"
            placeholder="Логин"
            onChange={handleInputChange}
          />

          <span className="input__warning-text">
            {inputStatus.loginWarning}
          </span>
        </label>
        <label className="form__label-input">
          <input
            className="form__input-text"
            type="password"
            name="passwordValue"
            placeholder="Пароль"
            onChange={handleInputChange}
          />

          <span className="input__warning-text">
            {inputStatus.passwordWarning}
          </span>
        </label>

        <label className="form-checkbox__label">
          <input className="form-checkbox__input" type="checkbox" />
          <span className="form-checkbox__box"></span>
          <span className="form-checkbox__label-text">
            Я согласен получать обновления на почту
          </span>
        </label>

        <label onMouseEnter={handleMouseEnter} className="form__label-input ">
          <span className="input__warning-text input__warning-text_auth">
            {!isRegistration ? inputStatus.authWarning : ""}
          </span>
          <ButtonText
            theme="orange"
            text={isRegistration ? "Зарегистрироваться" : "Войти"}
          />
        </label>
      </form>
    </section>
  );
};
