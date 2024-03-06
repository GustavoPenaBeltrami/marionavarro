import Image from "next/image";

export default function Contacto() {
    return (
        <div className="pt-32 grid grid-cols-2 gap-x-10 max-w-[1300px] h-dvh mx-auto">
            <div className="mt-12">
                <h1 className="text-4xl ladrillo font-medium ">Contacto</h1>
                <p className="text-xl mt-8 ladrillo">Si tienes alguna duda o necesitas información adicional, no dudes en contactarnos.</p>
                <h2 className="text-2xl mt-12 font-medium ladrillo">Telefono</h2>
                <p className="text-xl mt-5 ladrillo">+54 9 351 540-0333</p>
                <p className="text-xl mt-5 ladrillo">+54 9 351 652-3936</p>
                <h2 className="text-2xl mt-12 font-medium ladrillo">Dirección</h2>
                <p className="text-xl mt-5 ladrillo">Misiones 1372 of 203, Montevideo, Uruguay
                    Bedoya 757 PB "A", Cordoba, Argentina</p>
            </div>
        </div>
    );
}