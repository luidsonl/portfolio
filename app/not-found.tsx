"use client";

import { useEffect, useState } from "react";

export default function NotFound() {
  const [redirecting, setRedirecting] = useState(false);

  useEffect(() => {
    const path = window.location.pathname;

    if (path.startsWith("/portfolio")) {
      setRedirecting(true);
      const newPath = path.replace(/^\/portfolio\/?/, "/");
      window.location.replace(newPath || "/");
    }
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center">
      {redirecting ? (
        <p className="text-lg text-gray-600">Redirecting...</p>
      ) : (
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">404 - Not Found</h1>
          <p className="text-lg text-gray-600">The page you are looking for does not exist.</p>
        </div>
      )}
    </div>
  )
}