import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Home, Calculator, Leaf, ShoppingBag } from 'lucide-react';
import EnvironmentalCalculator from './components/EnvironmentalCalculator';
import SustainableProductFinder from './components/SustainableProductFinder';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 flex flex-col">
        <header className="bg-green-600 text-white p-4">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-bold flex items-center">
              <Leaf className="mr-2" />
              Eco Impact
            </h1>
            <nav>
              <ul className="flex space-x-4">
                <li>
                  <Link to="/" className="flex items-center hover:text-green-200">
                    <Home className="mr-1" size={18} />
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/calculator" className="flex items-center hover:text-green-200">
                    <Calculator className="mr-1" size={18} />
                    Calculator
                  </Link>
                </li>
                <li>
                  <Link to="/products" className="flex items-center hover:text-green-200">
                    <ShoppingBag className="mr-1" size={18} />
                    Products
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>

        <main className="flex-grow container mx-auto mt-8 px-4">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/calculator" element={<EnvironmentalCalculator />} />
            <Route path="/products" element={<SustainableProductFinder />} />
          </Routes>
        </main>

        <footer className="bg-green-600 text-white p-4 mt-8">
          <div className="container mx-auto text-center">
            <p>&copy; 2023 Eco Impact. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;