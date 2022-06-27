import React from "react";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

const ImgList = () => {
  const itemData = [
    {
      img: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fb1GCCU%2FbtrE4VE6ao2%2FQUK72X83S8YY4UTozLAF9K%2Fimg.png",
    },
    {
      img: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbiRh2H%2FbtrE4VLRUjH%2FOyBoSyKSC9Qy3pMXwQkxAk%2Fimg.png",
    },
    {
      img: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FMkmNv%2FbtrE5tafN7P%2F7T4CkM6f6SneaaMEDewS00%2Fimg.png",
    },
    {
      img: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2F5Grsb%2FbtrE5svD2gZ%2FfrmJqyaRr3wawB8UpZ3Mbk%2Fimg.png",
    },
    {
      img: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FblRiYg%2FbtrE3qmi1dg%2F1icIE7GupuvauoAzOPgw20%2Fimg.png",
    },
  ];
  return (
    <ImageList sx={{ maxWidth: 350, maxHeight: 1000 }} cols={1} maxRowHeight={280} className="img-list">
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=164&h=164&fit`}
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
};

export default ImgList;
