import Image from "next/image";
import React from "react";
import Background from "./background";

function About() {
    return (
        <div className=" max-w-7xl mx-auto">
            {/* Background */}
            <h2 className="text-xl font-bold text-[#0B4870] underline underline-offset-8 decoration-[#FFA62B] text-center pt-12">
                ABOUT
            </h2>
            <p className="text-center text-slate-500 italic pt-8 mx-4 md:mx-auto md:w-1/2">
                “Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat”
            </p>
            <div className="border mx-6 my-10 shadow-lg pt-6 md:pt-2">
                <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center items-center">
                    <div className="flex-col text-center items-center mx-6 pt-2 px-4 md:pt-4 lg:pt-0">
                        {/* Content */}
                        <h3 className="font-bold text-center text-3xl text-[#0B4870]">
                            What is Builtree?
                        </h3>
                        <p className="font-semibold text-justify text-lg text-[#0B4870] pt-6">
                            <span className="block">
                                Started by passionate developers who believe
                                that the most effective way to learn any
                                technical skill is by doing.
                            </span>
                            <span className="block pt-4">
                                With project based learning as our core, we help
                                developers gain skills and experience through
                                existing projects or building things from
                                scratch.
                            </span>
                            <span className="block pt-4">
                                scratch. Follow this link to know more!
                            </span>
                        </p>
                    </div>
                    <div className="relative h-96 w-96">
                        <Image
                            src="https://raw.githubusercontent.com/builtree/assets/org/builtree-logo.svg"
                            layout="fill"
                            objectFit="contain"
                        />
                    </div>
                    <div className="flex-col text-center items-center mx-6 md:order-4 px-4 md:pb-6">
                        {/* Content */}
                        <h3 className="font-bold text-center text-3xl text-[#0B4870]">
                            Where can we add value?
                        </h3>
                        <p className="font-semibold text-justify text-lg text-[#0B4870] pt-6">
                            <span className="block">
                                As much as building stuff is fun and rewarding,
                                it is also difficult.
                            </span>
                            <span className="block pt-4">
                                Learning new technologies, multitask in
                                development, find collaborators, maintaining the
                                project for future and so much more is required
                                to make a good idea successful.
                            </span>
                            <span className="block pt-4">
                                We aim to assist you in all this and more!
                            </span>
                        </p>
                    </div>
                    <div className="relative h-96 w-96">
                        <Image
                            src="/books.svg"
                            layout="fill"
                            objectFit="contain"
                        />
                    </div>
                    {/* <div className="hidden lg:block relative max-w-2xl w-1/2">
                        <img src="/About_illustration.svg" />
                    </div> */}
                </div>
            </div>
        </div>
    );
}

export default About;
