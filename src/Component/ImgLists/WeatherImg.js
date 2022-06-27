import React from "react";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

const ImgList = () => {
  const itemData = [
    {
      img: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FQOE4R%2FbtrFAQioM32%2Fdi10fqGG0PjqdL6Lg7Ydt0%2Fimg.png",
    },
    {
      img: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2F2Pf5O%2FbtrFvVzvhuI%2FfghWSz30uQX1qtlCIWGZ01%2Fimg.png",
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
