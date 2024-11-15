import React from 'react'

//icons
import { AtSymbolIcon, PhoneArrowUpRightIcon, BuildingOfficeIcon } from '@heroicons/react/20/solid'

const ContactUs = () => {
    return (
        <div className="mx-auto">
            <div className="mx-auto mb-8 lg:mb-16 text-center">

                

                <h2 className="mb-4 title">Contact Us</h2>
                <p className="subdesc">Get guidance on country selection, intake, deadlines, tests, and eligibility criteria.</p>
            </div>
            
            <div className="grid row-gap-8 sm:row-gap-0 sm:grid-cols-2 lg:grid-cols-3">
                <div className="p-8 sm:border-r">
                    <div className="max-w-md text-center">
                        <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-16 sm:h-16 shadow-md">
                            <AtSymbolIcon className='w-8 h-8 text-gray-700' />
                        </div>
                        <h6 className="mb-2 font-semibold leading-5 text-gray-800">Email</h6>
                        <p className="mb-3 text-sm text-gray-700 hover:text-gray-500 hover:no-underline duration-300 transition-colors">
                            <a href="mailto:info@IKASAcademy.co.in">
                                info@IKASAcademy.co.in
                            </a>
                        </p>
                    </div>
                </div>
                <div className="p-8 lg:border-r">
                    <div className="max-w-md text-center">
                        <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-16 sm:h-16 shadow-md">
                            <PhoneArrowUpRightIcon className='w-8 h-8 text-gray-700' />
                        </div>
                        <h6 className="mb-2 font-semibold leading-5 text-gray-800">Phone</h6>
                        <p className="mb-3 text-sm text-gray-700 hover:text-gray-500 hover:no-underline duration-300 transition-colors">
                            <a href="tel:+917226812550">
                            +91 88888 88888 / <br /> +91 88888 88889
                            </a>
                        </p>
                    </div>
                </div>
                <div className="p-8 sm:border-r lg:border-r-0">
                    <div className="max-w-md text-center">
                        <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-16 sm:h-16 shadow-md">
                            <BuildingOfficeIcon className='w-8 h-8 text-gray-700' />
                        </div>
                        <h6 className="mb-2 font-semibold leading-5 text-gray-800">Address</h6>
                        <p className="mb-3 text-sm text-gray-700 hover:text-gray-500 hover:no-underline duration-300 transition-colors">
                            <a href="https://goo.gl/maps/Rko9qVf1rBpS9qe2A" target='_blank' rel="noreferrer">
                            welcome,Hyderabad
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactUs