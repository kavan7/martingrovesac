import { Hero } from "@/components/Hero";
import { TimelineDemo } from "@/components/Timeline";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";
import Image from "next/image";

const navItems = [
  {
    name: "Home",
    link: "/",
    icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: "About",
    link: "/about",
    icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: "Team",
    link: "/team",
    icon: (
      <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
    ),
  },
];

export default function Home() {
  return (
    <main className="">
      <FloatingNav navItems={navItems}/>
      
     <TimelineDemo/>
     
    </main>
  );
}
