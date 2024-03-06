"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export const Header = () => {
  const [navAtTop, setNavAtTop] = useState([
    "py-5",
    "text-green",
    180,
    "text-green-hover",
  ]);

  const pathname = usePathname();

  useEffect(() => {
    if (pathname === "/" || pathname === "/congresos") {
      if (window.scrollY > window.innerHeight * 0.7) {
        setNavAtTop([
          "bg-green-900 pt-1 pb-2",
          "text-cream",
          120,
          "text-claro-hover",
        ]);
      } else {
        setNavAtTop(["py-5", "text-green", 180, "text-green-hover"]);
      }
    } else {
      setNavAtTop([
        "bg-green-900 pt-1 pb-2",
        "text-cream",
        120,
        "text-claro-hover",
      ]);
    }

    const handleScroll = (event) => {
      if (pathname === "/" || pathname === "/congresos") {
        if (window.scrollY > window.innerHeight * 0.7) {
          setNavAtTop([
            "bg-green-900 pt-1 pb-2",
            "text-cream",
            120,
            "text-claro-hover",
          ]);
        } else {
          setNavAtTop(["py-5", "text-green", 180, "text-green-hover"]);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathname]);

  return (
    <>
      <header
        className={`w-full fixed z-50 transition-all duration-500 ${navAtTop[0]}`}
      >
        <div
          className={`flex w-full mx-auto max-w-[1920px] justify-between items-center px-20 transition-all duration-500`}
        >
          <Link href="/" className="block w-fit mx-5">
            <Image
              src="/logo-2.png"
              alt="Logo"
              className="transition-all duration-500"
              width={`${navAtTop[2]}`}
              height={`${navAtTop[2]}`}
            />
          </Link>
          <ul
            className={`text-2xl ${navAtTop[1]} uppercase font-semibold transition-all duration-500`}
          >
            <li
              className={`inline-block mx-5 transition-all duration-500 ${
                navAtTop[3]
              } ${
                pathname === "/congresos"
                  ? "text-cream text-claro-hover"
                  : ""
              }`}
            >
              <Link href="/inversiones">Inversiones</Link>
            </li>
            <li
              className={`inline-block mx-5 transition-all duration-500 ${
                navAtTop[3]
              } ${
                pathname === "/congresos"
                  ? "text-cream text-claro-hover"
                  : ""
              }`}
            >
              <Link href="/nosotros">Nosotros</Link>
            </li>
            <li
              className={`inline-block mx-5 transition-all duration-500 ${
                navAtTop[3]
              } ${
                pathname === "/congresos"
                  ? "text-cream text-claro-hover"
                  : ""
              }`}
            >
              <Link href="/congresos">Congresos</Link>
            </li>
            <li
              className={`inline-block mx-5 transition-all duration-500 ${
                navAtTop[3]
              } ${
                pathname === "/congresos"
                  ? "text-cream text-claro-hover"
                  : ""
              }`}
            >
              <Link href="/contacto">Contacto</Link>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
};
