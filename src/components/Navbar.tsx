import { useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  const navItems = [
    { name: 'home', href: '/' },
    { name: 'about', href: '/about' },
    { name: 'projects', href: '/projects' }
  ];

  const getActiveItem = () => {
    if (location.pathname === '/') return 'home';
    return location.pathname.slice(1); // removes the leading '/'
  };

  const activeItem = getActiveItem();

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          
          {/* Logo/Brand */}
          <div className="flex-shrink-0">
            <button 
              onClick={() => navigate('/')}
              className="text-xl font-bold font-['Playfair_Display'] text-gray-900 hover:text-pink-600 transition-colors duration-300"
            >
              nabira rashid
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-1">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => navigate(item.href)}
                  className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                    activeItem === item.name
                      ? 'text-pink-900 bg-pink-100'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                >
                  {item.name}
                  {activeItem === item.name && (
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-pink-500 rounded-full"></div>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Contact CTA */}
          <div className="hidden md:block">
            <button
              onClick={() => window.location.href = 'mailto:nabira.rashidm@gmail.com'}
              className="bg-gradient-to-r from-pink-600 to-rose-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:from-rose-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-200 shadow-md hover:shadow-lg"
            >
              let's chat
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors duration-200"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {/* Hamburger icon */}
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu (you'd need to add state to show/hide this) */}
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-100">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => navigate(item.href)}
                className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                  activeItem === item.name
                    ? 'text-pink-500 bg-pink-50'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                {item.name}
              </button>
            ))}
            <button
              onClick={() => window.location.href = 'mailto:nabira.rashidm@gmail.com'}
              className="block w-full text-left px-3 py-2 bg-gradient-to-r from-pink-500 to-rose-600 text-white rounded-md text-base font-medium hover:from-rose-600 hover:to-pink-700 transition-all duration-200 mt-4"
            >
              let's chat
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;