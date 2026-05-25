const ContentSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Característica 1</h3>
            <p className="text-gray-600">Descripción de la primera característica destacada.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Característica 2</h3>
            <p className="text-gray-600">Descripción de la segunda característica destacada.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Característica 3</h3>
            <p className="text-gray-600">Descripción de la tercera característica destacada.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentSection;

