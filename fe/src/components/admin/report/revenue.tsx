import React, { useEffect, useRef } from 'react';
import { Chart } from './chart.js';

const RevenueChart: React.FC = () => {
  const chartRef = useRef<Chart | null>(null);

  useEffect(() => {
    const canvas = document.getElementById('revenueChart') as HTMLCanvasElement;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Destroy the existing chart instance if it exists
    if (chartRef.current) {
      chartRef.current.destroy();
    }

    // Create the new chart instance
    chartRef.current = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6'],
        datasets: [
          {
            label: 'Doanh Thu (VNĐ)',
            data: [50000000, 60000000, 70000000, 55000000, 80000000, 90000000],
            backgroundColor: 'rgba(153, 51, 255, 0.6)',
            borderColor: 'rgba(153, 51, 255, 1)',
            borderWidth: 2,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: true },
          title: { display: true, text: 'Biểu Đồ Doanh Thu Theo Tháng' },
        },
      },
    });

    // Cleanup on component unmount
    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
        chartRef.current = null;
      }
    };
  }, []); // Run once on mount

  return (
    <div style={{ position: 'relative', width: '100%', height: '400px' }}>
      <canvas id="revenueChart" />
    </div>
  );
};

export default RevenueChart;
