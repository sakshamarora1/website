import Image from "next/image";
import Link from "next/link";
import React, {useState} from "react";
import DiscordLogo from "./discord_logo";
import GitHubLogo from "./github_logo";

function Header() {
    const [active, setActive] = useState(false);

    const handleClick = () => {
        setActive(!active);
    };

    return (
        <nav className="fixed top-0 z-50 w-full bg-white shadow-md px-4">
            <div className="flex flex-wrap justify-between items-center max-w-7xl mx-auto">
                <div className="relative h-24 w-24">
                    <Link href="/">
                    <Image
                        src="https://raw.githubusercontent.com/builtree/assets/org/builtree-logo.svg"
                        layout="fill"
                        objectFit="contain"
                    />
                    </Link>
                </div>
                <nav className="relative flex space-x-2 h-10 items-center md:order-2">
                    <div className="relative w-8">
                        <a target="_blank" rel="noreferrer" href="https://github.com/builtree"><GitHubLogo className="fill-slate-500 hover:fill-black" /></a>
                    </div>
                    <div className="relative w-8">
                        <a target="_blank" rel="noreferrer" href="https://discord.gg/9BtRZhJb9G"><DiscordLogo className="fill-slate-500 hover:fill-[#5165F6]" /></a>
                    </div>
                    <button className=" inline-flex p-3 items-center hover:bg-orange-400 rounded md:hidden ml-auto hover:text-white outline-none" onClick={handleClick} >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" >
                            <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </button>
                </nav>
                {/* Links */}
                <div className={`${ active ? "" : "hidden" }   w-full md:flex md:w-auto md:order-1`}>
                <nav className="relative">
                    <ul className="flex flex-col md:flex-row md:space-x-12 text-base text-slate-500">
                        <li className="md:hover:border-b-2 pb-1 border-b-orange-400 hover:font-semibold">
                            <Link
                                href="/#about"
                            >
                                About
                            </Link>
                        </li>
                        <li className="md:hover:border-b-2 pb-1 border-b-orange-400 hover:font-semibold">
                            <Link
                                href="/projects"
                            >
                                Projects
                            </Link>
                        </li>
                        <li className="md:hover:border-b-2 pb-1 border-b-orange-400 hover:font-semibold">
                            <Link
                                href="/blog"
                            >
                                Blog
                            </Link>
                        </li>
                        <li className="md:hover:border-b-2 pb-1 border-b-orange-400 hover:font-semibold">
                            <a
                                href="mailto:contact@builtree.org"
                                target="_blank" rel="noreferrer"
                            >
                                Contact
                            </a>
                        </li>
                    </ul>
                </nav>
                </div>
            </div>
        </nav>
    );
}

export default Header;
