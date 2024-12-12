import Link from 'next/link';

export default function Home() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold text-center text-blue-600">
        Bienvenido a Nuestra Plataforma
      </h1>
      <p className="text-center text-gray-700 mt-2">
        Esta es una prueba técnica diseñada para demostrar habilidades de desarrollo frontend y backend.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
        <Link
          href="/about"
          className="block p-6 bg-white rounded-lg shadow hover:shadow-lg hover:-translate-y-1 transition-transform"
        >
          <h3 className="text-xl font-bold">Acerca de Nosotros</h3>
          <p className="text-gray-600 mt-2">
            Aprende más sobre nuestro propósito y misión en la sección de Acerca de.
          </p>
        </Link>
        <Link
          href="/contact"
          className="block p-6 bg-white rounded-lg shadow hover:shadow-lg hover:-translate-y-1 transition-transform"
        >
          <h3 className="text-xl font-bold">Contáctanos</h3>
          <p className="text-gray-600 mt-2">
            ¿Tienes dudas o comentarios? Visita la sección de Contacto para comunicarte con nosotros.
          </p>
        </Link>
      </div>
    </main>
  );
}
