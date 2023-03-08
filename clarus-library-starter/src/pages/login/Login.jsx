import React from "react";
import {
  FormContainer,
  Header,
  LoginContainer,
  StyledButton,
  StyledForm,
  StyledInput,
} from "./Login.style";

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
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
