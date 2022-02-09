import Image from "next/image";
import React from "react";
import Background from "./background";

function Landing() {
    return (
        <div className="min-h-screen relative">
            {/* Background */}
            <div className="w-full h-full absolute -z-10">
                <img
                  src="./background.svg"
                  alt="landing background"
                  className="w-full h-full min-h-screen object-cover top-0 right-0"
                />
            </div>
            <div className="flex justify-center lg:justify-between max-w-7xl items-center h-screen mx-auto">
                <div className="flex-col lg:pl-4 text-center lg:text-left items-center">
                    {/* Content */}
                    <h1 className="font-bold text-5xl text-[#0B4870]">
                        Collaborative Project
                    </h1>
                    <h1 className="font-bold text-5xl text-[#0B4870]">
                        Incubator
                    </h1>
                    <p className=" font-light text-xl text-[#0B4870] my-2">
                        Helping Convert Ideas to Real World Projects
                    </p>
                    <div className="flex justify-center lg:justify-start">
                        <button className="bg-[#FFA62B] text-white font-semibold py-2 px-4 my-4 shadow-[#FFA62B] shadow-sm w-28">
                            Join
                        </button>
                        <button className="bg-white hover:bg-[#0B4870] text-[#0B4870] hover:text-white font-semibold py-2 px-4 my-4 ml-6 w-28 border border-[#0B4870]">
                            Contact
                        </button>
                    </div>
                </div>
                <div className="hidden lg:block relative max-w-2xl w-1/2">
                    <img src="/landing_illustration.svg" />
                </div>
            </div>
        </div>
    );
}

export default Landing;
