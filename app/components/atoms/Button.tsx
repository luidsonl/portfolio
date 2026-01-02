"use client"

import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
};

export default function Button({ children, className = "", href, onClick }: Props) {
  const base = "inline-flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition"
  const classes = `${base} ${className}`

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    )
  }

  return (
    <button className={classes} onClick={onClick}>
      {children}
    </button>
  )
}
