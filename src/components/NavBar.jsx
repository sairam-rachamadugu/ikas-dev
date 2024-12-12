import React, { Fragment, useState ,useEffect} from 'react'
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import { Link } from 'react-router-dom'

//icons
import {
    Bars3Icon,
    AcademicCapIcon,
    BuildingLibraryIcon,
    BriefcaseIcon
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, QueueListIcon } from '@heroicons/react/20/solid'
import { FaAngleRight, FaArrowRight } from 'react-icons/fa'

//images
import brandicon from '../assets/brandedlogo.png'
import brandiconmd from '../assets/brandedlogo.png'

const programs = [
    { name: 'AMC MCQ', description: 'AMC MCQ Exam Preparation', href: 'https://www.ug.IKASAcademy.co.in/', icon: AcademicCapIcon },
    { name: 'AMC Clinical', description: 'AMC Clinical Exam Preparation', href: 'https://www.pgmedicine.com/', icon: BuildingLibraryIcon },
]
const aboutIkas = [
    { name: 'What we do', description: 'AMC MCQ Exam Preparation', href: 'https://www.ug.IKASAcademy.co.in/', icon: AcademicCapIcon },
    { name: 'Meet theTeam', description: 'AMC Clinical Exam Preparation', href: 'https://www.pgmedicine.com/', icon: BuildingLibraryIcon },
]

const callsToAction = [
    { direct: 'Go To Courses ->', href: '/programs', icon: QueueListIcon },
]

const callsToAbout = [
    { direct: 'Go To Overview ->', href: '/about', icon: QueueListIcon },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}


