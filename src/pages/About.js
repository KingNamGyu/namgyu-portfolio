import React from "react";
import Footer from "../Component/Footer";
import Header from "../Component/Header";
import CssBaseline from "@mui/material/CssBaseline";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark" ? "#1A2027" : "rgb(200, 207, 228)",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const About = () => {
  return (
    <>
      <Header />
      <CssBaseline />
      <div className="about">
        <Box className="about-box" sx={{ flexGrow: 1 }}>
          <Grid container spacing={0}>
            <Grid item xs={12}>
              <Item>
                <img
                  className="me-img"
                  src={
                    "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FcFn1BO%2FbtrFSYWaJ8Q%2FhJroG0WisjuGcEBLUhNxHk%2Fimg.jpg"
                  }
                />{" "}
              </Item>
            </Grid>
            <Grid item xs={4}>
              <Item>
                <h1>이름</h1>
                <h2>김남규</h2>
              </Item>
            </Grid>
            <Grid item xs={4}>
              <Item>
                <h1>생년월일</h1>
                <h2>1995.05.06</h2>
              </Item>
            </Grid>
            <Grid item xs={4}>
              <Item>
                <h1>주소지</h1>
                <h2>광주광역시 북구</h2>
              </Item>
            </Grid>
            <Grid className="grid" item xs={4}>
              <Item>
                <h1>연락처</h1>
                <h2>010-3125-8140</h2>
              </Item>
            </Grid>
            <Grid className="grid" item xs={4}>
              <Item>
                <h1>이메일</h1>
                <h4>wkfkem@naver.com</h4>
              </Item>
            </Grid>
            <Grid className="grid" item xs={4}>
              <Item>
                <h1>학력</h1>
                <h3>영남이공대학교</h3>
                <h3>(컴퓨터정보학과)</h3>
              </Item>
            </Grid>
          </Grid>
        </Box>
      </div>
      <Footer />
    </>
  );
};

export default About;

