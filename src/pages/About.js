import React from 'react'
// import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'
import { AtSymbolIcon, PhoneArrowUpRightIcon, BuildingOfficeIcon } from '@heroicons/react/20/solid'
import {grpic} from "../assets/company/grppic.png"
const About = () => {
  return (
    <> 
      <div className="relative isolate overflow-hidden bg-white">
        
        <div className="pb-80 pt-44 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-52">
          <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
            <div className="sm:max-w-lg">
              <h1 className="text-4xl font-semibold tracking-tight text-gray-800 sm:text-4xl">
                Welcome to <br /><span className='text-primary font-bold sm:text-6xl'>IKASAcademy</span>
              </h1>
              <p className="mt-6 text-sm text-gray-700 font font-medium lg:text-base">
                Trusted international education consultants since 2010, <br />working for Student success.
              </p>
            </div>
            <div>
              <div className="mt-10">
                
                <div
                  aria-hidden="true"
                  className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
                >
                  <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                    
                    <img src={grpic}/>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>

      
      <section className="py-40 bg-white">
        <div className="flex flex-col px-8 mx-auto space-y-12 max-w-7xl xl:px-12">
          <div className="relative">
            
            <h2 className="w-full text-3xl font-bold text-center sm:text-4xl text-primary">About Us</h2>
            <p className="w-full py-8 mx-auto -mt-2 text-base text-center text-gray-700 font-medium sm:max-w-3xl">Add some nice touches to your interface with our latest designs, components, and templates. We've crafted a beautiful user experience that your visitors will love. </p>
          </div>
          <div className="flex flex-col mb-10 animated fadeIn sm:flex-row">
            <div className="flex items-center mb-16 sm:w-1/2 md:w-5/12 sm:order-last">
              <img className="rounded-lg shadow-xl" src='https://dl.dropboxusercontent.com/scl/fi/2xgwdibh2g91woux2fxe5/commitments.jpg?rlkey=9t77lclo7cvwspq2g41hj8k02&dl=0' alt="Commitments" />
            </div>
            <div className="flex flex-col justify-center mt-5 mb-8 md:mt-0 sm:w-1/2 md:w-7/12 sm:pr-16">
              
              <h3 className="mt-2 text-xl font-semibold sm:text-left sm:text-2xl text-gray-800">Our Commitments</h3>
              <p className="mt-5 text-base text-gray-700 sm:text-left lg:text-lg">We are dedicated to offering affordable study programs that bring value to students who dream of pursuing their academic goals in various countries. Our commitment lies in providing opportunities for education that are accessible and enriching, empowering students to fulfill their aspirations and unlock their potential on an international scale.
              </p>
            </div>
          </div>
          <div className="flex flex-col mb-10 animated fadeIn sm:flex-row">
            <div className="flex items-center mb-16 sm:w-1/2 md:w-5/12">
              <img className="rounded-lg shadow-xl" src='https://dl.dropboxusercontent.com/scl/fi/gjye4ck4gsu1h6ykd5yj9/objective.jpg?rlkey=4efckjkjbdx4xrrtjkaudtvb5&dl=0' alt="Objective" />
            </div>
            <div className="flex flex-col justify-center mt-5 mb-8 md:mt-0 sm:w-1/2 md:w-7/12 sm:pl-16">
              
              <h3 className="mt-2 text-xl font-semibold sm:text-left sm:text-2xl text-gray-800">Our Objective</h3>
              <p className="mt-5 text-base text-gray-700 sm:text-left lg:text-lg">All along our objective at IKASAcademy has been to benefit the Indian student community. “We Work for YOUR benefits only” being our sole motto behind our carefully picked affordable programs along with comprehensive and personalised guidance is to ensure best education with cost-effectiveness to help you make your dream of studying abroad a reality.</p>
            </div>
          </div>
          <div className="flex flex-col mb-10 animated fadeIn sm:flex-row">
            <div className="flex items-center mb-16 sm:w-1/2 md:w-5/12 sm:order-last">
              <img className="rounded-lg shadow-xl" src='https://dl.dropboxusercontent.com/scl/fi/o7utsbd4uuljdpwq5juu1/benefits.jpg?rlkey=ykxlj2hbqxk7pv711ok1lhzzx&dl=0' alt="Student Benefits" />
            </div>
            <div className="flex flex-col justify-center mt-5 mb-8 md:mt-0 sm:w-1/2 md:w-7/12 sm:pr-16">
              
              <h3 className="mt-2 text-xl font-semibold sm:text-left sm:text-2xl text-gray-800">Work for your Benefit</h3>
              <p className="mt-5 text-base text-gray-700 sm:text-left lg:text-lg">Whether you are looking for ranked university admissions after 12th, or affordable study programs or scholarships or may be internships during bachelors program or after that or a good Masters/ PhD program with excellent job opportunities, look no further, IKASAcademy has covered you all. IKASAcademy is an organisation that focuses on helping students succeed in their academic and professional lives. It works diligently for your profitability. At IKASAcademy, our motto is to give students the advantage of economical study and career pathways, secure the best university admissions, and open doors to excellent job opportunities. In short, we are here only to bring you benefits!</p>
            </div>
          </div>

        </div>
      </section>

      
      <section className="py-16 bg-white">
        <div className="flex flex-col px-8 mx-auto space-y-12 max-w-7xl xl:px-12">
          <div className="relative">
            <h2 className="w-full text-3xl font-bold text-center sm:text-4xl text-primary">Discover Benefits</h2>
            <p className="w-full py-8 mx-auto -mt-2 text-base text-center text-gray-600 font-medium sm:max-w-3xl">Some important points to understand the significance of associating with IKASAcademy and how you can benefit with it.</p>
          </div>
          <div className="mb-10 animated fadeIn">
            <div className="mt-5">
              <h3 className="mt-8 text-xl font-semibold sm:text-left sm:text-2xl text-gray-800">Economical Study Options</h3>
              <p className="mt-5 mb-10 pb-10 border-b-2 text-base text-gray-600 text sm:text-left lg:text-lg lg:text-justify">IKASAcademy believes in giving students an advantage when it comes to affordable study options. They understand the financial challenges students face and strive to provide cost-effective solutions. IKASAcademy aims to give students the advantage of affordable study options through low-cost study programs, scholarships, grants, and financial aid opportunities to deserving students, making higher education more accessible and affordable. They understand that education can be expensive, so they strive to provide budget-friendly solutions for students. Suppose a student comes from a family with limited financial resources. IKASAcademy can help him/ her explore cost-effective programs, scholarships, grants, and other financial aid options to make their education more affordable, allowing them to pursue their dreams without worrying too much about the cost and also not compromising on the university standards.
              </p>
              <h3 className="mt-8 text-xl font-semibold sm:text-left sm:text-2xl text-gray-800">Comprehensive Programs and Resources</h3>
              <p className="mt-5 mb-10 pb-10 border-b-2 text-base text-gray-600 text sm:text-left lg:text-lg lg:text-justify">IKASAcademy offers comprehensive programs and resources designed to give students a competitive advantage in the ever-evolving academic and professional landscape. IKASAcademy provides online courses, mentorship programs, and access to a vast library of educational materials, enabling students to stay updated with the latest knowledge and trends in their fields. They provide support in various aspects, such as test preparation, career counseling, skill development, and more. Whether you need help with SAT/IELTS/ GRE/ GMAT preparation, guidance in choosing the right career path, or assistance in developing interview skills, IKASAcademy has programs and resources tailored to your needs. These resources ensure that you have the tools necessary to succeed academically and professionally.
              </p>
              <h3 className="mt-8 text-xl font-semibold sm:text-left sm:text-2xl text-gray-800">Excellent Job Opportunities</h3>
              <p className="mt-5 mb-10 pb-10 border-b-2 text-base text-gray-600 text sm:text-left lg:text-lg lg:text-justify">IKASAcademy opens doors to excellent job opportunities for students. They have strong connections with industry leaders and provide students with the necessary skills and resources to succeed in the professional world. IKASAcademy organizes job fairs, internships, online interviews and career development workshops where students can connect with potential employers and explore various career paths. They understand the evolving professional landscape and provide students with the necessary skills and resources to stand out in the job market. IKASAcademy can offer you internships, workshops, and networking opportunities with industry professionals. These experiences can enhance your resume and help you secure a desirable job during and after the study program.
              </p>
              <h3 className="mt-8 text-xl font-semibold sm:text-left sm:text-2xl text-gray-800">Best University Admissions</h3>
              <p className="mt-5 mb-10 pb-10 border-b-2 text-base text-gray-600 text sm:text-left lg:text-lg lg:text-justify">IKASAcademy aims to secure the best university admissions for its students. They have the expertise and knowledge to guide students through the application process and increase your chances of getting accepted into top-tier universities. IKASAcademy provides personalized assistance in preparing college applications, writing impactful essays, and conducting mock interviews to help students stand out and gain admission to their dream universities. If you aspire to study medicine, IKASAcademy will assist you in preparing for entrance exams, writing compelling personal statements, and acquiring the necessary recommendation letters, helping build your profile etc. Their guidance can significantly improve your chances of getting accepted into prestigious medical schools.
              </p>
              <h3 className="mt-8 text-xl font-semibold sm:text-left sm:text-2xl text-gray-800">Guaranteed Outcomes</h3>
              <p className="mt-5 mb-10 pb-10 border-b-2 text-base text-gray-600 text sm:text-left lg:text-lg lg:text-justify">IKASAcademy is committed to ensuring guaranteed outcomes for students. This means that they work tirelessly to help students achieve their goals and have a successful and fulfilling career. IKASAcademy offers specialized training programs that equip students with the necessary skills and knowledge to secure high-paying jobs in their chosen fields. Let's say you want to pursue a career in engineering. By joining IKASAcademy, you will get all the necessary guidance and support to secure admission to a top engineering university and increase your chances of landing a good job in the field.
              </p>
              <h3 className="mt-8 text-xl font-semibold sm:text-left sm:text-2xl text-gray-800">Maximum Benefits</h3>
              <p className="mt-5 mb-10 pb-10 text-base text-gray-600 text sm:text-left lg:text-lg lg:text-justify">IKASAcademy is dedicated to providing students with the maximum benefits they need to excel. This means that students can expect valuable resources, support, and guidance that will enhance their educational journey. By joining IKASAcademy, students gain access to budget-friendly study programs, exclusive study materials, personalized counseling, and networking opportunities with industry professionals.
              </p>
            </div>
          </div>
        </div>
      </section>

      
      <section className="bg-white">
        <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <div className="mx-auto mb-8 lg:mb-16 text-center">

            

            <h2 className="mb-4 text-3xl tracking-tight font-bold text-primary sm:text-4xl">Contact Us</h2>
            <p className="text-gray-600 font-medium text-base">Get guidance on country selection, intake, deadlines, tests, and eligibility criteria.</p>
          </div>
          <div className="space-y-8 flex flex-col items-start justify-center sm:grid sm:grid-cols-3 sm:gap-5 lg:gap-12 sm:space-y-0 text-center">
            <div className='flex flex-col items-center'>
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-gray-200 lg:h-12 lg:w-12 shadow-xl">
                <AtSymbolIcon className='w-6 text-gray-600' />
              </div>
              <h3 className="mb-2 font-bold text-gray-800 ">Email</h3>
              <p className="text-gray-600 w-52 sm:w-fit">info@IKASAcademy.co.At</p>
            </div>
            <div className='flex flex-col items-center'>
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-gray-200 lg:h-12 lg:w-12 shadow-xl">
                <PhoneArrowUpRightIcon className='w-6 text-gray-600' />
              </div>
              <h3 className="mb-2 font-bold text-gray-800">Phone</h3>
              <p className="text-gray-600">+91 88888 88888 / <br /> +91 88888 88889</p>
            </div>
            <div className='flex flex-col items-center'>
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-gray-200 lg:h-12 lg:w-12 shadow-xl">
                <BuildingOfficeIcon className='w-6 text-gray-600' />
              </div>
              <h3 className="mb-2 font-bold text-gray-800">Address</h3>
              <p className="text-gray-600 w-52 sm:w-fit">welcome,Hyderabad</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About