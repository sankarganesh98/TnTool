import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar, Line, Doughnut } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  ArcElement,
  Tooltip,
  Legend
);

interface TableRow {
  contributor: string;
  code: string;
  value: string;
}

function formatNumber(num: number): string {
  return num.toLocaleString();
}

const OverviewPage: React.FC = () => {
  const socialValueImpact = 7261545; // in GBP
  const employers = 36; // total employers
  const employees = 3671; // total employees

  const dataLine = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: 'Total SVI',
        data: [30000, 25000, 20000, 31000, 26000, 25000, 30000],
        borderColor: 'rgb(75, 192, 192)',
        backgroundColor: 'rgba(75, 192, 192, 0.5)',
      },
    ],
  };

  const dataBar = {
    labels: ['Economic', 'Social', 'Health', 'Psychology', 'Environment', 'Other'],
    datasets: [
      {
        label: 'Unit Costs',
        data: [12000, 19000, 17000, 10000, 15000, 13000],
        backgroundColor: [
          'rgba(255, 99, 132, 0.5)',
          'rgba(54, 162, 235, 0.5)',
          'rgba(255, 206, 86, 0.5)',
          'rgba(75, 192, 192, 0.5)',
          'rgba(153, 102, 255, 0.5)',
          'rgba(255, 159, 64, 0.5)'
        ],
        borderColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
          'rgb(255, 206, 86)',
          'rgb(75, 192, 192)',
          'rgb(153, 102, 255)',
          'rgb(255, 159, 64)'
        ],
        borderWidth: 1,
      },
    ],
  };

  const dataDoughnut = {
    labels: ['Leeds', 'London', 'Sheffield', 'Other'],
    datasets: [
      {
        label: '# of Votes',
        data: [52, 22, 19, 7],
        backgroundColor: [
          'rgba(255, 99, 132, 0.5)',
          'rgba(54, 162, 235, 0.5)',
          'rgba(255, 206, 86, 0.5)',
          'rgba(75, 192, 192, 0.5)',
        ],
        borderColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
          'rgb(255, 206, 86)',
          'rgb(75, 192, 192)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const tableData: TableRow[] = [
    { contributor: "GXD", code: "GXD", value: "100 GBP" },
    { contributor: "PolyPipe", code: "243 GBP", value: "243 GBP" },
    { contributor: "Culina Group", code: "123 GBP", value: "123 GBP" },
    { contributor: "ICO", code: "250 GBP", value: "250 GBP" }
  ];

  return (
    <div style={{ display: 'grid', gridTemplateRows: 'auto auto auto', gap: '20px', padding: '20px', maxWidth: '1200px', margin: 'auto' }}>
      {/* First Row: Value Cards */}
      <div style={{ display: 'flex', justifyContent: 'space-between', minHeight: '80px', boxShadow: '0 4px 8px rgba(0,0,0,0.2)' }}>
        <div style={{ backgroundColor: '#e3f2fd', padding: '10px 20px', borderRadius: '8px', width: '32%' }}>
          <span style={{ fontSize: '16px', color: '#555', display: 'block', marginBottom: '8px' }}>Social Value Impact</span>
          <strong style={{ fontSize: '22px' }}>£{formatNumber(socialValueImpact / 1000000)}M</strong>
        </div>
        <div style={{ backgroundColor: '#e8f5e9', padding: '10px 20px', borderRadius: '8px', width: '32%' }}>
          <span style={{ fontSize: '16px', color: '#555', display: 'block', marginBottom: '8px' }}>Employers</span>
          <strong style={{ fontSize: '22px' }}>{formatNumber(employers / 1000)}K</strong>
        </div>
        <div style={{ backgroundColor: '#fff3e0', padding: '10px 20px', borderRadius: '8px', width: '32%' }}>
          <span style={{ fontSize: '16px', color: '#555', display: 'block', marginBottom: '8px' }}>Employees</span>
          <strong style={{ fontSize: '22px' }}>{formatNumber(employees / 100000)}L</strong>
        </div>
      </div>

      {/* Second Row: Line Graph and Table */}
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '10px', boxShadow: '0 4px 8px rgba(0,0,0,0.2)' }}>
        <div style={{ minHeight: '250px', height: '100%' }}>
          <Line data={dataLine} />
        </div>
        <div style={{ minHeight: '250px', height: '100%', backgroundColor: '#f7f7f7', padding: '10px', borderRadius: '8px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <h4 style={{ margin: '10px 0', textAlign: 'center' }}>Top Contributors</h4>
          <table style={{ width: '100%' }}>
            <thead>
              <tr style={{ backgroundColor: '#ddd', textAlign: 'left' }}>
                <th>Contributor</th>
                <th>Code</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((row: TableRow, index: number) => (
                <tr key={index} style={{ borderBottom: '1px solid #eee' }}>
                  <td>{row.contributor}</td>
                  <td>{row.code}</td>
                  <td>{row.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Third Row: Bar and Doughnut Graphs */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', boxShadow: '0 4px 8px rgba(0,0,0,0.2)', minHeight: '200px', height: '100%' }}>
        <div><Bar data={dataBar} /></div>
        <div><Doughnut data={dataDoughnut} options={{ maintainAspectRatio: false }} /></div>
      </div>
    </div>
  );
}

export default OverviewPage;
