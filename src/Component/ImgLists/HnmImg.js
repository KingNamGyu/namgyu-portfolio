import React from "react";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

const ImgList = () => {
  const itemData = [
    {
      img: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FdGbq3x%2FbtrE3Uf7OFd%2FeGuv215pLKP64mJYtVZn6K%2Fimg.png",
    },
    {
      img: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FEUYoA%2FbtrE4nbo9H8%2F5IkmAt3Kwuk5CIqm1Oy1TK%2Fimg.png",
    },
    {
      img: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fk7h1S%2FbtrE5y3WQ26%2F6Gtj9MpmmoUWtzd0XM9ew1%2Fimg.png",
    },
    {
      img: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FBMP6g%2FbtrE5gCyksK%2FkbHTHHASc7PxWkskhNlqV1%2Fimg.png",
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
