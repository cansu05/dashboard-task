"use client";

import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
);

const data = {
  labels: Array.from({ length: 24 }, (_, i) => `${i}:00`),
  datasets: [
    {
      label: "Bugün (kWh)",
      data: [
        1.2, 1.4, 1.1, 1.6, 1.7, 1.3, 1.5, 1.2, 1.0, 0.9, 1.1, 1.3, 1.4, 1.2,
        1.1, 1.0, 0.8, 0.9, 1.0, 1.2, 1.3, 1.1, 1.0, 0.9,
      ],
      borderColor: "Pink",
      tension: 0.4,
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
};

export default function EnergyChart() {
  return (
    <section className="w-full h-[400px]">
      <Line data={data} options={options} />
    </section>
  );
}
