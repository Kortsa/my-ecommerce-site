import img1 from "../../images/category/cat1.png";
import img2 from "../../images/category/cat2.png";
import img3 from "../../images/category/cat3.png";
import img4 from "../../images/category/cat4.png";
import img5 from "../../images/category/cat5.png";
import img6 from "../../images/category/cat6.png";
import img7 from "../../images/category/cat7.png";
import img8 from "../../images/category/cat8.png";
import img9 from "../../images/category/cat9.png";
import img10 from "../../images/category/cat10.png";
import img11 from "../../images/category/cat11.png";

const Categories = () => {
  const data = [
    {
      cateImg: img1,
      cateName: "Fashion",
    },
    {
      cateImg: img2,
      cateName: "Electronic",
    },
    {
      cateImg: img3,
      cateName: "Cars",
    },
    {
      cateImg: img4,
      cateName: "Home & Garden",
    },
    {
      cateImg: img5,
      cateName: "Gifts",
    },
    {
      cateImg: img6,
      cateName: "Music",
    },
    {
      cateImg: img7,
      cateName: "Health & Beauty",
    },
    {
      cateImg: img8,
      cateName: "Pets",
    },
    {
      cateImg: img9,
      cateName: "Baby Toys",
    },
    {
      cateImg: img10,
      cateName: "Groceries",
    },
    {
      cateImg: img11,
      cateName: "Books",
    },
  ];
  return (
    <>
      <div className="category">
        {data.map((value, index) => {
          return (
            <div className="box f_flex" key={index}>
              <img src={value.cateImg} alt="" />
              <span>{value.cateName}</span>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Categories;
