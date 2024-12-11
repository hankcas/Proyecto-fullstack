import './globals.css';

export const metadata = {
  title: 'Mi Proyecto',
  description: 'Descripción del proyecto',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
