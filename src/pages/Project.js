import React from "react";
import Footer from "../Component/Footer";
import Header from "../Component/Header";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import NewsImg from "../Component/ImgLists/NewsImg";
import HnmImg from "../Component/ImgLists/HnmImg";
import NetflixImg from "../Component/ImgLists/NetflixImg";
import TodoImg from "../Component/ImgLists/TodoImg";
import WeatherImg from "../Component/ImgLists/WeatherImg";
import PofolImg from "../Component/ImgLists/PofolImg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAndroid, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faCircle, faSignal } from "@fortawesome/free-solid-svg-icons";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
const Project = () => {
  return (
    <>
      <Header />
      <React.Fragment>
        <CssBaseline />
        <div className="project">
          <Container maxWidth="md" className="pro-con">
            <Box
              className="pro-box"
              sx={{ bgcolor: "rgb(87, 87, 87);", padding: "30px 10px"}}
            >
              <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                  <Grid item xs={6} className="pro-grid">
                    <Item className="pro-item">
                      <a className="pro-icon">
                        <FontAwesomeIcon icon={faAndroid} size="1x" />
                        <FontAwesomeIcon icon={faCircle} size="1x" />
                        <FontAwesomeIcon
                          className="faSignal"
                          icon={faSignal}
                          size="1x"
                        />
                      </a>
                      <a
                        href="https://github.com/KingNamGyu/namgyu-netflix"
                        target="_blank"
                      >
                        <div className="img-list">
                          <PofolImg />
                        </div>
                        <FontAwesomeIcon
                          className="pro-icon1"
                          icon={faGithub}
                          size="3x"
                        />
                      </a>
                    </Item>
                  </Grid>
                  <Grid item xs={6} className="pro-grid">
                    <Item className="project-box">
                      <h1>??? ???????????????</h1>
                      <h3>????????? Front-End Developer ??? ????????????????????????.</h3>
                      <h2>????????????</h2>
                      <h3>2022.06.~</h3>
                      <h2>????????????</h2>
                      <h3>React.js, CSS3</h3>
                      <h2>????????????</h2>
                      <h3>????????????</h3>
                      <h2>URL</h2>
                      <a href="https://gyupofol.netlify.app/" target="_blank">
                        <h3>https://gyupofol</h3>
                      </a>
                    </Item>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Container>
        </div>

        <div className="project">
          <Container maxWidth="md" className="pro-con">
            <Box
              className="pro-box"
              sx={{ bgcolor: "rgb(87, 87, 87);", padding: "30px 10px" }}
            >
              <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                  <Grid item xs={6} className="pro-grid">
                    <Item className="pro-item">
                      <a className="pro-icon">
                        <FontAwesomeIcon icon={faAndroid} size="1x" />
                        <FontAwesomeIcon icon={faCircle} size="1x" />
                        <FontAwesomeIcon
                          className="faSignal"
                          icon={faSignal}
                          size="1x"
                        />
                      </a>
                      <a
                        href="https://github.com/KingNamGyu/namgyu-portfolio"
                        target="_blank"
                      >
                        <div className="img-list">
                          <NetflixImg />
                        </div>
                        <FontAwesomeIcon
                          className="pro-icon1"
                          icon={faGithub}
                          size="3x"
                        />
                      </a>
                    </Item>
                  </Grid>
                  <Grid item xs={6} className="pro-grid">
                    <Item className="project-box">
                      <h1>?????? ????????????</h1>
                      <h3>??????????????? ????????? ??? ???????????? ?????????????????????.</h3>
                      <h2>????????????</h2>
                      <h3>2022.05.~</h3>
                      <h2>????????????</h2>
                      <h3>React.js, Redux, Axios, REST API, Router, CSS3</h3>
                      <h2>????????????</h2>
                      <h3>
                        ????????? ?????? ?????? ?????????, ?????? ?????? ?????? ?????????, ??????
                        ????????? ???????????? ???????????? ???????????? ??????
                      </h3>
                      <h3>
                        ???????????? ???????????? ???????????? ????????? ????????? ??????, ??????, ??????
                        ?????? ??????
                      </h3>
                      <h3>
                        ????????? ????????? ???????????? ????????? ?????? ??????, ???????????? ??? ???
                        ??????, ?????? ?????? ???????????? ???????????? ???????????? ??????
                      </h3>
                      <h3>????????????</h3>
                      <h2>URL</h2>
                      <a href="https://gyunetflix.netlify.app//" target="_blank">
                        <h3>https://gyunetflix</h3>
                      </a>
                    </Item>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Container>
        </div>

        <div className="project">
          <Container maxWidth="md" className="pro-con">
            <Box
              className="pro-box"
              sx={{ bgcolor: "rgb(87, 87, 87);", padding: "30px 10px" }}
            >
              <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                  <Grid item xs={6} className="pro-grid">
                    <Item className="pro-item">
                      <a className="pro-icon">
                        <FontAwesomeIcon icon={faAndroid} size="1x" />
                        <FontAwesomeIcon icon={faCircle} size="1x" />
                        <FontAwesomeIcon
                          className="faSignal"
                          icon={faSignal}
                          size="1x"
                        />
                      </a>
                      <a
                        href="https://github.com/KingNamGyu/namgyu-h-m"
                        target="_blank"
                      >
                        <div className="img-list">
                          <HnmImg />
                        </div>
                        <FontAwesomeIcon
                          className="pro-icon1"
                          icon={faGithub}
                          size="3x"
                        />
                      </a>
                    </Item>
                  </Grid>
                  <Grid item xs={6} className="pro-grid">
                    <Item className="project-box">
                      <h1>????????? ????????????</h1>
                      <h3>h&m??? ????????? ??? ????????? ?????????????????????.</h3>
                      <h2>????????????</h2>
                      <h3>2022.04.~</h3>
                      <h2>????????????</h2>
                      <h3>React.js, REST API, Router, CSS3</h3>
                      <h2>????????????</h2>
                      <h3>????????????&????????????</h3>
                      <h3>????????? ??????</h3>
                      <h3>
                        ???????????? ????????? ??? ?????? ????????? ????????? ?????? ????????????
                        ???????????? ????????? ???????????? ??????
                      </h3>
                      <h3>????????????</h3>
                      <h2>URL</h2>
                      <a href="https://gyuhnm.netlify.app/" target="_blank">
                        <h3>https://gyuhnm</h3>
                      </a>
                    </Item>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Container>
        </div>

        <div className="project">
          <Container maxWidth="md" className="pro-con">
            <Box
              className="pro-box"
              sx={{ bgcolor: "rgb(87, 87, 87);", padding: "30px 10px" }}
            >
              <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                  <Grid item xs={6} className="pro-grid">
                    <Item className="pro-item">
                      <a className="pro-icon">
                        <FontAwesomeIcon icon={faAndroid} size="1x" />
                        <FontAwesomeIcon icon={faCircle} size="1x" />
                        <FontAwesomeIcon
                          className="faSignal"
                          icon={faSignal}
                          size="1x"
                        />
                      </a>
                      <a
                        href="https://github.com/KingNamGyu/namgyu-weather"
                        target="_blank"
                      >
                        <div className="img-list">
                          <WeatherImg />
                        </div>
                        <FontAwesomeIcon
                          className="pro-icon1"
                          icon={faGithub}
                          size="3x"
                        />
                      </a>
                    </Item>
                  </Grid>
                  <Grid item xs={6} className="pro-grid">
                    <Item className="project-box">
                      <h1>?????? ???</h1>
                      <h3>
                        ?????? ??????????????? ????????? ????????? ??? ?????? ?????? ??? ????????????.
                      </h3>
                      <h2>????????????</h2>
                      <h3>2022.04.~</h3>
                      <h2>????????????</h2>
                      <h3>React.js, REST API, CSS3</h3>
                      <h2>????????????</h2>
                      <h3>
                        ????????? ????????? ???????????? ?????? (??????, ??????, ?????? ??????)
                      </h3>
                      <h3>
                        ????????? ????????? ????????? ???????????? ?????? ????????? ?????? ?????? ??????
                      </h3>
                      <h3>????????????</h3>
                      <h2>URL</h2>
                      <a href="https://gyuweather.netlify.app/" target="_blank">
                        <h3>https://gyuweather</h3>
                      </a>
                    </Item>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Container>
        </div>

        <div className="project">
          <Container maxWidth="md">
            <Box
              className="pro-box"
              sx={{ bgcolor: "rgb(87, 87, 87);", padding: "30px 10px" }}
            >
              <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                  <Grid item xs={6} className="pro-grid">
                    <Item className="pro-item">
                      <a className="pro-icon">
                        <FontAwesomeIcon icon={faAndroid} size="1x" />
                        <FontAwesomeIcon icon={faCircle} size="1x" />
                        <FontAwesomeIcon
                          className="faSignal"
                          icon={faSignal}
                          size="1x"
                        />
                      </a>
                      <a
                        href="https://github.com/KingNamGyu/namgyu-news"
                        target="_blank"
                      >
                        <div className="img-list">
                          <NewsImg />
                        </div>
                        <FontAwesomeIcon
                          className="pro-icon1"
                          icon={faGithub}
                          size="3x"
                        />
                      </a>
                    </Item>
                  </Grid>
                  <Grid item xs={6} className="pro-grid">
                    <Item className="project-box">
                      <h1>?????? ????????????</h1>
                      <h3>?????????????????? ????????? ??? ?????? ?????? ?????????????????????.</h3>
                      <h2>????????????</h2>
                      <h3>2022.03.~</h3>
                      <h2>????????????</h2>
                      <h3>HTML5, JavaScript, REST API, CSS3</h3>
                      <h2>????????????</h2>
                      <h3>?????????????????? ??????</h3>
                      <h3>????????? ?????? ??????</h3>
                      <h3>???????????? ????????? ??????</h3>
                      <h3>????????????</h3>
                      <h2>URL</h2>
                      <a href="https://gyunews.netlify.app/" target="_blank">
                        <h3>https://gyunews</h3>
                      </a>
                    </Item>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Container>
        </div>

        <div className="project">
          <Container maxWidth="md" className="pro-con">
            <Box
              className="pro-box"
              sx={{ bgcolor: "rgb(87, 87, 87);", padding: "30px 10px" }}
            >
              <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                  <Grid item xs={6} className="pro-grid">
                    <Item className="pro-item">
                      <a className="pro-icon">
                        <FontAwesomeIcon icon={faAndroid} size="1x" />
                        <FontAwesomeIcon icon={faCircle} size="1x" />
                        <FontAwesomeIcon
                          className="faSignal"
                          icon={faSignal}
                          size="1x"
                        />
                      </a>
                      <a
                        href="https://github.com/KingNamGyu/namgyu-to-do-list"
                        target="_blank"
                      >
                        <div className="img-list">
                          <TodoImg />
                        </div>
                        <FontAwesomeIcon
                          className="pro-icon1"
                          icon={faGithub}
                          size="3x"
                        />
                      </a>
                    </Item>
                  </Grid>
                  <Grid item xs={6} className="pro-grid">
                    <Item className="project-box">
                      <h1>?????? ???</h1>
                      <h3>
                      ????????? ????????? ???????????? ???????????? ?????? ????????? ??? ????????????.
                      </h3>
                      <h2>????????????</h2>
                      <h3>2022.03.~</h3>
                      <h2>????????????</h2>
                      <h3>HTML5, JavaScript, CSS3</h3>
                      <h2>????????????</h2>
                      <h3>????????? ??????&??????</h3>
                      <h3>
                        ????????? ?????? ????????? ????????? ?????? ???, ?????? ?????? ?????? ??????
                      </h3>
                      <h3>????????????</h3>
                      <h2>URL</h2>
                      <a href="https://gyutodo.netlify.app/" target="_blank">
                        <h3>https://gyutodo</h3>
                      </a>
                    </Item>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Container>
        </div>
      </React.Fragment>
      <Footer />
    </>
  );
};

export default Project;
