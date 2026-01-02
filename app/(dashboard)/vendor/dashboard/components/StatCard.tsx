import React from 'react';
import { LucideIcon } from 'lucide-react';

// Define the color themes based on the screenshot
const colorVariants = {
  purple: 'bg-purple-100 text-purple-600',
  blue: 'bg-blue-100 text-blue-600',
  green: 'bg-green-100 text-green-600',
  orange: 'bg-orange-100 text-orange-600',
};

interface StatCardProps {
  title: string;
  value: string;
  percentage: number;
  isIncrease: boolean;
  icon: LucideIcon;
  color: keyof typeof colorVariants; // Enforce specific color keys
}

const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  percentage,
  isIncrease,
  icon: Icon,
  color,
}) => {
  return (
    <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 flex items-center justify-between transition-transform hover:scale-[1.02]">
      {/* Left Side: Icon with dynamic background color */}
      <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${colorVariants[color]}`}>
        <Icon size={24} strokeWidth={2.5} />
      </div>

      {/* Right Side: Stats Info */}
      <div className="ml-4 flex-1">
        <h3 className="text-gray-500 text-sm font-medium">{title}</h3>
        <p className="text-2xl font-bold text-gray-900 mt-1 mb-1">{value}</p>
        
        <div className="flex items-center text-xs">
          <span className="text-gray-500 mr-2">
            {isIncrease ? 'Increase' : 'Decreased'} by
          </span>
          <span
            className={`px-2 py-0.5 rounded text-xs font-bold ${
              isIncrease 
                ? 'bg-green-100 text-green-600' 
                : 'bg-red-100 text-red-600'
            }`}
          >
            {isIncrease ? '+' : ''}{percentage}%
          </span>
          <span className="text-gray-500 ml-2">this month</span>
        </div>
      </div>
    </div>
  );
};

export default StatCard;