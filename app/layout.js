import { Kanit } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";

const roboto = Kanit({
  weight: ['100', '300', '400', '500', '700', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: "M.Navarro & Asociados",
  description: "Servicios integrales de inversion, Alquileres de producción para genética., Invernaderos, Pasturas, Sistema integral agropecuario, Genéticas en desarrollos de diferentes tipos en semillas forrajeras y Sistema de estructuras complejas para desarrollar genéticas ovina, bobina y caprina.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
          <Header />
        <div className="max-w-[1920px] mx-auto">
          {children}
        </div>
      </body>
    </html>
  );
}
