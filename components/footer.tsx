import Link from "next/link";
import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer className="py-4 text-sm text-gray-600 border-t">
      <div className="container mx-auto">
        <p className="text-center">&copy; Glint Blog - 2024</p>
      </div>
      <div className="flex justify-center p-5">
        <ul>
          <li className="p-2 text-center transition-all hover:text-teal-600"><Link href={`/posts`}>Posts</Link></li>
          <li className="p-2 text-center transition-all hover:text-teal-600"><Link href={`/about`}>Sobre el blog</Link></li>
          <li className="p-2 text-center transition-all hover:text-teal-600"><Link href={`/cookies`}>Politica de Cookies</Link></li>
        </ul>
      </div>
    </footer>
  );
};
