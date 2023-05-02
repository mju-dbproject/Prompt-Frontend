import React from "react";
import styled from "styled-components";
import Button from "@mui/material/Button";
import "./MainPage.css";
import { useNavigate } from "react-router";

export default function MainPage() {
    const navigate = useNavigate();

    const navigateToLogin = () => {
        navigate("/login");
    };

    const navigateToJoin = () => {
        navigate("/join");
    };

    return (
        <Container>
            <HomeContainer>
                <Description>당신의 재량을 마음껏 펼치세요{"\n"}</Description>
                <Title>프람트 솔루션</Title>
            </HomeContainer>

            <SignJoinContainer>
                <Button
                    variant="contained"
                    size="large"
                    className="btn"
                    onClick={navigateToLogin}
                >
                    로그인
                </Button>
                <Button
                    variant="outlined"
                    size="large"
                    className="btn"
                    onClick={navigateToJoin}
                >
                    회원가입
                </Button>
            </SignJoinContainer>
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    height: 100vh;
    border: none;
    background-color: #f5f5f5;
`;

const HomeContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60%;
    height: 40vh;
    background-color: white;
    margin-top: 5rem;
    border-radius: 0.4rem;
    font-size: 1.5rem;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
        rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
`;

const Description = styled.h2``;

const Title = styled.h2``;

const SignJoinContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 60%;
    height: 20vh;
    background-color: white;
    border-radius: 0.4rem;
    margin-top: 1rem;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
        rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
`;
