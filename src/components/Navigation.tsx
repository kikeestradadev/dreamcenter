import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <span className="text-xl font-bold text-gray-800">Logo</span>
          </div>
          <div className="flex items-center space-x-1">
            <Link 
              to="/" 
              className={`px-6 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                isActive('/') 
                  ? 'bg-blue-600 text-white shadow-md' 
                  : 'text-gray-700 hover:bg-gray-100 hover:text-blue-600'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/page2" 
              className={`px-6 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                isActive('/page2') 
                  ? 'bg-blue-600 text-white shadow-md' 
                  : 'text-gray-700 hover:bg-gray-100 hover:text-blue-600'
              }`}
            >
              Página 2
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

