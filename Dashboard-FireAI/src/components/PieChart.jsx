
import React from "react";
import { Pie } from "react-chartjs-2"; 
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'; 
import ChartDataLabels from 'chartjs-plugin-datalabels'; 
import "../styles/PieChart.css"; 


ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels); 

const PieChart = ({ categoriesData }) => {
    const total = Object.values(categoriesData).reduce((sum, value) => sum + value, 0); 

    const data = {
        labels: Object.keys(categoriesData), 
        datasets: [
            {
                data: Object.values(categoriesData), 
                backgroundColor: [
                    "#FF6384",
                    "#36A2EB",
                    "#FFCE56",
                    "#4BC0C0",
                    "#9966FF",
                ],
                borderColor: "#ffffff", 
                borderWidth: 2, 
            },
        ],
    };

    const options = {
        plugins: {
            tooltip: {
                enabled: false, 
            },
            datalabels: {
                color: '#ffffff', 
                formatter: (value, context) => {
                    const category = context.chart.data.labels[context.dataIndex]; 
                    const percentage = ((value / total) * 100).toFixed(2); 
                    return `${value}%`; 
                },
            },
            legend: {
                display: true, 
                position: "right", 
            },
        },
        responsive: true, 
        maintainAspectRatio: false, 
    };

    return (
        <div className="pie-chart-container">
            <h2 className="pie-chart-title">Product Category Distribution</h2>
            <div className="pie-chart-wrapper">
                <Pie data={data} options={options} />
            </div>
        </div>
    );
};

export default PieChart;
