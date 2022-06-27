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
              sx={{ bgcolor: "rgb(87, 87, 87);", height: "76vh" }}
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
                      <h1>웹 포트폴리오</h1>
                      <h3>김남규 Front-End Developer 웹 포트폴리오입니다.</h3>
                      <h2>개발기간</h2>
                      <h3>2022.06.~</h3>
                      <h2>사용기술</h2>
                      <h3>React.js, CSS3</h3>
                      <h2>주요기능</h2>
                      <h3>●반응형</h3>
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
              sx={{ bgcolor: "rgb(87, 87, 87);", height: "76vh" }}
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
                      <h1>영화 웹사이트</h1>
                      <h3>넷플릭스를 모티브 한 영화정보 웹사이트입니다.</h3>
                      <h2>개발기간</h2>
                      <h3>2022.05.~</h3>
                      <h2>사용기술</h2>
                      <h3>React.js, Redux, Axios, CSS3</h3>
                      <h2>주요기능</h2>
                      <h3>
                        ●인기 있는 영화 리스트, 최고 평점 영화 리스트, 상영
                        예정작 리스트를 슬라이드 형식으로 넘김
                      </h3>
                      <h3>
                        ●영화에 마우스를 올려두면 영화의 제목과 장르, 평점, 청불
                        여부 확인
                      </h3>
                      <h3>
                        ●영화 카드를 클릭하면 영화의 상세 정보, 예고편을 볼 수
                        있고, 추천 영화 리스트를 슬라이드 형식으로 넘김
                      </h3>
                      <h3>●반응형</h3>
                      <h2>URL</h2>
                      <a href="https://gyunetflix.netlify.app/" target="_blank">
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
              sx={{ bgcolor: "rgb(87, 87, 87);", height: "76vh" }}
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
                      <h1>쇼핑몰 웹사이트</h1>
                      <h3>h&m을 모티브 한 쇼핑몰 웹사이트입니다.</h3>
                      <h2>개발기간</h2>
                      <h3>2022.04.~</h3>
                      <h2>사용기술</h2>
                      <h3>React.js, CSS3</h3>
                      <h2>주요기능</h2>
                      <h3>●로그인&로그아웃</h3>
                      <h3>●상품 검색</h3>
                      <h3>
                        ●로그인 상태일 때 상품 디테일 페이지 이동 비로그인
                        상태라면 로그인 페이지로 이동
                      </h3>
                      <h3>●반응형</h3>
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
              sx={{ bgcolor: "rgb(87, 87, 87);", height: "76vh" }}
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
                      <h1>날씨 앱</h1>
                      <h3>
                        현재 날씨정보를 한눈에 확인할 수 있는 날씨 웹 앱입니다.
                      </h3>
                      <h2>개발기간</h2>
                      <h3>2022.04.~</h3>
                      <h2>사용기술</h2>
                      <h3>React.js, CSS3</h3>
                      <h2>주요기능</h2>
                      <h3>
                        ●현재 위치의 날씨정보 확인 (지역, 온도, 날씨 상태)
                      </h3>
                      <h3>
                        ●다른 도시의 버튼을 클릭하면 해당 도시의 날씨 정보 확인
                      </h3>
                      <h3>●반응형</h3>
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
              sx={{ bgcolor: "rgb(87, 87, 87);", height: "76vh" }}
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
                      <h1>뉴스 웹사이트</h1>
                      <h3>뉴욕타임스를 모티브 한 뉴스 정보 웹사이트입니다.</h3>
                      <h2>개발기간</h2>
                      <h3>2022.03.~</h3>
                      <h2>사용기술</h2>
                      <h3>HTML5, JavaScript, CSS3</h3>
                      <h2>주요기능</h2>
                      <h3>●카테고리별 검색</h3>
                      <h3>●뉴스 기사 검색</h3>
                      <h3>●페이지 네이션 이동</h3>
                      <h3>●반응형</h3>
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
              sx={{ bgcolor: "rgb(87, 87, 87);", height: "76vh" }}
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
                      <h1>투두 앱</h1>
                      <h3>
                      일정을 간단히 추가하고 관리하는 투두 리스트 웹 앱입니다.
                      </h3>
                      <h2>개발기간</h2>
                      <h3>2022.03.~</h3>
                      <h2>사용기술</h2>
                      <h3>HTML5, JavaScript, CSS3</h3>
                      <h2>주요기능</h2>
                      <h3>●일정 추가&삭제</h3>
                      <h3>
                        ●일정 체크 표시를 통해서 진행 중, 끝난 일정 구분 가능
                      </h3>
                      <h3>●반응형</h3>
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
