import React, { useEffect, useState } from "react";
import axios from "axios";
import { Bar, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend, ArcElement);

const ConsultancyCharts = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BASEURL}/api/v1/resume-analytics/overall_stats/`,
          {
            headers: {
              Authorization: `Token ${localStorage.getItem("token")}`,
            },
          }
        );
        setData(response.data.data);
        setIsLoading(false);
      } catch (err) {
        setError("Failed to fetch data. Please try again later.");
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <p className="text-center">Loading...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500">{error}</p>;
  }

  if (!data) {
    return <p className="text-center">No data available</p>;
  }

  const barChartData = {
    labels: ["Total Resumes", "Current Month Resumes", "Today's Resumes"],
    datasets: [
      {
        label: "Resume Statistics",
        data: [data.total_resumes, data.current_month_resumes, data.today_resumes],
        backgroundColor: ["#4caf50", "#2196f3", "#ff9800"],
      },
    ],
  };

  const pieChartData = {
    labels: ["Total Consultancy Users", "Unique Skills"],
    datasets: [
      {
        label: "Skill Statistics",
        data: [data.total_consultancy_user, data?.skill_statistics?.total_unique_skills],
        backgroundColor: ["#03a9f4", "#e91e63"],
      },
    ],
  };

  return (
    <div className="p-5 font-sans">
      <h2 className="text-center mb-5 text-xl font-bold">Consultancy Statistics</h2>

      <div className="grid grid-cols-3 gap-5 mb-5">
        {[
          { title: "Total Resumes", value: data.total_resumes },
          { title: "Current Month Resumes", value: data.current_month_resumes },
          { title: "Today's Resumes", value: data.today_resumes },
          { title: "Total Consultancy Users", value: data.total_consultancy_user },
          { title: "Unique Skills", value: data?.skill_statistics?.total_unique_skills },
        ].map(({ title, value }, i) => (
          <div
            key={i}
            className="bg-gray-100 p-5 items-center flex flex-col hover:bg-gray-200 rounded-md shadow-md"
          >
            <h4 className="text-lg font-semibold">{title}</h4>
            <p className="text-3xl font-bold">{value}</p>
          </div>
        ))}
      </div>
      <h2 className="text-center mb-5 text-xl font-bold">Consultancy charts</h2>
      <div className="flex flex-row justify-center">
        <div className="w-1/2 h-64 pr-5">
          <h3 className="text-center mb-3 text-lg font-semibold">Resume Statistics</h3>
          <Pie
            data={barChartData}
            options={{
              responsive: true,
              plugins: {
                legend: {
                  position: "top",
                },
              },
              maintainAspectRatio: false,
            }}
          />
        </div>
        <div className="w-1/2 pl-5 h-64">
          <h3 className="text-center mb-3 text-lg font-semibold">Skill and User Statistics</h3>
          <Pie
            data={pieChartData}
            options={{
              responsive: true,
              plugins: {
                legend: {
                  position: "bottom",
                },
              },
              maintainAspectRatio: false,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ConsultancyCharts;

