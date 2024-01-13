import Image from "next/image";
import Link from "next/link";
import { CiBookmarkCheck, CiLogout } from "react-icons/ci";
import { ButtonLogout, SidebarItem } from "@/components";
import {
  IoCartOutline,
  IoCodeWorkingOutline,
  IoPersonOutline,
} from "react-icons/io5";
import { getServerSession } from "next-auth";
import { autOptions } from "@/app/api/auth/[...nextauth]/route";

const menuItem = [
  {
    title: "Dasboard",
    href: "/dashboard",
    icon: <CiBookmarkCheck size={30} />,
  },
  {
    title: "Rest TODOS",
    href: "/dashboard/rest-todos",
    icon: <CiBookmarkCheck size={30} />,
  },
  {
    title: "Server Actions",
    href: "/dashboard/server-todos",
    icon: <CiBookmarkCheck size={30} />,
  },
  {
    title: "Cookies",
    href: "/dashboard/cookies",
    icon: <IoCodeWorkingOutline size={30} />,
  },
  {
    title: "Productos",
    href: "/dashboard/products",
    icon: <IoCartOutline size={30} />,
  },
  {
    title: "Perfil",
    href: "/dashboard/profile",
    icon: <IoPersonOutline size={30} />,
  },
];

export async function Sidebar() {
  const session = await getServerSession(autOptions);

  const userName = session?.user?.name ?? "No name";
  const avatarUrl = session?.user?.image
    ? session.user.image
    : "https://tailus.io/sources/blocks/stats-cards/preview/images/second_user.webp";
  // const userRole = session?.user?.role ?? "No role";
  const userRoles = session?.user?.roles ?? ["client"];
  return (
    <aside className="fixed top-0 z-10 ml-[-100%] flex h-screen w-full flex-col justify-between border-r bg-white px-6 pb-3 transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%]">
      <div>
        <div className="-mx-6 px-6 py-4">
          <Link href="/dashsboard" title="home">
            <Image
              width={100}
              height={100}
              priority
              src={
                "https://tailus.io/sources/blocks/stats-cards/preview/images/logo.svg"
              }
              className="w-32"
              alt="tailus logo"
            />
          </Link>
        </div>

        <div className="mt-8 text-center">
          <Image
            width={100}
            height={100}
            priority
            src={avatarUrl}
            alt=""
            className="m-auto h-10 w-10 rounded-full object-cover lg:h-28 lg:w-28"
          />
          <h5 className="mt-4 hidden text-xl font-semibold capitalize text-gray-600 lg:block">
            {userName}
          </h5>
          <span className="hidden text-sm capitalize text-gray-400 lg:block">
            {userRoles.join(",")}
          </span>
        </div>

        <ul className="mt-8 space-y-2 tracking-wide">
          {/* TODO: src/components <SidebarItem /> */}
          {/* Active className: text-white bg-gradient-to-r from-sky-600 to-cyan-400 */}

          {menuItem.map(({ href, icon, title }, ind: number) => (
            <SidebarItem key={ind} href={href} icon={icon} title={title} />
          ))}
        </ul>
      </div>

      <div className="-mx-6 flex items-center justify-between border-t px-6 pt-4">
        <ButtonLogout />
      </div>
    </aside>
  );
}
