import React, { useEffect } from "react";
import Router from "next/router";

const HomePage: React.FC = () => {
  useEffect(() => {
    const { pathname } = Router;
    if (pathname == "/") {
      Router.push("/product/1");
    }
  });
  return <>HomePage</>;
};

export default HomePage;
