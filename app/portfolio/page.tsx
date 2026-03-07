"use client";

import { useEffect } from "react";

export default function RedirectPortfolio() {
  useEffect(() => {
    window.location.replace("/");
  }, []);

  return <p>Redirecting...</p>;
}