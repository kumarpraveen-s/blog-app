import React from "react";
import FlexComponentRow from "../components/FlexComponentRow";
import Slider from "../components/Slider";
import FlexComponentColumn from "../components/FlexComponentColumn";
import "../styling/Home.css";
import { Link } from "react-router-dom";
import CardC2 from "../components/CardC2";
import CardC3 from "../components/card3";
import Loader from "../components/Loader";

const Home = ({ Blogs }) => {
  const Tours = Blogs.filter((item) => item.category === "Tourism");
  const Tech = Blogs.filter((item) => item.category === "Technology");
  console.log(Tours, Tech);
  const isValid = Tours.length > 0 && Tech.length > 0;
  return (
    <>
      {!isValid && <Loader />}
      {isValid && (
        <div className="home-container">
          <Slider data={Tours} />
          <div className="second">
            <h2 className="hs2">The Latest</h2>
          </div>
          <FlexComponentRow data={Tours} />
          <div className="second">
            <h2 className="hs2">Top Latest</h2>
          </div>
          <div className="third-container">
            <div className="third-first-children">
              <FlexComponentColumn data={Tech} />
              <Link to="/article/1" className="card-a">
                <div className="img-class">
                  <img
                    src={Tours[0].image}
                    alt="travel"
                    width="100%"
                    height="300px"
                  />
                  <div className="pos-title">
                    <h1>{Tours[0].title}</h1>
                    <h3>{`${Tours[0].category} / ${Tours[0].Date}`}</h3>
                  </div>
                </div>
              </Link>
            </div>
            <div className="third-second-children">
              <div className="tsc-first">
                <h2>Top Posts</h2>
                <CardC2 data={Tours[0]} />
                <CardC3 data={Tours[1]} />
                <CardC3 data={Tours[2]} />
                <CardC3 data={Tours[3]} />
              </div>
            </div>
          </div>
          <div className="second">
            <h2 className="hs2">Top Latest</h2>
          </div>
          <FlexComponentRow data={Tours} />
        </div>
      )}
    </>
  );
};

export default Home;
