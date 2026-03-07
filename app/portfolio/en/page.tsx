"use client";

import { useEffect } from "react";

export default function RedirectPortfolio() {
  useEffect(() => {
    const newPath = window.location.pathname.replace(/^\/portfolio/, "");
    window.location.replace(newPath || "/");
  }, []);

  return <p>Redirecting...</p>;
}