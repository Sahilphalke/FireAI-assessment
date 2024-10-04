
import React from "react";
import { Bar } from "react-chartjs-2"; 
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title } from 'chart.js'; 
import "../styles/BarChart.css"; 


ChartJS.register(CategoryScale, LinearScale, BarElement, Title);

const BarChart = ({ salesData }) => {
    const data = {
        labels: Array.from({ length: 12 }, (_, i) => `Month ${i + 1}`),
        datasets: [
            {
                label: "Sales",
                data: salesData,
                backgroundColor: "rgba(0,0,255,0.3)",
            },
        ],
    };

    return (
        <div className="bar-chart-container">
            <h2 className="bar-chart-title">Sales Over the Last 12 Months</h2>
            <Bar data={data} />
        </div>
    );
};

export default BarChart;
