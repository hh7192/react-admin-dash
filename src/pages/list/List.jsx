import React from "react";
import "./list.scss";
import Sidebar from "../../componants/sidebar/Sidebar";
import Navbar from "../../componants/navbar/Navbar";
import Datatable from "../../componants/datatable/Datatable";

const List = () => {
  return (
    <div className='list'>
      <Sidebar />
      <div className='list__container'>
        <Navbar />
        <Datatable />
      </div>
    </div>
  );
};

export default List;
