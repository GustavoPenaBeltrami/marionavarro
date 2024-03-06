import { InvestmentSection } from "@/components/InvestmentSection";
import Image from "next/image";

export default function Inversiones() {
    return (
        <>
            <div className="h-[3000px] bg-cream pt-40">
                <h1 className="text-4xl font-bold ladrillo text-center mb-20">Sea un inversor!</h1>
                <p className="ladrillo text-2xl mb-20 w-11/12 max-w-[1300px] mx-auto">Te damos nuevas oportunidades en invertir en nanotecnologías, desarrollos integrales y valor agregado, para poder competir en otros paises con nuevas franquicias y oportunidades de trabajo y de innovación productiva. ¡SUMATE!</p>
                <div className="lg:h-[600px] h-96 inversor-image overflow-hidden">
                </div>

                <p className="ladrillo text-2xl mb-20 mt-20 w-11/12 max-w-[1300px] mx-auto">Nuestro mundo nos da oportunidades exclisivas, nuestra vasta experiencia en mas de 20 años de trayectoria, nos pone en un contexto de brindar a nuestros inversores, oportunidades en innovación para el desarrollo de producción, tecnologías en sudamerica y el mundo, empezando por nuestras tierras, nuestras genéticas y nuestro recurso humano, acompañando con herramientas de tecnologías para producir alimentación hacia el mundo, que hoy, mas que nunca necesitamos alimentos de calidad proteica en un contexto de sustentabilidad a nivel global para poder desarrollar multidisciplinas en corto plazos, generar transformaciones importantes en base al comportamiento de cada región del mundo dandole una solución ante la alta demanda de consumo a nivel global.</p>
                <InvestmentSection />
            </div>
        </>);
}