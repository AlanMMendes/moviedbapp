"use client";
import { useAppSelector } from "@/app/store";
import { CaretDownIcon } from "@radix-ui/react-icons";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import classNames from "classnames";
import Image from "next/image";
import React from "react";
import { FaSearch } from "react-icons/fa";

const Navbar = () => {
  const watchList: any = useAppSelector((state: any) => state.watchList.items);

  return (
    <NavigationMenu.Root className="relative flex w-full items-center justify-end ">
      <NavigationMenu.List className="gap-2 m-0 flex list-none rounded-full items-center  rounded-b-lg   p-1 ">
        <NavigationMenu.Item>
          <FaSearch className="text-white relative top-[1px] " aria-hidden />
          <NavigationMenu.Content className="data-[motion=from-start]:animate-enterFromLeft data-[motion=from-end]:animate-enterFromRight data-[motion=to-start]:animate-exitToLeft data-[motion=to-end]:animate-exitToRight absolute top-0 left-0 w-full sm:w-auto"></NavigationMenu.Content>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.Trigger className="text-white hover:bg-zinc-900 focus:shadow-violet7 group flex select-none items-center justify-between gap-[2px] rounded-[4px] px-3 py-2 text-[15px] font-medium leading-none outline-none focus:shadow-[0_0_0_2px]">
            Watchlist{" "}
            <CaretDownIcon
              className="text-white relative transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180"
              aria-hidden
            />
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className="relative h-auto w-full">
            {watchList.length === 0 ? (
              <div className="px-2 flex justify-center items-center bg-zinc-950 h-56">
                <span>No series or movies in your watchlist</span>
              </div>
            ) : (
              <ul className="flex  flex-row overflow-auto max-w-[32rem] max-h-96 flex-wrap bg-zinc-900 justify-center items-center ">
                {watchList.map((watch: any) => {
                  return (
                    <div className="min-w-44 flex  ">
                      <ListItem
                        title={watch?.name}
                        // href="/primitives/docs/overview/introduction"
                      >
                        <Image
                          src={`https://image.tmdb.org/t/p/original/${watch?.backdrop_path}`}
                          alt={watch?.backdrop_path}
                          className="w-44 border h-auto rounded-xl "
                          width={0}
                          height={0}
                          sizes="100vw"
                        />
                      </ListItem>
                    </div>
                  );
                })}
              </ul>
            )}
          </NavigationMenu.Content>
        </NavigationMenu.Item>
      </NavigationMenu.List>

      <div className="absolute  top-7 right-0 flex w-2/3 justify-end flex-wrap flex-row">
        <NavigationMenu.Viewport className="data-[state=open]:animate-scaleIn data-[state=closed]:animate-scaleOut relative mt-[10px] bg-transparent h-[var(--radix-navigation-menu-viewport-height)] w-full origin-[top_center] overflow-hidden rounded-[6px]  transition-[width,_height] duration-300 sm:w-[var(--radix-navigation-menu-viewport-width)]" />
      </div>
    </NavigationMenu.Root>
  );
};

const ListItem = React.forwardRef(
  ({ className, children, title, ...props }: any, forwardedRef) => (
    <li>
      <NavigationMenu.Link asChild>
        <a
          className={classNames(
            "hover:bg-zinc-950  block cursor-pointer select-none rounded-[6px] p-3 text-[15px] leading-none no-underline outline-none transition-colors",
            className
          )}
          {...props}
          ref={forwardedRef}
        >
          <div className="text-white mb-[5px] font-medium leading-[1.2]">
            {title}
          </div>
          <p className="text-mauve11 leading-[1.4]">{children}</p>
        </a>
      </NavigationMenu.Link>
    </li>
  )
);

export default Navbar;
