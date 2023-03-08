import React from "react";
import { useNavigate } from "react-router-dom";
import {
  FormContainer,
  Header,
  LoginContainer,
  StyledButton,
  StyledForm,
  StyledInput,
} from "./Login.style";

const Login = ({ setCurrentUser }) => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    setCurrentUser("saliha");
    sessionStorage.setItem("user", "saliha");
    navigate(-1);
  };
  return (
    <LoginContainer>
      <FormContainer>
        <Header>LOGIN HERE</Header>
        <StyledForm onSubmit={handleSubmit}>
          <StyledInput type="text" required />
          <StyledInput type="password" required />
          <StyledButton type="submit">LOGIN</StyledButton>
        </StyledForm>
      </FormContainer>
    </LoginContainer>
  );
};

export default Login;
