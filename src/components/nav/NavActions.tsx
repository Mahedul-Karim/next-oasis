"use client";

import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";
import React from "react";
import { IconType } from "react-icons";
import { usePathname } from "next/navigation";

type Props = {
  to: Url;
  icon: IconType;
  text: String;
};

export default function NavActions({ to, icon: Icon, text }: Props) {
  const location = usePathname();

  return (
    <div
      className={`w-full transition-all py-2 rounded-md cursor-pointer group ${
        location === to ? "400px:bg-grey-100" : "400px:hover:bg-grey-100"
      }`}
    >
      <Link href={to} className="flex justify-center 1000px:justify-normal px-6 items-center gap-4">
        <span
          className={`text-grey-600 transition-all ${
            location === to
              ? "!text-primary-600"
              : "group-hover:text-primary-600"
          }`}
        >
          <Icon size={25} />
        </span>
        <span
          className={`text-grey-600 transition-all text-lg ${
            location === to ? "!text-grey-800" : "hover:text-grey-800"
          } hidden 1000px:block`}
        >
          {text}
        </span>
      </Link>
    </div>
  );
}
