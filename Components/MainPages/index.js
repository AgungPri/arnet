import React from "react";

export default function MainPages() {
    return (

        <div>
            <div className="relative w-full">
                <header>
                    <input type="checkbox" name="hbr" id="hbr" className="hbr peer" hidden aria-hidden="true" />
                    <nav className="fixed z-10 w-full border-b bg-white bg-opacity-70 backdrop-blur navbar peer-checked:navbar-active md:absolute md:bg-transparent">
                        <div className="container m-auto px-2 md:px-12 lg:px-7">
                            <div className="flex flex-wrap items-center justify-between gap-6 md:py-3 md:gap-0">
                                <div className="w-full px-6 flex justify-between lg:w-max md:px-0">
                                    <a href="#" aria-label="logo" className="flex space-x-2 items-center">
                                        <div aria-hidden="true" className="flex space-x-1">
                                            <div className="h-4 w-4 rounded-full bg-gray-900" />
                                            <div className="h-6 w-2 bg-sky-500" />
                                        </div>
                                        <span className="text-base font-bold text-gray-400">SASS</span>
                                    </a>
                                    <label htmlFor="hbr" className="peer-checked:hamburger block relative z-20 p-6 -mr-6 cursor-pointer lg:hidden">
                                        <div aria-hidden="true" className="m-auto h-0.5 w-6 rounded bg-sky-900 transition duration-300" />
                                        <div aria-hidden="true" className="m-auto mt-2 h-0.5 w-6 rounded bg-sky-900 transition duration-300" />
                                    </label>
                                </div>
                                <div className="navmenu hidden w-full flex-wrap justify-end items-center mb-16 mx-6 space-y-20 p-6 rounded-xl shadow-lg bg-white lg:space-y-0 lg:p-0 lg:m-0 lg:flex md:flex-nowrap lg:bg-transparent lg:w-7/12 lg:shadow-none">
                                    <div className="text-gray-600 lg:pr-4">
                                        <ul className="space-y-6 tracking-wide font-medium text-lg lg:text-sm lg:flex lg:space-y-0">
                                            <li>
                                                <a href="#" className="block md:px-4 transition hover:text-sky-700">
                                                    <span>Home</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="block md:px-4 transition hover:text-sky-700">
                                                    <span>Product</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="block md:px-4 transition hover:text-sky-700">
                                                    <span>Services</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="w-full space-y-2 border-sky-200 flex flex-col -ml-1 sm:flex-row lg:space-y-0 md:w-max lg:border-l">
                                        <button type="button" title="Start buying" className="w-full py-2.5 px-5 text-center rounded-full transition active:bg-sky-200 focus:bg-sky-100 sm:w-max">
                                            <span className="block text-sky-800 font-semibold lg:text-sm">
                                                Contact
                                            </span>
                                        </button>
                                        <button type="button" title="Start buying" className="w-full py-2.5 px-5 text-center rounded-full transition bg-gradient-to-b from-sky-400 to-cyan-300 active:from-sky-300 focus:from-cyan-400 sm:w-max">
                                            <span className="block text-sky-900 font-semibold lg:text-sm">
                                                About
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </nav>
                </header>
                <div>
                    <div className="container px-8 md:px-12 xl:max-w-5xl mx-auto lg:px-7 xl:px-0">
                        <div className="md:flex md:gap-12 pt-40 lg:py-56">
                            <div className="md:w-6/12">
                                <h1 className="text-gray-900 font-bold text-4xl xl:text-5xl">Build in your way but with our experts <span className="text-sky-500">Support.</span></h1>
                                <p className="mt-8 text-gray-700">Odio incidunt nam itaque sed eius modi error totam sit illum. Voluptas doloribus asperiores quaerat aperiam. Quidem harum omnis beatae ipsum soluta!</p>

                            </div>
                            <div className="mt-12 h-56 mr-0 md:-mr-24 overflow-hidden sm:h-72 md:h-auto md:mt-0 lg:mr-0 lg:-mt-12 md:w-7/12">
                                <img src="images/job_hunt.svg" alt />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}