import React, { useState, useEffect } from "react";
import styled from "styled-components";
import img from "../logo.png";
import { AiOutlineShoppingCart, AiOutlineComment } from "react-icons/ai";
import app from "../base";

const Header = () => {
  return (
    <Container>
      <Wrapper>
        <ImageName>
          <Image src={img} />
          <Name>Ella's store</Name>
        </ImageName>
        <LoginD>
          <div
            style={{
              fontSize: "23px",
              width: "80px",
              display: "flex",
              justifyContent: "space-around",
              marginBottom: "5px",
            }}
          >
            <AiOutlineShoppingCart />
            <AiOutlineComment />
          </div>
          <Login>Login</Login>
        </LoginD>
      </Wrapper>
      <Holder>
        <Line1></Line1>
        <Logo src={img}></Logo>
        <Line2></Line2>
      </Holder>
    </Container>
  );
};

export default Header;

const LoginD = styled.div`
  display: flex;
  height: 100%;
  align-items: flex-end;
`;
const Login = styled.div`
  height: 40px;
  width: 80px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  border-radius: 5px;
  color: #e20276;
  margin-right: 20px;
  cursor: pointer;
`;

const Container = styled.div`
  height: 80px;
  width: 100%;
  display: flex;
  flex-direction: column;
  color: white;
`;
const Wrapper = styled.div`
  height: 50px;
  display: flex;
  align-items: flex-end;
  width: 100%;
  justify-content: space-between;
`;
const Line1 = styled.div`
  height: 1px;
  width: 45%;
  background-color: white;
`;
const Line2 = styled.div`
  height: 1px;
  width: 45%;
  background-color: white;
`;
const Logo = styled.img`
  height: 50px;
  width: 50px;
  border-radius: 25px;
  background-color: white;
  object-fit: contain;
`;
const Holder = styled.div`
  display: flex;
  height: 30px;
  align-items: center;
  justify-content: space-between;
`;
const ImageName = styled.div`
  display: flex;
  height: 100%;
  align-items: flex-end;
`;
const Image = styled.img`
  height: 50px;
  width: 90px;
  object-fit: cover;
  flex: 1;
`;
const Name = styled.div`
  background-color: #e20276;
  display: flex;
  font-weight: bold;
  font-style: italic;
  text-transform: uppercase;
  padding: 2px;
  border-radius: 5px 3px;
`;
