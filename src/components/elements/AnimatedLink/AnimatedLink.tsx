import useAnimatedRouter from "@hooks/useAnimatedRouter";
import Link from "next/link";
import React, { ReactNode } from "react";

interface IAnimatedLink {
  href: string;
  children: ReactNode;
  className: string;
}

const AnimatedLink = ({ href, children, className }: IAnimatedLink) => {
  const { animatedRoute } = useAnimatedRouter();

  return (
    <Link
      href={href}
      onClick={() => {
        animatedRoute(href);
      }}
      passHref
      className={className}
    >
      {children}
    </Link>
  );
};

export default AnimatedLink;
