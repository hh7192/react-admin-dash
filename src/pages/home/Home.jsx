import React from "react";
import Sidebar from "../../componants/sidebar/Sidebar";
import Navbar from "../../componants/navbar/Navbar";
import Widgets from "../../componants/widgets/Widgets";
import "./home.scss";
import Featured from "../../componants/featured/Featured";
import Chart from "../../componants/chart/Chart";
import List from "../../componants/table/Table";

const Home = () => {
  return (
    <section className='home'>
      <Sidebar />
      <div className='home__container'>
        <Navbar />
        <div className='widgets'>
          <Widgets type='user' />
          <Widgets type='order' />
          <Widgets type='earning' />
          <Widgets type='balance' />
        </div>
        <div className='charts'>
          <Featured />
          <Chart title='Last 7 months (Revenue)' />
        </div>
        <div className='list__container'>
          <div className='list__title'>Latest Transactions</div>
          <List />
        </div>
      </div>
    </section>
  );
};

export default Home;
