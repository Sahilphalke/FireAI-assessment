
import React from "react";
import BarChart from "./BarChart";
import PieChart from "./PieChart"; 
import UserTable from "./UserTable";
import { salesData, categoriesData, usersData } from "../data/mockData"; 
import "../styles/HomePage.css";

const HomePage = () => {
    return (
        <div className="homepage">
            <div className="charts">
                <BarChart salesData={salesData} />
                <PieChart categoriesData={categoriesData} /> {}
            </div>
            <UserTable usersData={usersData} />
        </div>
    );
};

export default HomePage;
