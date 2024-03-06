export default function Congresos() {
    return (
        <>
            <div className="max-lg:h-dvh max-w-[1920px] overflow-hidden">
                <div className="w-full max-w-[1920px] lg:h-dvh absolute flex flex-col gap-y-12 items-center justify-center text-lightgreen text-6xl font-bold z-40">
                    <h1>ASESORAMIENTO PARA CONGRESOS</h1>
                </div>
                <div className="flex w-full max-w-[1920px] lg:h-dvh absolute white-gradient opacity-30 z-10"></div>
                <div className="flex w-full max-w-[1920px] lg:h-dvh absolute bg-black opacity-40 z-20"></div>
                <div className="congreso-bg w-full max-w-[1920px] lg:h-dvh"></div>
            </div>
            <h2 className="ladrillo text-4xl mb-20 mt-20 w-11/12 max-w-[1300px] mx-auto">Asesoramos para realizar congresos, reuniones empresariales en Sudamérica, Europa y Emiratos Arabes Unidos.</h2>
            <div className="bg-green-900 py-20 w-full px-10">
                <p className="text-3xl mb-10 w-11/12 max-w-[1300px] mx-auto text-cream text-center">Temario que se aborda en los congresos:</p>
                <ul className="text-cream w-full px-10 text-2xl grid grid-cols-1 lg:grid-cols-2 max-w-[1300px] mx-auto">
                    <li className="list-disc">Nutricion animal.</li>
                    <li className="list-disc">Cabañas con nanotecnologías.</li>
                    <li className="list-disc">Instalacion de invernaderos.</li>
                    <li className="list-disc">Hidroponías en media y gran escala.</li>
                    <li className="list-disc">Sistema de riego.</li>
                    <li className="list-disc">Implementación nutricional de pasturas según el clima.</li>
                    <li className="list-disc">Implementación derivados proteicos.</li>
                </ul>
            </div>
        </>);
}