import React, { useState } from "react";
import Link from "next/link";
import { ModeToggle } from "./toogle-theme";
import { GlintLogo } from "./icons/logo";
import { useTheme } from "next-themes";

export const SiteHeader: React.FC = () => {
    const { theme } = useTheme();
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className="m-auto sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex items-center justify-between max-w-[120ch] mx-auto h-14">
                <div className="flex items-center gap-4">
                    <Link href={`/`} className="flex items-center gap-3" style={{ position: "relative", right: "16px" }}>
                        {theme == 'dark' ?
                            <GlintLogo className="text-white" fill="white" width={50} />
                            :
                            <GlintLogo className="text-black" fill="black" width={50} />
                        }
                        <span className="font-bold">Glint Blog</span>
                    </Link>
                    <nav className="items-center hidden gap-6 text-sm md:flex">
                        <Link className="transition-colors hover:text-foreground/80 text-foreground/60" href={`/about`}>About</Link>
                        <Link className="transition-colors hover:text-foreground/80 text-foreground/60" href={`/`}>Posts</Link>
                        <Link className="transition-colors hover:text-foreground/80 text-foreground/60" href={`/contact`}>Contacto</Link>
                    </nav>
                </div>
                <div className="flex items-center">
                    <ModeToggle />
                    <button className="ml-4 md:hidden" onClick={toggleMenu}>
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            {menuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>
            </div>
            {menuOpen && (
                <div className="md:hidden">
                    <div className="p-4">
                        <Link href={`/about`} className="block transition-colors hover:text-foreground/80 text-foreground/60">Acerca del blog</Link>
                        <Link href={`/`} className="block transition-colors hover:text-foreground/80 text-foreground/60">Posts</Link>
                    </div>
                </div>
            )}
        </header>
    );
};
