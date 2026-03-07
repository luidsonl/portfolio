"use client";

import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Globe } from "lucide-react";
import LanguageSwitch from "../molecules/LanguageSwitch";

export default function LanguageToggle() {
  const [isEnglish, setIsEnglish] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    setIsEnglish(pathname.startsWith("/en"));
  }, [pathname]);

  const toggleLanguage = () => {
    let newPath = pathname;

    if (isEnglish) {
      newPath = pathname.replace(/^\/en/, "") || "/";
    } else {
      newPath = pathname === "/" ? "/en" : `/en${pathname}`;
    }

    router.replace(newPath);
  };

  return (
    <div className="flex mt-4 justify-center">
      <div className="flex justify-end max-w-6xl gap-5 mx-5 container">
        <Globe className="h-5 w-5 text-gray-600 dark:text-gray-400" />

        <LanguageSwitch isEnglish={isEnglish} onToggle={toggleLanguage} />
      </div>
    </div>
  );
}
