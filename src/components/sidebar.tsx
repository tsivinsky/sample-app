import Link from "next/link";
import { useRouter } from "next/router";
import {
  ActivityIcon,
  DashboardIcon,
  BloggersIcon,
  LandingsIcon,
  MarathonIcon,
  MutualAdvertisementIcon,
  ShopIcon,
  StructureIcon,
} from "./icons";

interface NavLink {
  text: string;
  path: string;
  icon: JSX.Element;
}

const menu: NavLink[] = [
  {
    text: "Дашбоард",
    path: "/",
    icon: <DashboardIcon />,
  },
  {
    text: "Биржа активности",
    path: "/activity",
    icon: <ActivityIcon />,
  },
  {
    text: "Биржа блоггеров",
    path: "/bloggers",
    icon: <BloggersIcon />,
  },
  {
    text: "Взаимопиар",
    path: "/mutual-advertisement",
    icon: <MutualAdvertisementIcon />,
  },
  {
    text: "Моя структура",
    path: "/structure",
    icon: <StructureIcon />,
  },
  {
    text: "Магазин",
    path: "/shop",
    icon: <ShopIcon />,
  },
  {
    text: "Марафон",
    path: "/marathon",
    icon: <MarathonIcon />,
  },
  {
    text: "Лендинги",
    path: "/landings",
    icon: <LandingsIcon />,
  },
];

export function Sidebar({ show }) {
  const router = useRouter();

  return (
    <div className={`sidebar ${show ? "show" : ""}`}>
      <nav>
        {menu.map((link, i) => (
          <div
            key={i}
            className={router.pathname === link.path ? "active" : ""}
          >
            {link.icon}
            <Link href={link.path}>{link.text}</Link>
          </div>
        ))}
      </nav>
    </div>
  );
}
