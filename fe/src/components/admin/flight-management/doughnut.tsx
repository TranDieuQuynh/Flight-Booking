import React, { useEffect, useRef } from 'react';
import { Chart } from './chart.js';

const DoughnutChart: React.FC = () => {
  const chartRef = useRef<Chart | null>(null); // Ref to store the chart instance

  useEffect(() => {
    const canvas = document.getElementById('miniChart') as HTMLCanvasElement;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Destroy the existing chart instance if it exists
    if (chartRef.current) {
      chartRef.current.destroy();
    }

    // Create a new chart instance and store it in the ref
    chartRef.current = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ['Đang hoạt động', 'Đã hủy'],
        datasets: [
          {
            data: [90, 10], // 90% hoạt động, 10% hủy
            backgroundColor: ['#9933ff', '#ff9999'],
            borderWidth: 0,
          },
        ],
      },
      options: {
        plugins: {
          legend: {
            display: true,
            position: 'bottom',
          },
        },
      },
    });

    // Cleanup function to destroy the chart on component unmount
    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
        chartRef.current = null;
      }
    };
  }, []); // Run once when the component mounts

  return <canvas id="miniChart" />;
};

export default DoughnutChart;
