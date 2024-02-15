import React from "react";
import Link from "next/link";
import { ModeToggle } from "./toogle-theme";
import { GlintLogo } from "./icons/logo";
import { useTheme } from "next-themes";

export const SiteHeader: React.FC = () => {
    const { theme } = useTheme();
    return (
        <header className="m-auto sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex items-center justify-between max-w-[120ch] mx-auto h-14">
                <div className="flex gap-4">
                    <Link href={`/`} className="flex items-center gap-3" style={{ position: "relative", right: "16px" }}>
                        {theme == 'dark' ?
                            <GlintLogo className="text-white" fill="white" width={50} />
                            :
                            <GlintLogo className="text-black" fill="black" width={50} />
                        }
                        <span className="font-bold">Glint Blog</span>
                    </Link>
                    <nav className="flex items-center gap-6 text-sm">
                        <Link className="transition-colors hover:text-foreground/80 text-foreground/60" href={`#`}>Acerca del blog</Link>
                        <Link className="transition-colors hover:text-foreground/80 text-foreground/60" href={`#`}>Posts</Link>
                    </nav>
                </div>
                <div className="flex items-center">
                    <ModeToggle />
                </div>
            </div>
        </header>
    );
}
