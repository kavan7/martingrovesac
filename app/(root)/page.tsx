import { ThreeDCardDemo } from "@/components/CardDemo";
import { Hero } from "@/components/Hero";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { ParallaxScroll } from "@/components/ui/parallax-scroll";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";
import Image from "next/image";
import { GiBearHead } from "react-icons/gi";
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
   <div className="h-[80vh]">
      <Hero />
      </div>
      <div className="flex justify-center gap-6 h-[20vh]">
          <ThreeDCardDemo/>
          <ThreeDCardDemo/>
          <ThreeDCardDemo/>
        </div>
   
    </main>
  );
}

