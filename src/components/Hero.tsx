const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-5xl font-bold mb-4">Hero Section</h2>
        <p className="text-xl mb-8">Una sección destacada para tu contenido principal</p>
        <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
          Call to Action
        </button>
      </div>
    </section>
  );
};

export default Hero;

