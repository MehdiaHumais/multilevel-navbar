import { useState } from "react";
import { Link } from "react-router-dom";

const services = [
  {
    id: "web-design",
    name: "Web Design",
    description: "Create stunning websites with responsive design.",
    image: "https://via.placeholder.com/100",
  },
  {
    id: "seo",
    name: "SEO Optimization",
    description: "Boost your website ranking on search engines.",
    image: "https://via.placeholder.com/100",
  },
  {
    id: "digital-marketing",
    name: "Digital Marketing",
    description: "Enhance your online presence with effective strategies.",
    image: "https://via.placeholder.com/100",
  },
];

const Navbar = () => {
  const [showMegaMenu, setShowMegaMenu] = useState(false);
  const [showHomePopup, setShowHomePopup] = useState(false);
  const [showContactPopup, setShowContactPopup] = useState(false);

  return (
    <nav className="bg-gray-900 text-white p-4 relative flex justify-center">
      <ul className="flex space-x-6">
        <li
          className="relative"
          onMouseEnter={() => setShowHomePopup(true)}
          onMouseLeave={() => setShowHomePopup(false)}
        >
          <Link to="/" className="hover:text-gray-400">Home</Link>
          {showHomePopup && (
            <div className="absolute left-0 mt-2 w-64 bg-white text-black p-4 shadow-lg">
              <p className="text-sm text-gray-600">Welcome to our website! Discover our amazing services.</p>
            </div>
          )}
        </li>
        <li
          className="relative"
          onMouseEnter={() => setShowMegaMenu(true)}
          onMouseLeave={() => setShowMegaMenu(false)}
        >
          <span className="cursor-pointer hover:text-gray-400">Services</span>
          <div
            className={`absolute left-0 mt-2 w-72 bg-white text-black p-4 shadow-lg grid grid-cols-1 gap-4 transition-opacity duration-300 ${showMegaMenu ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
            onMouseEnter={() => setShowMegaMenu(true)}
            onMouseLeave={() => setShowMegaMenu(false)}
          >
            {services.map((service) => (
              <Link
                key={service.id}
                to={`/service/${service.id}`}
                className="flex items-center space-x-4 p-2 hover:bg-gray-100"
              >
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-12 h-12 object-cover rounded"
                />
                <div>
                  <p className="font-semibold">{service.name}</p>
                  <p className="text-sm text-gray-600">{service.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </li>
        <li
          className="relative"
          onMouseEnter={() => setShowContactPopup(true)}
          onMouseLeave={() => setShowContactPopup(false)}
        >
          <Link to="/contact" className="hover:text-gray-400">Contact</Link>
          {showContactPopup && (
            <div className="absolute left-0 mt-2 w-64 bg-white text-black p-4 shadow-lg">
              <p className="text-sm text-gray-600">Have questions? Contact us for more information.</p>
            </div>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
