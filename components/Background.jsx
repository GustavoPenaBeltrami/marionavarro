"use client";

export const Background = () => {
  const handleClick = () => {
    const element = document.getElementById("next-section");
    element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="max-h-dvh max-w-[1920px] overflow-hidden">
      <div className="w-full max-w-[1920px] h-dvh absolute flex flex-col gap-y-12 items-center justify-center text-cream text-6xl font-bold z-40">
        <h1>SERVICIOS INTEGRALES DE INVERSIÓN</h1>
        <button
          onClick={handleClick}
          className="text-2xl text-green bg-amber-200 px-10 py-3 rounded-lg bg-opacity-35 main-button"
        >
          VER MÁS
        </button>
      </div>
      <div className="flex w-full max-w-[1920px] h-dvh absolute white-gradient opacity-30 z-10"></div>
      <div className="flex w-full max-w-[1920px] h-dvh absolute bg-black opacity-20 z-20"></div>
      <div className="image-bg w-full max-w-[1920px] h-dvh"></div>
    </div>
  );
};
