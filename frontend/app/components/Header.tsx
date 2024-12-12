import Link from 'next/link';

const Header = () => (
  <header className="bg-blue-500 text-white p-4">
    <nav className="flex justify-between">
      <h1 className="text-xl font-bold">Mi Proyecto</h1>
      <ul className="flex space-x-4">
        <li>
          <Link href="/" className="hover:text-gray-200 transition-colors">Inicio</Link>
        </li>
        <li>
          <Link href="/about" className="hover:text-gray-200 transition-colors">Acerca de</Link>
        </li>
        <li>
          <Link href="/contact" className="hover:text-gray-200 transition-colors">Contacto</Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
