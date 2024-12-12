import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main className="p-8">
        <h1 className="text-3xl font-bold text-center text-blue-600">Bienvenido a Mi Proyecto</h1>
        <p className="text-center text-gray-700 mt-2">
          Este es un ejemplo de proyecto con Next.js, diseñado para una prueba técnica.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
          <a
            href="/about"
            className="block p-6 bg-white rounded-lg shadow hover:shadow-lg hover:-translate-y-1 transition-transform"
          >
            <h3 className="text-xl font-bold">Acerca de Nosotros</h3>
            <p className="text-gray-600 mt-2">Conoce más sobre nuestro equipo y misión.</p>
          </a>
          <a
            href="/contact"
            className="block p-6 bg-white rounded-lg shadow hover:shadow-lg hover:-translate-y-1 transition-transform"
          >
            <h3 className="text-xl font-bold">Contáctanos</h3>
            <p className="text-gray-600 mt-2">¿Tienes dudas? Comunícate con nosotros.</p>
          </a>
        </div>
      </main>
      <Footer />
    </>
  );
}
