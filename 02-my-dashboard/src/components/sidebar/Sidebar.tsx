import Image from "next/image";

import {
  IoBrowsersOutline,
  IoCalculatorOutline,
  IoFootballOutline,
  IoHeartCircleOutline,
} from "react-icons/io5";

import SidebarMenuItem from "./SidebarMenuItem";

const menuItems = [
  {
    path: "/dashboard/main",
    icon: <IoBrowsersOutline size={30} />,
    title: "Main",
    subtitle: "Este es el main",
  },
  {
    path: "/dashboard/counter",
    icon: <IoCalculatorOutline size={30} />,
    title: "Counter",
    subtitle: "Este es el counter",
  },
  {
    path: "/dashboard/pokemons",
    icon: <IoFootballOutline size={30} />,
    title: "Pokemons",
    subtitle: "Generacion estatica",
  },
  {
    path: "/dashboard/favorites",
    icon: <IoHeartCircleOutline size={30} />,
    title: "Favoritos",
    subtitle: "Global State",
  },
];

function Sidebar() {
  return (
    <div
      id="menu"
      className="left-0 z-10 min-h-screen w-80 bg-gray-900 text-slate-300"
    >
      {/* Logo */}
      <div id="logo" className="my-4 px-6">
        <h1 className="flex items-center text-lg font-bold text-white md:text-2xl">
          <span>Dash</span>
          <span className="text-blue-500">board</span>
        </h1>
        <p className="mt-2 text-sm text-slate-500">
          Controla tus acciones y actividades
        </p>
      </div>

      {/* Perfil */}
      <div id="profile" className="px-6 py-10">
        <p className="text-slate-500">Bienvenido</p>
        <a href="#" className="mt-2 inline-flex items-center space-x-2">
          <span>
            <Image
              width={50}
              height={50}
              className="h-8 w-8 rounded-full"
              src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c"
              alt="imagen perfil"
            />
          </span>
          <span className="text-sm font-bold md:text-base">
            Imanol Dominguez
          </span>
        </a>
      </div>

      {/* Navegacion */}
      <div id="nav" className="sticky top-14 w-full px-6">
        {menuItems.map((item, ind) => (
          <SidebarMenuItem key={ind} {...item} />
        ))}

        {/* <a
          href="#"
          className="w-full px-2 inline-flex space-x-2 items-center border-b border-slate-700 py-3 hover:bg-white/5 transition ease-linear duration-150"
        >
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
              />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="text-lg text-slate-300 font-bold leading-5">
              Counter
            </span>
            <span className="text-sm text-slate-500 hidden md:block">
              Estado Local
            </span>
          </div>
        </a> */}
      </div>
    </div>
  );
}

export default Sidebar;
