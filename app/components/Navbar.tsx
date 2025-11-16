"use client";
import React, { useState } from "react";
import {
  HoveredLink,
  Menu,
  MenuItem,
  ProductItem,
} from "@/app/components/ui/navbar-menu";
import { cn } from "@/app/lib/utils";
import Link from "next/link";

export default function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <Link href={"/"}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Home"
          ></MenuItem>
        </Link>
        <MenuItem setActive={setActive} active={active} item="Our Courses">
          <div className="flex flex-col space-y-3 p-2 ">
            <HoveredLink href="/courses/all-courses">All courses</HoveredLink>
            <HoveredLink href="/courses/maths">Higher Math</HoveredLink>
            <HoveredLink href="/courses/english">English</HoveredLink>
            <HoveredLink href="/courses/bangla">Bangla</HoveredLink>
            <HoveredLink href="/courses/science">Scrience</HoveredLink>
            <HoveredLink href="/courses/chemistry">Chemistry</HoveredLink>
          </div>
        </MenuItem>
        <Link href={"/contact"}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Contact"
          ></MenuItem>
        </Link>
      </Menu>
    </div>
  );
}
