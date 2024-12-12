export default function Footer() {
  return (
    <footer className="bg-gray-800 p-6 text-center text-gray-300">
      <p>© 2024 Mi Proyecto. Todos los derechos reservados.</p>
      <ul className="flex justify-center space-x-4 mt-4">
        <li>
          <a href="/about" className="hover:text-white transition-colors">Acerca de</a>
        </li>
        <li>
          <a href="/contact" className="hover:text-white transition-colors">Contacto</a>
        </li>
        <li>
          <a href="#" className="hover:text-white transition-colors">Política de Privacidad</a>
        </li>
      </ul>
    </footer>
  );
}
