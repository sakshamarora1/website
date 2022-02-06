import Image from "next/image";
import React from "react";
import DiscordLogo from "./discord_logo";
import GitHubLogo from "./github_logo";

function Header() {
    return (
        <nav className="fixed top-0 z-50 w-full bg-white">
            <div className="flex justify-between items-center max-w-7xl mx-auto">
                <div className="relative h-24 w-24">
                    <Image
                        src="https://raw.githubusercontent.com/builtree/assets/org/builtree-logo.svg"
                        layout="fill"
                        objectFit="contain"
                    />
                </div>
                {/* Links */}
                <nav className="relative">
                    <ul className="flex space-x-12 text-base text-slate-500">
                        <li>
                            <a
                                href="#"
                                className="hover:border-b-2 pb-1 border-b-orange-400 hover:font-semibold"
                            >
                                About
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="hover:border-b-2 pb-1 border-b-orange-400 hover:font-semibold"
                            >
                                Projects
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="hover:border-b-2 pb-1 border-b-orange-400 hover:font-semibold"
                            >
                                Blog
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="hover:border-b-2 pb-1 border-b-orange-400 hover:font-semibold"
                            >
                                Contact
                            </a>
                        </li>
                    </ul>
                </nav>

                <nav className="relative flex space-x-2 h-10 fill-slate-500">
                    <div className="relative w-8 ">
                        <GitHubLogo className="hover:fill-black" />
                    </div>
                    <div className="relative w-8">
                        <DiscordLogo className="hover:fill-[#5165F6]" />
                    </div>
                </nav>
            </div>
        </nav>
    );
}

export default Header;
