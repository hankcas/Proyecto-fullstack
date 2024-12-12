import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';

export const metadata = {
  title: 'Mi Proyecto',
  description: 'Prueba técnica full-stack con Next.js',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-100">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
