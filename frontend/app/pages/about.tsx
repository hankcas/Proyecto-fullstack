import Header from '../components/Header';
import Footer from '../components/Footer';

export default function About() {
  return (
    <>
      <Header />
      <main className="p-8">
        <h1 className="text-3xl font-bold text-blue-600 text-center">Acerca de Nosotros</h1>
        <p className="mt-4 text-gray-700">
          Somos un equipo comprometido con el desarrollo de soluciones innovadoras y eficientes.
        </p>
      </main>
      <Footer />
    </>
  );
}
