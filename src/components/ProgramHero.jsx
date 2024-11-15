import React from 'react'
import { useTypewriter, Cursor } from 'react-simple-typewriter'

//images
import join1 from '../../src/assets/programs/j1.jpg';
import join2 from '../../src/assets/programs/j2.jpg';
import join3 from '../../src/assets/programs/j3.jpg';
import hero from '../../src/assets/programs/hero.jpg';

const ProgramHero = () => {

    const [text] = useTypewriter({
        words: ['budget-friendly.', 'for student benefits.', 'designed to assure best university & degree qualification.'],
        loop: {},
        typeSpeed: 120,
        deleteSpeed: 80,
    });

    return (
        <section className="overflow-hidden">
            <div className="bg-purple-50 overflow-hidden">
                
                <div className="px-10 mx-auto py-44 sm:px-20">
                    
                    <div className="flex flex-wrap -m-8">
                        <div className="w-full md:w-1/2 p-8">
                            <div className="md:max-w-lg">

                                
                                <h1 className="text-4xl text-center font-semibold tracking-tight text-gray-800 sm:text-5xl sm:text-left">IKASAcademy Programs are <span className='text-primary shadow-md'>{text}</span><span className='text-gray-800'><Cursor cursorStyle='|' /></span></h1>
                                
                                <p className="mt-6 text-sm text-gray-700 font-medium lg:text-base mb-24 text-center sm:text-left">
                                    The carefully hand-picked IKASAcademy Programs benefit you in a big way as they guarantee you financial freedom,
                                    ensure better universities, provide successful international career and thus help you make right study abroad decision.
                                </p>
                                <div className="max-w-lg">
                                    <div className="flex flex-wrap m-1.5 items-center">
                                        <div className="w-auto p-1.5">
                                            <div className="flex flex-wrap">
                                                <div className="w-auto">
                                                    <img src={join1} className="rounded-full w-10 border-2 border-gray-500 shadow-xl" alt="Join Pic 1" />
                                                </div>
                                                <div className="w-auto -ml-4">
                                                    <img src={join2} className="rounded-full w-10 border-2 border-gray-500 shadow-xl" alt="Join Pic 2" />
                                                </div>
                                                <div className="w-auto -ml-4">
                                                    <img src={join3} className="rounded-full w-10 border-2 border-gray-500 shadow-xl" alt="Join Pic 3" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex-1 p-1.5">
                                            <p className="text-primary tracking-tight font-semibold text-lg">Join now and be a part of 12k+ active students.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 p-8">
                            
                            <img class="object-cover object-center mx-auto shadow-2xl rounded-2xl sm:rounded-3xl" alt="hero" src={hero} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProgramHero