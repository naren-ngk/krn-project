// FloatingNavbar.js
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

import vite from '@/assets/react.svg'
import { cn } from "@/utils/utils";

export default function FloatingNavbar({
  navItems,
  className,
}) {
  const location = useLocation();
  const pathname = location.pathname || "/";

  const [hoveredPath, setHoveredPath] = useState(pathname);

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -100,
      }}
      animate={{
        y: 0,
        opacity: 1,
      }}
      transition={{
        duration: 0.5,
        ease: "easeOut",
      }}
      className={cn(
        "flex max-w-fit fixed top-8 inset-x-0 mx-auto border border-gray-500 rounded-2xl z-[5000] p-1 px-3 items-center justify-center space-x-2 backdrop-blur-sm",
        className
      )}
    >
      {/* Logo Placeholder */}
      <div className="size-8 flex items-center justify-center">
        <img src={vite} height={38} />
      </div>
      <div className="h-6 w-px bg-gray-500"></div>

      {navItems.map((navItem, index) => {
        const isActive = navItem.path === pathname;

        return (
          <Link
            key={index}
            className="px-2 py-1 text-xs relative no-underline duration-300 ease-in"
            data-active={isActive}
            to={navItem.path}
            onMouseOver={() => setHoveredPath(navItem.path)}
            onMouseLeave={() => setHoveredPath(pathname)}
          >
            <span>{navItem.name.toUpperCase()}</span>
            {navItem.path === hoveredPath && (
              <motion.div
                className="border border-gray-500 p-3 rounded-lg absolute bottom-0 left-0 h-full -z-10"
                layoutId="navbar"
                aria-hidden="true"
                style={{
                  width: "100%",
                }}
                transition={{
                  type: "spring",
                  bounce: 0.25,
                  stiffness: 130,
                  damping: 9,
                  duration: 0.3,
                }}
              >
                <span className="absolute inset-x-0 w-3/4 h-[3px] mx-auto -bottom-px bg-gradient-to-r from-transparent via-primary to-transparent" />
              </motion.div>
            )}
          </Link>
        );
      })}
    </motion.div>
  );
}
