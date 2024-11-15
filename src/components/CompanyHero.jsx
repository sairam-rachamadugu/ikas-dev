import React from 'react'
import grpic from "../assets/company/grppic.png"
const CompanyHero = () => {
    return (
        <div className="relative isolate overflow-hidden bg-white">
            
            
            
            <div className="px-10 mx-auto sm:px-20">
                
                
                <div className="relative mx-auto">
                    <div className="sm:max-w-lg pt-44">
                        <h1 className="text-4xl text-center font-semibold tracking-tight text-gray-800 sm:text-5xl sm:text-left">
                            Welcome to <br /><span className='text-primary sm:text-6xl'>IKASAcademy</span>
                        </h1>
                        <p className="mt-6 text-sm text-gray-700 font-medium lg:text-base text-center sm:text-left max-w-md">
                            Trusted international education consultants since 2010, working for Student success.
                        </p>
                    </div>
                    <div>
                        
                        <div className="mt-16">
                            <div
                                aria-hidden="true"
                                className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
                            >
                                <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/4 lg:translate-x-8">
                                <img src={grpic}/>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CompanyHero