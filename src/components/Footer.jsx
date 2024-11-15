
import React from 'react'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'

//images
import brandimg from '../assets/brandedlogo.png'

//icons
import { RiInstagramFill, RiFacebookFill, RiTwitterFill, RiYoutubeFill } from 'react-icons/ri';

const Footer = () => {
    return (
        // <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="p-6 mx-auto max-w-sm sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
            <div className="grid gap-16 row-gap-10 mb-8 lg:grid-cols-6">
                <div className="md:max-w-md lg:col-span-2">
                    <Link
                        to="/"
                        aria-label="Go home"
                        title="Company"
                        className="inline-flex items-center"
                    >

                        <img className="h-10 w-auto" src={brandimg} alt="brandedlogo" />

                        
                    </Link>
                    <div className="mt-4 lg:max-w-sm">
                        <p className="text-sm text-gray-700 leading-6">
                            Welcome to IKASAcademy International Education Consultancy, your trusted partner in the journey towards higher education in the world's top universities.
                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-5 row-gap-8 lg:col-span-4 md:grid-cols-4">
                    <div className="hidden lg:block"></div>
                    <div>
                        <p className="font-semibold tracking-wide text-gray-800">
                            Category
                        </p>
                        <ul className="mt-2 space-y-2">
                            <li>
                                <Link
                                    to="/about"
                                    className="text-gray-700 transition-colors duration-300 hover:text-deep-purple-accent-400 hover:text-gray-500"
                                >
                                    Company
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/"
                                    className="text-gray-700 transition-colors duration-300 hover:text-deep-purple-accent-400 hover:text-gray-500"
                                >
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/"
                                    className="text-gray-700 transition-colors duration-300 hover:text-deep-purple-accent-400 hover:text-gray-500"
                                >
                                    T&C
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/"
                                    className="text-gray-700 transition-colors duration-300 hover:text-deep-purple-accent-400 hover:text-gray-500"
                                >
                                    FAQ
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <p className="font-semibold tracking-wide text-gray-800">
                            Quick Links
                        </p>
                        <ul className="mt-2 space-y-2">
                            <li>
                                <HashLink
                                    to="/programs#testimonials" smooth
                                    className="text-gray-700 transition-colors duration-300 hover:text-deep-purple-accent-400 hover:text-gray-500"
                                >
                                    Testimonials
                                </HashLink>
                            </li>
                            <li>
                                <Link
                                    to="/blogs"
                                    className="text-gray-700 transition-colors duration-300 hover:text-deep-purple-accent-400 hover:text-gray-500"
                                >
                                    Blogs
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <p className="font-semibold tracking-wide text-gray-800">Programs</p>
                        <ul className="mt-2 space-y-2">
                            <li>
                                <a
                                    href="https://www.ug.IKASAcademy.co.in/" target='_blank'
                                    className="text-gray-700 transition-colors duration-300 hover:text-deep-purple-accent-400 hover:text-gray-500" rel="noreferrer"
                                >
                                    Bachelors
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.pgmedicine.com/" target='_blank'
                                    className="text-gray-700 transition-colors duration-300 hover:text-deep-purple-accent-400 hover:text-gray-500" rel="noreferrer"
                                >
                                    Masters
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.ws.IKASAcademy.co.in/" target='_blank'
                                    className="text-gray-700 transition-colors duration-300 hover:text-deep-purple-accent-400 hover:text-gray-500" rel="noreferrer"
                                >
                                    Phd
                                </a>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
            <div className="flex flex-col justify-between pt-5 pb-10 border-t sm:flex-row">
                <p className="text-sm text-gray-600">
                    © Copyright 2024 IKASAcademy. All rights reserved.
                </p>
                <div className="flex items-center mt-4 space-x-4 sm:mt-0">
                    
                    <a className="text-gray-500 hover:text-[#3b5998] cursor-pointer text-2xl duration-300 transition-colors">
                        <RiFacebookFill />
                    </a>
                    <a className="ml-4 text-gray-500 hover:text-[#26a7de] cursor-pointer text-2xl duration-300 transition-colors">
                        <RiTwitterFill />
                    </a>
                    <a className="ml-4 text-gray-500 hover:text-[#e2457a] cursor-pointer text-2xl duration-300 transition-colors">
                        <RiInstagramFill />
                    </a>
                    <a className="ml-4 text-gray-500 hover:text-[#CD201F] cursor-pointer text-2xl duration-300 transition-colors">
                        <RiYoutubeFill />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Footer