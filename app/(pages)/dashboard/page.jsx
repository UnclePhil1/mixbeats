"use client";
import React from "react";
import Sidebar from "../../components/sidebar";

const Dashboard = () => {
  return (
    <div className="h-screen overflow-hidden bg-dark">
      <div className="">
        <Sidebar />
      </div>
    </div>
  );
};

export default Dashboard;
