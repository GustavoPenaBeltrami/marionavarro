import Image from "next/image";
import Link from "next/link";

const inversiones = [
  {
    titulo: "Invernaderos",
    desc: "ACRILICO DESARROLLO : El acrílico, es extremadamente ligero. De hecho, pesa menos de la mitad de lo que pesa el vidrio. Esto hace que los invernaderos sean más rápidos y menos costosos de construir. REDUCCIÓN DE COSTOS: Debido a los avances en el proceso de refinación para la fabricación de plástico, los precios de las hojas de acrílico se han reducido en gran medida. Como resultado, el uso del acrílico se ha vuelto mucho más rentable. RENTABILIDAD Y AGILIDAD DE MANEJO AGROPECUARIA Crecimiento prolongado de las plantas. Las láminas de acrílico tienen un impacto significativo en el rendimiento general del invernadero. trabajos específico con tecnologías de Drones , Robots ,etc. Dan agilidad y menor cantidad de mano de obras humana. Estas hojas dan paso al crecimiento de plantas extensivas, permitiéndole cultivar su elección de flores , pasturas , hongos , portobelod , cactus , y multi ofertas generativas en inovacion genéticas y verduras durante todo el año.",
    par: false,
    img:"invernadero"
  },
  {
    titulo: "Pasturas hidropónicas",
    desc: "Desarrollo de nanotecnologías en pasturas integrales, semisinteticas con valor proteico para su exclusividad de terminación en sabor de engorde de acuerdo a la calidad premium de cada productor de cabañas. Razas: Shorthorn, Hereford, Aberdeen Angus, Charolaise, Limousin, Pardo, Fleckvieh - Simmental, Jersey y Braford.",
    par: true,
    img:"pasturas"
  },
  {
    titulo: "Campos con desarrollo de invernadero",
    desc: "Consiste en un desarrollo de ultima tecnologías con sistemas plegables y de rapida colocacion, estructuras resistentes al calor, vientos y otros tipos de efectos climaticos adversos. Con desarrollos de aireacion controlada digitalmente, sistema de energia sustentables, ideales para lugares con condiciones climaticas extremas como en los Emiratos Arabes Unidos, entre otros. Desarrollos de paneles abarcativos en 3, 5, 7 y 10 hectarias con su tecnología de genéticas en sistema de riego por goteo.",
    par: false,
    img:'campos'
  },
  {
    titulo: "Cabañas de producción",
    desc: "De acuerdo a cada región, el inversor podra acceder a diferentes tipos de cabañas bobina, ovina y caprina con genéticas de cruzamiento de porte, pelaje, pigmentación, corte carnico, sabor y trazabilidad de materia grasa, lo que le dara una genética de los sementales de cada raza, que se consideraran de excelencia de acuerdo a la calidad de cruzamiento de genéticas para el desarrollo de razas europeas, británicas o de otros paises. En la raza ovina, trazabilidad y desarrollo de genética para un buen manejo de corte carnicos para exportacion, lo que le dará un contexto natural sobre alimentación, control de su valor proteico, calidad de lana y materia grasa, dandole la terminación de alimentación a pasturas con sabor único por cada cabaña.",
    par: true,
    img:'cabañas'
  },
  {
    titulo: "Nano-tecnologías",
    desc: "En la actualidad, se desarrollan a gran escala, a traves de la ciencia que manipula la materia en una dimensión diminuta, que lleva un contexto importante en el desarrollo de varias disiplinas para producir nanoestructuras, nanodispositivos y nanosistemas, en la propiedad de la materia a varias escalas para la aplicación en la agricultura, ganaderia y en la parte biológica del ganado. Tales estructuras dan origen a crear, diseñar e innovar sobre las diferentes fuentes de unidades nanoestructurales, lo que le da origen al desarrollo de tecnologías con terminación de producción a traves de la utilización de elementos como pude ser el drone, robotizacion en suplementar parcialmente la mano del hombre. También damos un paso adelante para el desarrollo de genéticas sobre pasturas, carne, estructuras que le dan una solución mas rápida, cómoda y dan oportunidades a los inversores de poder contar con herramientas eficientes en los campos. En el desarrollo de maquinarias de mediano y alto porte, en la utilización de microchips, sensores, escaneos a medianos y alta escala, con el uso de radares en superficie y subsuelos, escaneos, desarrollo de formación sobre problemas de adaptacion de monitoreo de plagas, eventos severos en materia de agroclimatologia, entre otras.",
    par: false,
    img:'dron'
  },
  {
    titulo: "Análisis agro-climaticos",
    desc: "Este mundo nos da oportunidades exclusivas, nuestra vasta experiencia en mas de 20 años de trayectoria, nos pone en un contexto de brindar a nuestros inversores, oportunidades en innovación para el desarrollo de producción, tecnologías en sudamerica y el mundo, empezando por nuestras tierras, nuestras genéticas y nuestro recurso humano, acompañando con herramientas de tecnologías para producir alimentación hacia el mundo, que hoy, mas que nunca necesitamos alimentos de calidad proteica en un contexto de sustentabilidad a nivel global para poder desarrollar multidisciplinas en corto plazos, generar transformaciones importantes en base al comportamiento de cada región del mundo dandole una solución ante la alta demanda de consumo a nivel global.",
    par: true,
    img:'analisis',
  },
];

export const InvestmentSection = () => {
  return (
    <>
      {inversiones.map((inversion, i) => (
        <div
          key={i}
          className={`flex flex-row lg:flex-row items-center ${
            inversion.par ? "bg-cream justify-end" : "bg-green-900"
          } py-20`}
        >
          {inversion.par ? (
            <Image
              src={`/${inversion.img}.jpg`}
              width={1000}
              height={650}
              alt={inversion.title}
              className=" lg:w-6/12 px-10"
            />
          ) : null}
          <div className=" lg:w-6/12 px-10">
            <h3
              className={`text-4xl font-bold ${
                inversion.par ? "ladrillo" : "text-cream"
              } text-center mb-20`}
            >
              {inversion.titulo}
            </h3>
            <p
              className={`${
                inversion.par ? "ladrillo" : "text-cream"
              } text-2xl mb-20`}
            >
              {inversion.desc}
            </p>
            {inversion.titulo === "Campos con desarrollo de invernadero" ? (
              <Link href="/inversiones/campos-con-desarrollo-de-invernadero" className="flex text-2xl font-semibold w-fit mt-20 mx-auto bg-cream py-4 px-8 rounded-xl ladrillo opacity-80 hover:opacity-100 hover:scale-105">MÁS INFORMACIÓN</Link>
            ) : null}
          </div>
          {inversion.par ? null : (
            <Image
              src={`/${inversion.img}.jpg`}
              width={1000}
              height={650}
              alt={inversion.title}
              className=" lg:w-6/12 px-10"
            />
          )}
        </div>
      ))}
    </>
  );
};
