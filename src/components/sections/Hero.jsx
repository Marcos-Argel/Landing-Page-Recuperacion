export default function Hero() {
  return (
    <section className="bg-gray-50 py-24 px-6 text-center">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 tracking-tight mb-6">
          Impulsamos tu negocio con <span className="text-indigo-600">soluciones digitales</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
          Diseñamos y desarrollamos productos tecnológicos a la medida para llevar tu presencia online al siguiente nivel.
        </p>
        <button className="bg-indigo-600 text-white font-semibold py-3 px-8 rounded-lg shadow-sm hover:bg-indigo-700 transition-colors text-lg">
          Cotiza ya
        </button>
      </div>
    </section>
  );
}