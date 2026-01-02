'use client';
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { ChevronDown, Menu } from 'lucide-react';

const chartData = [
  { name: 'Jan', value: 45, color: '#d8b4fe' }, 
  { name: 'Feb', value: 42, color: '#d8b4fe' },
  { name: 'Mar', value: 55, color: '#d8b4fe' },
  { name: 'Apr', value: 82, color: '#d8b4fe' },
  { name: 'May', value: 110, color: '#8b5cf6' },
  { name: 'Jun', value: 52, color: '#d8b4fe' },
  { name: 'Jul', value: 70, color: '#e5e7eb' },
  { name: 'Aug', value: 42, color: '#e5e7eb' },
  { name: 'Sep', value: 25, color: '#e5e7eb' },
  { name: 'Oct', value: 52, color: '#e5e7eb' },
  { name: 'Nov', value: 78, color: '#e5e7eb' },
  { name: 'Dec', value: 35, color: '#e5e7eb' },
];

interface StatItemProps {
  label: string;
  value: string;
  percentage: number;
  color: string;
}

const StatItem: React.FC<StatItemProps> = ({ label, value, percentage, color }) => {
  const isPositive = percentage > 0;
  return (
    <div className="flex flex-col">
      <div className="flex items-center gap-2 mb-1">
        <span className={`w-3 h-3 rounded-full ${color}`}></span>
        <span className="text-gray-500 text-sm font-medium">{label}</span>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-xl font-bold text-gray-900">{value}</span>
        <span
          className={`text-xs font-bold px-1.5 py-0.5 rounded ${
            isPositive ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-500'
          }`}
        >
          {isPositive ? '+' : ''}{percentage}%
        </span>
      </div>
    </div>
  );
};

const EarningsChart = () => {
  return (
    // CHANGE 1: added 'h-full' and 'flex flex-col' to ensure it takes full height
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 w-full h-full flex flex-col justify-between">
      
      {/* Top Section Wrapper (Header + Stats) */}
      <div>
        {/* Header Section */}
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-3">
            <div className="w-1 h-6 bg-blue-500 rounded-full"></div>
            <h2 className="text-xl font-bold text-gray-800">Earnings</h2>
          </div>
          <button className="text-gray-400 flex items-center gap-1 text-sm font-medium hover:text-gray-600">
            View All <ChevronDown size={16} />
          </button>
        </div>

        {/* Stats Row */}
        <div className="flex flex-wrap gap-8 mb-8">
          <StatItem 
            label="First Half" 
            value="$51.94k" 
            percentage={0.9} 
            color="bg-purple-300" 
          />
          <StatItem 
            label="Top Gross" 
            value="$18.32k" 
            percentage={0.39} 
            color="bg-purple-600" 
          />
          <StatItem 
            label="Second Half" 
            value="$38k" 
            percentage={-0.15} 
            color="bg-gray-200" 
          />
        </div>
      </div>

      {/* Chart Section */}
      {/* CHANGE 2: Changed from fixed h-[300px] to flex-1 with a min-height */}
      <div className="w-full relative flex-1 min-h-[300px]">
        <div className="absolute right-0 top-[-20px] cursor-pointer text-gray-400">
           <Menu size={20} />
        </div>

        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={chartData} margin={{ top: 10, right: 0, left: -25, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f3f4f6" />
            <XAxis 
              dataKey="name" 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: '#6b7280', fontSize: 12 }} 
              dy={10}
            />
            <YAxis 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: '#6b7280', fontSize: 12 }} 
            />
            <Tooltip 
              cursor={{ fill: 'transparent' }}
              contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
            />
            <Bar dataKey="value" radius={[10, 10, 10, 10]} barSize={16}>
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default EarningsChart;