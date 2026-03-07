"use client";

import { useEffect } from "react";

export default function RedirectPortfolio() {
  useEffect(() => {
    window.location.replace("/en");
  }, []);

  return <p>Redirecting...</p>;
}