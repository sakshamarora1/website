import Image from "next/image";
import React from "react";
import Background from "./background";

function SubmitIdea() {
    return (
        <div className="bg-[#DDEEFD] ">
            <div className="flex justify-center max-h-64 lg:justify-between max-w-7xl items-center mx-auto">
                <div className="flex-col text-center lg:text-left items-center px-4 py-8 lg:px-8">
                    {/* Content */}
                    <h1 className="font-bold text-5xl text-[#0B4870]">
                        Having a eureka moment isn’t enough!
                    </h1>
                    <p className=" font-light text-xl text-slate-600 my-2">
                        Take help from experienced developers and give your idea
                        a headstart.
                    </p>
                    <div className="flex justify-center lg:justify-start">
                        <button className="bg-[#FFA62B] text-white font-semibold py-2 px-4 my-4 shadow-[#FFA62B] shadow-sm w-38">
                            Submit an Idea
                        </button>
                    </div>
                </div>
                <div className="hidden lg:block z-10">
                    <img src="/idea_illustration.svg" />
                </div>
            </div>
        </div>
    );
}

export default SubmitIdea;
