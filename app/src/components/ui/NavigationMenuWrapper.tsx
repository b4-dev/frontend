"use client";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Header() {
  return (
    <header className="flex items-center py-4 px-4 md:container w-full">
      <div className="w-full justify-start items-center">
        <Link href="/" className="flex items-center">
          <h3 className="text-lg font-semibold tracking-tight">
            B4Dev
          </h3>
        </Link>
      </div>
      <NavigationMenu className="w-full items-center justify-center hidden md:flex">
        <NavigationMenuList>
          {/* Navigation menu items removed */}
        </NavigationMenuList>
      </NavigationMenu>
      <div className="w-full justify-end items-center hidden md:flex space-x-4">
        <Link href="/login">
          <Button>Login</Button>
        </Link>
      </div>
      <Sheet>
        <SheetTrigger asChild className="w-full flex justify-end items-center">
          <div className="w-full md:hidden">
            <Button variant="outline" size="icon">
              <MenuIcon className="h-6 w-6" />
            </Button>
          </div>
        </SheetTrigger>

        <SheetContent>
          <SheetTrigger asChild>
            <Link className="flex items-center gap-2" href="/">
              <h3 className="text-lg font-semibold tracking-tight">
                B4Dev
              </h3>
            </Link>
          </SheetTrigger>
          <ul className="flex flex-col gap-3 mt-4">
            <li>
              <SheetTrigger asChild>
                <Link href="/login">Login</Link>
              </SheetTrigger>
            </li>
          </ul>
        </SheetContent>
      </Sheet>
    </header>
  );
}