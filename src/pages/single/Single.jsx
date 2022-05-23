import React from "react";
import Navbar from "../../componants/navbar/Navbar";
import Sidebar from "../../componants/sidebar/Sidebar";
import "./single.scss";
import Chart from "../../componants/chart/Chart";
import List from "../../componants/table/Table";

const Single = () => {
  return (
    <div className='single'>
      <Sidebar />
      <div className='single__container'>
        <Navbar />
        <div className='top'>
          <div className='left'>
            <div className='editButton'>Edit</div>
            <h1 className='title'>Information</h1>
            <div className='item'>
              <img
                src='https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
                alt='item_image'
                className='itemImg'
              />
              <div className='details'>
                <h1 className='itemTitle'>Jane Doe</h1>
                <div className='detailItem'>
                  <span className='itemKey'>Email</span>
                  <span className='itemValue'>janedoe@gmail.com</span>
                </div>
                <div className='detailItem'>
                  <span className='itemKey'>Phone</span>
                  <span className='itemValue'>+1 5640 350 65</span>
                </div>
                <div className='detailItem'>
                  <span className='itemKey'>Address</span>
                  <span className='itemValue'>
                    2274 Rocky Pony Farm, Coldfoot, Alabama, 35420-9860, US,
                    (251) 343-0129
                  </span>
                </div>
                <div className='detailItem'>
                  <span className='itemKey'>Country</span>
                  <span className='itemValue'>USA</span>
                </div>
              </div>
            </div>
          </div>

          <div className='right'>
            <Chart aspect={3 / 1} title='User Spending (last 7 months)' />
          </div>
        </div>

        <div className='bottom'>
          <h1 className='title'>Last Transactions</h1>
          <List />
        </div>
      </div>
    </div>
  );
};

export default Single;
