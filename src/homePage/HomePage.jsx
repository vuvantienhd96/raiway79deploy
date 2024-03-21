import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'right',
    },
    title: {
      display: true,
      text: 'demo chart simple',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      label: 'sell',
      data: [200, 3000, 400, 500, 100, 50, 10],
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'buy',
      data: [100, 2000, 300, 400, 6000, 200, 400],
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

const Homepage = () => {
  return <Bar options={options} data={data} />;
};

export default Homepage;
