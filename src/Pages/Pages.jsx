import FlashDeals from "../Components/flashDeals/FlashDeals";
import Home from "../Components/MainPage/Home";
// import { Outlet } from "react-router-dom";
// eslint-disable-next-line react/prop-types
const Pages = ({productItems}) => {
  return (
    <>
      <Home />
      <FlashDeals productItems={productItems} />
    </>
  );
};

export default Pages;
