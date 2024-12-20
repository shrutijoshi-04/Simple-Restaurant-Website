const App = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-gradient-to-r from-green-600 to-green-800 text-white py-6 shadow-lg">
        <nav className="container mx-auto flex justify-between items-center px-4">
          <h1 className="text-3xl font-extrabold tracking-wide">TastyBites</h1>
          <ul className="flex space-x-8 text-lg">
            <li className="hover:text-green-300 cursor-pointer transition">Home</li>
            <li className="hover:text-green-300 cursor-pointer transition">Menu</li>
            <li className="hover:text-green-300 cursor-pointer transition">About</li>
            <li className="hover:text-green-300 cursor-pointer transition">Contact</li>
          </ul>
        </nav>
      </header>

      
      <section
        className="bg-cover bg-center h-[60vh] flex items-center justify-center text-center text-white"
        style={{ backgroundImage: "url('/images/hero-restaurant.jpg')" }}
      >
        <div className="bg-black bg-opacity-50 p-8 rounded-lg transform transition duration-500 hover:scale-105">
          <h2 className="text-5xl font-extrabold animate__animated animate__fadeIn">Welcome to TastyBites</h2>
          <p className="mt-4 text-xl animate__animated animate__fadeIn animate__delay-1s">
            Delicious meals crafted with love and passion.
          </p>
          <button className="mt-6 px-8 py-3 bg-green-500 hover:bg-green-700 rounded-lg text-white font-semibold text-xl transition-all">
            Discover Our Menu
          </button>
        </div>
      </section>

      
      <section className="container mx-auto my-16 px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-green-600">Our Specials</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {menuItems.map((item) => (
            <div
              key={item.id}
              className="bg-white shadow-lg rounded-xl overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-green-600">{item.name}</h3>
                <p className="text-gray-600 mt-2">{item.description}</p>
                <p className="text-green-700 font-bold mt-4 text-xl">${item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      
      <section className="bg-gradient-to-r from-gray-200 to-gray-300 py-16">
        <h2 className="text-4xl font-bold text-center mb-12 text-green-600">What Our Customers Say</h2>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 px-4">
          {reviews.map((review) => (
            <div key={review.id} className="bg-white p-8 shadow-xl rounded-xl transform hover:scale-105 transition-transform">
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center space-x-2">
                  <i className="fas fa-star text-yellow-500"></i>
                  <i className="fas fa-star text-yellow-500"></i>
                  <i className="fas fa-star text-yellow-500"></i>
                  <i className="fas fa-star text-yellow-500"></i>
                  <i className="fas fa-star text-gray-400"></i>
                </div>
                <p className="text-gray-500">{review.date}</p>
              </div>
              <p className="text-gray-600 text-lg italic">"{review.text}"</p>
              <div className="mt-6 text-right">
                <p className="font-semibold text-xl">{review.name}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      
      <section className="container mx-auto my-16 px-4">
        <h2 className="text-4xl font-bold text-center mb-8 text-green-600">Contact Us</h2>
        <form className="max-w-xl mx-auto bg-white p-8 rounded-xl shadow-xl">
          <div className="mb-6">
            <label htmlFor="name" className="block text-lg font-semibold">Your Name</label>
            <input
              type="text"
              id="name"
              className="w-full p-4 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition-all"
              placeholder="Enter your name"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="block text-lg font-semibold">Your Email</label>
            <input
              type="email"
              id="email"
              className="w-full p-4 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition-all"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block text-lg font-semibold">Your Message</label>
            <textarea
              id="message"
              className="w-full p-4 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition-all"
              rows="4"
              placeholder="Enter your message"
            />
          </div>
          <button type="submit" className="w-full py-4 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-all">
            Send Message
          </button>
        </form>
      </section>

      
      <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-8">
        <div className="container mx-auto text-center">
          <p className="text-xl">&copy; 2024 TastyBites. All Rights Reserved.</p>
          <div className="flex justify-center space-x-6 mt-6">
            <a href="#" className="text-white hover:text-green-500 transition-all">
              <i className="fab fa-facebook-f text-2xl"></i>
            </a>
            <a href="#" className="text-white hover:text-green-500 transition-all">
              <i className="fab fa-instagram text-2xl"></i>
            </a>
            <a href="#" className="text-white hover:text-green-500 transition-all">
              <i className="fab fa-twitter text-2xl"></i>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;

const menuItems = [
  {
    id: 1,
    name: "Cheese Burger",
    description: "Juicy grilled burger with cheese and fresh veggies.",
    price: 9.99,
    image: "/images/burger.jpg",
  },
  {
    id: 2,
    name: "Spaghetti Bolognese",
    description: "Classic Italian pasta with rich meat sauce.",
    price: 12.99,
    image: "/images/spaghetti.jpg",
  },
  {
    id: 3,
    name: "Garden Salad",
    description: "Fresh greens with a variety of toppings and dressings.",
    price: 6.99,
    image: "/images/salad.jpg",
  },
];

const reviews = [
  {
    id: 1,
    text: "The food here is amazing! Best burger I've ever had.",
    name: "John Doe",
    date: "Nov 2024",
  },
  {
    id: 2,
    text: "Absolutely loved the spaghetti. Great atmosphere too!",
    name: "Jane Smith",
    date: "Oct 2024",
  },
  {
    id: 3,
    text: "A great place to enjoy a meal with family. Highly recommend.",
    name: "Emily Johnson",
    date: "Sept 2024",
  },
];
