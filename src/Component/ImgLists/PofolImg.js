import React from "react";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

const ImgList = () => {
  const itemData = [
    {
      img: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FcylZdV%2FbtrFLC7hiFZ%2Fb4mmhPo4zYy3tvvtFfq5FK%2Fimg.png",
    },
    {
      img: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FreJFr%2FbtrFUN0sQpU%2FDkXKPt9eLW37Q6A0gHGbHk%2Fimg.png",
    },
    {
      img: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbP9NCM%2FbtrFVh8eRa3%2FMqxE7H87Kw9ZKfBZeU0ju0%2Fimg.png",
    },
    {
      img: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbvA6Bt%2FbtrFWb7ByPh%2FKZWhgA5BnzKNkK5KQUylS0%2Fimg.png",
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
