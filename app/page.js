import { Background } from "@/components/Background";
import { Swipper } from "@/components/Swipper";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <div className="bg-cream">
        <Background />
        <div id="next-section" className="pt-52 pb-20">
          <h2 className="text-4xl font-bold ladrillo text-center mb-20">¿Por qué invertir en Servicios Integrales?</h2>
          <p className="ladrillo text-2xl mb-20 w-11/12 max-w-[1300px] mx-auto">Nuestros clientes obtienen un completo y detallado asesoramiento, sobre clima, suelos, ganadería y siembra.
            También realizamos construcción e instalación de invernaderos, sistemas de riego segun cultivo, y tecnología sustentable para el mejor rendimiento de tu campo.</p>
          <Link href="/contacto" className="flex text-2xl font-semibold w-fit mb-40 mx-auto bg-green-900 py-4 px-8 rounded-xl text-cream hover:scale-105">INVIERTE AHORA</Link>
          <Swipper />
          <ul className="text-cream text-2xl py-20 bg-green-900">
            <p className="text-2xl mb-10 w-11/12 max-w-[1300px] mx-auto">Nuestra consultora y a través de nuestros equipos tecnicos y profesionales, le darán un resultado para su inversión integral de servicios desde el inicio de su compra:</p>
            <li className="list-disc w-11/12 max-w-[1300px] mx-auto">Alquileres de producción para genética.</li>
            <li className="list-disc w-11/12 max-w-[1300px] mx-auto">Naves de producción de materiales semisinteticos.</li>
            <li className="list-disc w-11/12 max-w-[1300px] mx-auto">Pasturas.</li>
            <li className="list-disc w-11/12 max-w-[1300px] mx-auto">Gramineas.</li>
            <li className="list-disc w-11/12 max-w-[1300px] mx-auto">Sistema integral agropecuario.</li>
            <li className="list-disc w-11/12 max-w-[1300px] mx-auto">Implementacion en desarrollos de naves para hidroponía.</li>
            <li className="list-disc w-11/12 max-w-[1300px] mx-auto">Tecnologías de acuerdo a las normas internacionales de exportacion.</li>
            <li className="list-disc w-11/12 max-w-[1300px] mx-auto">Genéticas en desarrollos de diferentes tipos en semillas forrajeras para la complementación de terminados proteico en nutricion animal y vegetal.</li>
            <li className="list-disc w-11/12 max-w-[1300px] mx-auto">Sistema de estructuras complejas para desarrollar genéticas ovina, bobina y caprina.</li>
          </ul>
          <p className="ladrillo text-2xl mt-20 w-11/12 max-w-[1300px] mx-auto"> Es decir, la necesidad a nivel mundial, de fabicacion de alimentos con sistema tecnológico para el desarrollo del mercado mundial. Por lo que podemos darle una solución mas integral desde el comienzo del proceso de inversión, hasta el resultado final del producto a exportacion.</p>
          <Link href="/inversiones" className="flex text-2xl font-semibold w-fit mt-20 mx-auto bg-green-900 py-4 px-8 rounded-xl text-cream hover:scale-105">MÁS INVERSIONES</Link>
        </div>
      </div>

    </>);
}
