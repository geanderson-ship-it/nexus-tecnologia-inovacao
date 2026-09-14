import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Nexus Tecnologia e Inovação | Soluções Corporativas & Inteligência',
  description: 'Transformação digital, capacitação executiva, inteligência de mercado e soluções de alta performance para o setor corporativo e industrial.',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="dark">
      <body className="bg-slate-950 text-slate-100 min-h-screen selection:bg-cyan-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}
