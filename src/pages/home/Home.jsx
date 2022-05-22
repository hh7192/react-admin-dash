import React from "react";
import Sidebar from "../../componants/sidebar/Sidebar";
import Navbar from "../../componants/navbar/Navbar";
import "./home.scss";

const Home = () => {
  return (
    <section className='home'>
      <Sidebar />
      <div className='home__container'>
        <Navbar />
        Container
      </div>
    </section>
  );
};

export default Home;