const NavBar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isPopoverOpen, setPopoverOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    const handlePopoverOpen = () => {
        setPopoverOpen(true);
    }

    const handlePopoverClose = () => {
        setPopoverOpen(false);
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
      
        return () => { 
          window.removeEventListener("scroll",handleScroll);
        };
      }, []);
    
    return (
        <div className='bg-peacockBlue'>
            <header className= {`${scrolled ? 'fixed border-b border-gray-100 backdrop-blur-sm bg-peacockBlue/90' : 'absolute' } inset-x-0 top-0 z-50 bg-peacockBlue`}>
                <nav className="flex items-center justify-between p-4 lg:px-8"  aria-label="Global">
                    <div className="flex lg:flex-1">
                        <Link to="/" className="-m-1.5 p-1.5">
                            <span className="sr-only">IKASAcademy</span>
                            <img className="h-10 w-auto lg:hidden" src={brandiconmd} alt="brandedlogo" />
                            <img className="hidden h-10 w-auto lg:block" src={brandicon} alt="brandedlogo" />
                        </Link>
                    </div>
                    <div className="flex lg:hidden">
                        <button
                            type="button"
                            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-moonlight"
                            onClick={() => setMobileMenuOpen(true)}
                        >
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <Popover.Group className="hidden lg:flex lg:gap-x-12 ml-auto">
                        <Link to="/" className="text-sm font-semibold leading-6 text-moonlight hover:text-primary duration-300 transition-colors">
                            Home
                        </Link>
                        <Popover className="relative">
                            <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-moonlight hover:text-primary duration-300 transition-colors" onClick={handlePopoverOpen}>
                                
                                Courses Offered
                            </Popover.Button>

                            {isPopoverOpen && (
                                <Transition
                                    as={Fragment}
                                    enter="transition ease-out duration-200"
                                    enterFrom="opacity-0 translate-y-1"
                                    enterTo="opacity-100 translate-y-0"
                                    leave="transition ease-in duration-150"
                                    leaveFrom="opacity-100 translate-y-0"
                                    leaveTo="opacity-0 translate-y-1"
                                >
                                    <Popover.Panel className="absolute -left-44 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                                        <div className="p-4">
                                            {programs.map((item) => (
                                                <div
                                                    key={item.name}
                                                    className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                                                >
                                                    {/* <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                                        <item.icon className="h-6 w-6 text-gray-700 group-hover:text-primary" aria-hidden="true" />
                                                    </div> */}
                                                    <div className="flex-auto">
                                                        <a href={item.href} className="block font-semibold text-gray-900" target="_blank" rel="noopener noreferrer">
                                                            {item.name}
                                                            <span className="absolute inset-0" />
                                                        </a>
                                                        {/* <p className="mt-1 text-gray-700">{item.description}</p> */}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="divide-gray-900/5 bg-gray-50">
                                            {callsToAction.map((item) => (
                                                <Link
                                                    key={item.name}
                                                    to={item.href}
                                                    className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
                                                    onClick={handlePopoverClose}
                                                >
                                                    <item.icon className="h-5 w-5 flex-none text-moonlight" aria-hidden="true" />
                                                    {item.name}
                                                    {item.direct}
                                                </Link>
                                            ))}
                                        </div>
                                    </Popover.Panel>
                                </Transition>
                            )}
                        </Popover>
                        <Popover className="relative">
                            <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-moonlight hover:text-primary duration-300 transition-colors" onClick={handlePopoverOpen}>
                                
                                About IKAS
                            </Popover.Button>

                            {isPopoverOpen && (
                                <Transition
                                    as={Fragment}
                                    enter="transition ease-out duration-200"
                                    enterFrom="opacity-0 translate-y-1"
                                    enterTo="opacity-100 translate-y-0"
                                    leave="transition ease-in duration-150"
                                    leaveFrom="opacity-100 translate-y-0"
                                    leaveTo="opacity-0 translate-y-1"
                                >
                                    <Popover.Panel className="absolute -left-44 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                                        <div className="p-4">
                                            {aboutIkas.map((item) => (
                                                <div
                                                    key={item.name}
                                                    className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                                                >
                                                    {/* <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                                        <item.icon className="h-6 w-6 text-gray-700 group-hover:text-primary" aria-hidden="true" />
                                                    </div> */}
                                                    <div className="flex-auto">
                                                        <a href={item.href} className="block font-semibold text-gray-900" target="_blank" rel="noopener noreferrer">
                                                            {item.name}
                                                            <span className="absolute inset-0" />
                                                        </a>
                                                        {/* <p className="mt-1 text-gray-700">{item.description}</p> */}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="divide-gray-900/5 bg-gray-50">
                                            {callsToAbout.map((item) => (
                                                <Link
                                                    key={item.name}
                                                    to={item.href}
                                                    className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
                                                    onClick={handlePopoverClose}
                                                >
                                                    <item.icon className="h-5 w-5 flex-none text-moonlight" aria-hidden="true" />
                                                    {item.name}
                                                    {item.direct}
                                                </Link>
                                            ))}
                                        </div>
                                    </Popover.Panel>
                                </Transition>
                            )}
                        </Popover>
                        <Link to="/connect" className="text-sm font-semibold leading-6 text-moonlight hover:text-primary duration-300 transition-colors">
                            Contact Us
                        </Link>
                    </Popover.Group>
                    
                    <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                        <Link
                            to="/connect"
                            className="btn flex gap-1 items-center"
                        >
                            Enquiries <FaAngleRight size={15} />
                        </Link>
                    </div>
                </nav>

                

                <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                    <div className="fixed inset-0 z-10" />
                    <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-peacockBlue px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                        <div className="flex items-center justify-between">
                            <Link to="/" className="-m-1.5 p-1.5">
                                <span className="sr-only">IKASAcademy</span>
                                
                            </Link>

                            <button
                                type="button"
                                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                <span className="sr-only">Close menu</span>
                                <div className='mt-2 h-6 w-6'></div>
                                
                            </button>
                        </div>
                        <div className="mt-16 flow-root">
                            <div className="-my-6 divide-y divide-gray-500/10">
                                <div className="space-y-2 py-6">
                                    <Link
                                        to="/"
                                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-moonlight hover:text-primary" onClick={() => setMobileMenuOpen(false)}
                                    >
                                        Home
                                    </Link>
                                    <Disclosure as="div" className="-mx-3">
                                        {({ open }) => (
                                            <>
                                                <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-moonlight hover:text-primary">
                                                Courses Offered
                                                    <ChevronDownIcon
                                                        className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                                                        aria-hidden="true"
                                                    />
                                                </Disclosure.Button>
                                                <Disclosure.Panel className="mt-2 space-y-2">
                                                    {[...programs, ...callsToAction].map((item) => (
                                                        <Link
                                                            key={item.name}
                                                            to={item.href}
                                                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-moonlight hover:text-primary"
                                                            onClick={() => setMobileMenuOpen(false)}
                                                        >
                                                            {item.name}
                                                            {/* <span className='text-primary font-bold'>{item.direct}</span> */}
                                                        </Link>
                                                    ))}
                                                </Disclosure.Panel>
                                            </>
                                        )}
                                    </Disclosure>
                                    <Disclosure as="div" className="-mx-3">
                                        {({ open }) => (
                                            <>
                                                <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-moonlight hover:text-primary">
                                                About IKAS
                                                    <ChevronDownIcon
                                                        className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                                                        aria-hidden="true"
                                                    />
                                                </Disclosure.Button>
                                                <Disclosure.Panel className="mt-2 space-y-2">
                                                    {[...aboutIkas, ...callsToAbout].map((item) => (
                                                        <Link
                                                            key={item.name}
                                                            to={item.href}
                                                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-moonlight hover:text-primary"
                                                            onClick={() => setMobileMenuOpen(false)}
                                                        >
                                                            {item.name}
                                                            {/* <span className='text-primary font-bold'>{item.direct}</span> */}
                                                        </Link>
                                                    ))}
                                                </Disclosure.Panel>
                                            </>
                                        )}
                                    </Disclosure>                                    
                                    <Link
                                        to="/blogs"
                                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-moonlight hover:text-primary" onClick={() => setMobileMenuOpen(false)}
                                    >
                                        Blogs
                                    </Link>
                                    <Link
                                        to="/connect"
                                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-moonlight hover:text-primary" onClick={() => setMobileMenuOpen(false)}
                                    >
                                        Contact Us
                                    </Link>
                                </div>
                                <div className="py-6">
                                    
                                    <Link
                                        to="/connect"
                                        className="rounded-xl text-base font-extrabold leading-7 text-primary hover:bg-primary-hover hover:text-white 
                                        flex gap-1.5 items-center" onClick={() => setMobileMenuOpen(false)}
                                    >
                                        Enquiries <FaArrowRight />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </Dialog.Panel>
                </Dialog>
            </header>
        </div>
    )
}

export default NavBar