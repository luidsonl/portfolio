"use client";

import { useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { Globe } from 'lucide-react';

export default function LanguageToggleWithIcons() {
  const [isEnglish, setIsEnglish] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const isEnglishPath = pathname.startsWith('/en');
    setIsEnglish(isEnglishPath);
  }, [pathname]);

  const toggleLanguage = () => {
    let newPath = pathname;
    
    if (isEnglish) {
      newPath = pathname.replace(/^\/en/, '') || '/';
    } else {
      if (pathname === '/') {
        newPath = '/en';
      } else {
        newPath = `/en${pathname}`;
      }
    }
    
    router.replace(newPath);
  };

  return (
    <div className="flex mt-4 justify-center">
        <div className='flex justify-end max-w-6xl gap-5 mx-5 container'>
            <Globe className="h-5 w-5 text-gray-600 dark:text-gray-400" />
      
            <div className="flex items-center gap-2">
                <span className={`text-sm font-medium ${!isEnglish ? 'text-blue-600 dark:text-blue-400' : 'text-gray-500 dark:text-gray-400'}`}>
                PT-BR
                </span>
                
                <button
                onClick={toggleLanguage}
                className="relative inline-flex h-7 w-12 items-center rounded-full bg-gray-300 dark:bg-gray-700 transition-colors hover:bg-gray-400 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
                aria-label={`Switch to ${isEnglish ? 'Portuguese' : 'English'}`}
                role="switch"
                aria-checked={isEnglish}
                >
                <span
                    className={`inline-block h-5 w-5 transform rounded-full bg-white dark:bg-gray-200 shadow-lg transition-all duration-200 ${
                    isEnglish ? 'translate-x-6' : 'translate-x-1'
                    }`}
                />
                </button>
                
                <span className={`text-sm font-medium ${isEnglish ? 'text-blue-600 dark:text-blue-400' : 'text-gray-500 dark:text-gray-400'}`}>
                EN
                </span>
            </div>
        </div>
      
    </div>
  );
}