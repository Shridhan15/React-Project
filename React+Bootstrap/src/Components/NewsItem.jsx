import React from "react";
import image from "../assets/image.png";
const NewsItem = ({ title, desc, src, url }) => {
  return (
    <div
      className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2"
      style={{ maxWidth: "345px" }}
    >
      <img
        src={src ? src : image}
        style={{
          objectFit: "cover",
          height: "200px",
          width: "100%",
        }}
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">{title.slice(0, 50)} </h5>
        <p className="card-text">
          {desc
            ? desc.slice(0, 90)
            : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero, doloribus iste repellat sequi alias architecto? Tempora fuga accusantium nulla recusandae impedit! Recusandae, voluptatibus?"}
        </p>
        <a href={url} className="btn btn-primary">
          Read More
        </a>
      </div>
    </div>
  );
};

export default NewsItem;
