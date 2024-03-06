import Image from "next/image";

export default function Nosotros() {
    return (

        <div className="bg-cream pt-40">
            <h2 className="text-4xl font-bold ladrillo text-center mb-20">Nuestro equipo</h2>
            <h1 className="text-3xl font-bold ladrillo text-center mb-10">Soluciones Integrales Internacionales</h1>
            <p className="ladrillo text-2xl mb-20 w-11/12 max-w-[1300px] mx-auto">Somos un conjunto de profesionales de trayectoria de 15 a 30 años de experiencia, en desarrollar actividades tecnológicas, científicas, meteorológicas y legales.
                Brindando soluciones a la medida de sus necesidades, en el desarrollo de inversiones estrategicas en el ámbito internacional. Nuestros profesionales se capacitan, para brindar un mejor asesoramiento, para que los resultados sean eficientes a corto y mediano plazo.</p>

            <div className="mx-auto flex borde-ladrillo w-11/12 max-w-[1300px]">
                <div className="p-10">
                    <h3 className="text-2xl font-bold ladrillo mb-5">Director y Fundador</h3>

                    <p className="ladrillo text-lg">Soy Mario Navarro, un apasionado meteorólogo con una sólida experiencia en proporcionar asesoramiento meteorológico a diversas empresas. Mi dedicación a la meteorología no solo se refleja en mi trabajo como asesor, sino también en mi rol como presidente y fundador del Observatorio en Salsipuedes. Por otro lado, participo en la actividad cientifica sobre el cambio climatico con la Union Europea
                        Asesoré a diversas empresas del sector agropecuario, incluyendo Maní Agro, Prodeman, Bayer, Nidera, Gem Consulta Agropecuaria, Sancor Seguros, y otras. Ademas, lideré iniciativas para promover la conciencia pública sobre fenómenos meteorológicos y establecí programas educativos en colaboración con entidades gubernamentales.
                        Estoy entusiasmado por seguir contribuyendo al avance de la meteorología y explorar nuevas oportunidades de colaboración. </p>
                </div>
                <Image src={"/Navarro.jpg"} width={400} height={300} alt="Mario Navarro" />
            </div>
            <div className=" grid grid-cols-2 lg:grid-cols-3 mx-auto gap-4 mt-4 mb-20 w-11/12 max-w-[1300px]">
                <div className=" min-h-32 mx-auto flex flex-col justify-between p-4 w-full borde-ladrillo">
                    <h3 className="text-lg font-bold ladrillo mb-5">Dra en relaciones internacionales y administrativo.</h3>
                    <p className="ladrillo text-lg text-right">Dra. Ana Maria Bechini</p>
                </div>
                <div className=" min-h-32 mx-auto flex flex-col justify-between p-4 w-full borde-ladrillo">
                    <h3 className="text-lg font-bold ladrillo mb-5">Gerente asociados, martillero y corredor público.</h3>
                    <p className="ladrillo text-lg text-right">Hugo Quiroga.</p>
                </div>
                <div className=" min-h-32 mx-auto flex flex-col justify-between p-4 w-full borde-ladrillo">
                    <h3 className="text-lg font-bold ladrillo mb-5">Contadora especializada en recursos tributarios internacionales y exportación.</h3>
                    <p className="ladrillo text-lg text-right">Dra</p>
                </div>
                <div className=" min-h-32 mx-auto flex flex-col justify-between p-4 w-full borde-ladrillo">
                    <h3 className="text-lg font-bold ladrillo mb-5">Contadora especializada en recursos tributarios internacionales y exportación.</h3>
                    <p className="ladrillo text-lg text-right">Dra. Yesica Quiroga.</p>
                </div>
                <div className=" min-h-32 mx-auto flex flex-col justify-between p-4 w-full borde-ladrillo">
                    <h3 className="text-lg font-bold ladrillo mb-5">Abogada relaciones internacionales..</h3>
                    <p className="ladrillo text-lg text-right">Lic. Marcela Quiroga.</p>
                </div>
            </div>

        </div>
    );
}