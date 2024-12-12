import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Contact() {
  return (
    <>
      <Header />
      <main className="p-8">
        <h1 className="text-3xl font-bold text-blue-600 text-center">Contáctanos</h1>
        <form className="max-w-md mx-auto mt-4">
          <label className="block mb-2 text-gray-700">
            Nombre:
            <input type="text" className="w-full p-2 border rounded mt-1" placeholder="Tu nombre" />
          </label>
          <label className="block mb-2 text-gray-700">
            Correo:
            <input type="email" className="w-full p-2 border rounded mt-1" placeholder="Tu correo" />
          </label>
          <label className="block mb-2 text-gray-700">
            Mensaje:
            <textarea className="w-full p-2 border rounded mt-1" rows={4} placeholder="Tu mensaje"></textarea>
          </label>
          <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded mt-4 hover:bg-blue-600">
            Enviar
          </button>
        </form>
      </main>
      <Footer />
    </>
  );
}
