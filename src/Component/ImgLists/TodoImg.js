import React from "react";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

const ImgList = () => {
  const itemData = [
    {
      img: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FddsSlH%2FbtrFxi1TRIr%2FUuw9cKXiGCjb78i9oUYn5K%2Fimg.png",
    },
    {
      img: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fdd32vS%2FbtrFzxRxf7M%2FHlzJbmbQm0dBGhckSIhZx1%2Fimg.png",
    },
    {
      img: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FuCwJt%2FbtrFAh1sVut%2FCKGntMeKMc5SzZhk4sIMk0%2Fimg.png",
    },
    {
      img: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbW8qAM%2FbtrFAjZheJU%2FTc6vCjbG8IVPyHgVlgrPnK%2Fimg.png",
    },
    {
      img: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fk7i2p%2FbtrFzOrWs7J%2Fek24jia20JVKVoOOLwke7K%2Fimg.png",
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
