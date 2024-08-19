"use client";

import { Button } from "@nextui-org/button";
import { Image } from "@nextui-org/image";
import { Link } from "@nextui-org/link";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  NavbarProps,
} from "@nextui-org/navbar";
import React from "react";
import logo from "@/public/logo.png";
const menuItems = [
  "About",
  "Blog",
  "Customers",
  "Pricing",
  "Enterprise",
  "Changelog",
  "Documentation",
  "Contact Us",
];

export default function Header(props: NavbarProps) {
  return (
    <Navbar position="sticky" maxWidth="full" className="bg-black sm:h-[80px]">
      <NavbarBrand>
        <Image className="sm:w-[80px] sm:h-[80px]" src="/logo.png" alt="logo" />
          </NavbarBrand>
          <NavbarContent justify="center">
              {
                  menuItems.map((el, i) => (
                      <NavbarItem key={i}>{el}</NavbarItem>
              ))
              }
          </NavbarContent>
    </Navbar>
  );
}
