import React from 'react';
import { BarChart, Users, ShoppingBag } from 'lucide-react';

const Dashboard: React.FC = () => {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-green-700">Welcome to Eco Impact</h1>
      <p className="text-xl">
        Discover your environmental impact and find sustainable products to make a difference.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <DashboardCard
          icon={<BarChart className="text-blue-500" size={48} />}
          title="Calculate Your Impact"
          description="Measure your carbon footprint and get personalized suggestions."
          link="/calculator"
        />
        <DashboardCard
          icon={<ShoppingBag className="text-green-500" size={48} />}
          title="Find Eco-Friendly Products"
          description="Explore our curated selection of sustainable products."
          link="/products"
        />
        <DashboardCard
          icon={<Users className="text-purple-500" size={48} />}
          title="Join the Community"
          description="Connect with others and share your sustainability journey."
          link="#"
        />
      </div>
    </div>
  );
};

interface DashboardCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
}

const DashboardCard: React.FC<DashboardCardProps> = ({ icon, title, description, link }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <div className="flex items-center mb-4">
        {icon}
        <h2 className="text-xl font-semibold ml-4">{title}</h2>
      </div>
      <p className="text-gray-600 mb-4">{description}</p>
      <a
        href={link}
        className="text-green-600 hover:text-green-700 font-medium"
      >
        Learn more &rarr;
      </a>
    </div>
  );
};

export default Dashboard;