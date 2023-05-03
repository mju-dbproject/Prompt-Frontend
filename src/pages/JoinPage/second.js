import React from "react";
import styled from "styled-components";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router";

export default function JoinPageSecond() {
    return (
        <Container>
            <div>
                <Title>회원가입</Title>
            </div>

            <Box
                component="form"
                sx={{
                    "& .MuiTextField-root": { m: 1, width: "25ch" },
                }}
                noValidate
                autoComplete="off"
            >
                <div>
                    <TextField
                        required
                        id="outlined-required"
                        label="ㅜ"
                        defaultValue="이름을 입력하세요."
                    />
                </div>
                <div>
                    <TextField
                        required
                        id="outlined-required"
                        label="Password"
                        defaultValue="비밀번호을 입력하세요."
                    />
                </div>
                <div>
                    <TextField
                        required
                        id="outlined-required"
                        label="Password"
                        defaultValue="비밀번호을 재입력하세요."
                    />
                </div>
                <Button variant="contained" size="large">
                    다음
                </Button>
            </Box>
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    justify-content: center;
    width: 35vw;
    height: 80vh;
    margin: 0 auto;
    background-color: lightgray;
    margin-top: 4.3rem;
    border-radius: 0.4rem;
    padding: 20px 0;
    border: 0.1rem solid lightgray;
    background-color: white;
`;

const Title = styled.div`
    display: block;
    font-size: 1.5rem;
`;
