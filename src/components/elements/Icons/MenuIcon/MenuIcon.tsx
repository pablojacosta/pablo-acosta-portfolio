// icon:menu-square | Lucide https://lucide.dev/ | Lucide
import * as React from "react";

function IconMenuSquare(props: any) {
  return (
    <svg
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      viewBox="0 0 24 24"
      height="2rem"
      width="2rem"
      {...props}
    >
      <path d="M5 3 H19 A2 2 0 0 1 21 5 V19 A2 2 0 0 1 19 21 H5 A2 2 0 0 1 3 19 V5 A2 2 0 0 1 5 3 z" />
      <path d="M7 8h10M7 12h10M7 16h10" />
    </svg>
  );
}

export default IconMenuSquare;
