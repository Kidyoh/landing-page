"use client"
import React, { useState } from 'react'
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCircleArrowUp, faCircleChevronDown, faCircleXmark, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';




function MobileNavBar() {
    const [showToggle, setShowToggle] = useState(false)
    const [showResearch, setShowResearch] = useState(false)
    const [showMore, setShowMore] = useState(false)
    const [showTools, setShowTools] = useState(false)

    function handleToggle() {
        setShowToggle(!showToggle)
    }
    function handleShowMore() {
        setShowMore(!showMore)
    }
    function handleShowResearch() {
        setShowResearch(!showResearch)
    }
    function handleShowTools() {
        setShowTools(!showTools)
    }
    return (
        <div className=''>

            <button
            name='TMenu toggle button'
                onClick={handleToggle}
                className='absolute lg:hidden right-0   text-3xl text-white p-1  rounded-full px-3 mt-[-22px]'>
                   <FontAwesomeIcon icon={faBars} />
                    
                    </button>
            {showToggle && <div className='fixed top-0 bottom-0 bg-opacity-25 backdrop-blur-sm inset-0 z-50 outline-none focus:outline-none"'>
                {/* logo and Close button */}
                <div className='bg-white w-[380] top-0 bottom-0 fixed overflow-scroll overflow-y-auto'>
                    <div className='relative max-w-3xl'>
                        <div className='flex justify-between py-2 px-2 text-3xl bg-black text-white'>
                            {/* <span className="text-2xl leading-normal font-bold text-gray-100">SHEGA</span> */}
                            <Link href='/'>
                                <img src="/nexy.pnh" width={140} alt="Nexy logo" />
                            </Link>
                            <button className='rounded-full py-0 px-0 ' onClick={handleToggle} name='Close Button'> 
                            <FontAwesomeIcon icon={faCircleXmark} />
                            </button>
                        </div>

                    </div>
                    {/* header tab */}
                    <div className='text-2xl font-bold flex justify-center items-center pt-3'>
                        <h1 className='text-orange-500'>Nexy</h1>
                    </div>
                    <hr className='border-2 border-orange-300 my-4' />
                    {/* NavBars */}
                    <div className='m-5 text-lg font-semibold'>
                        {/* news */}
                        <div className='py-2 hover-orange-400'>
                            <Link onClick={() => setShowToggle(!setShowToggle)} className='py-2 px-2 hover:underline' href="#">Home</Link>
                        </div>
                        {/* Research */}
                        <div className=''>
                            <div onClick={handleShowResearch} className='flex justify-between py-2 px-2 cursor-pointer hover:underline'>
                                <span className='hover-text-orange-500'>Research</span> <button >{showResearch ? <FontAwesomeIcon icon={faCircleArrowUp} /> : <FontAwesomeIcon icon={faCircleChevronDown} />}</button>
                            </div>
                            {showResearch && (<div className='text-sm font-light mx-5 hover:font-semibold'>
                                <Link className=' hover:underline' onClick={() => setShowToggle(!setShowToggle)} href='/research/infographics' >
                                    Infographics
                                </Link>
                                <br />
                                <Link className=' hover:underline' onClick={() => setShowToggle(!setShowToggle)} href='/research/reports'  >
                                    Reports
                                </Link>
                            </div>)}

                        </div>
                        {/* Tools And Games */}
                        <div >
                            <div onClick={handleShowTools} className='flex justify-between py-2 px-2 cursor-pointer hover:underline '>
                                <span className=''>Tools & Games</span> <button >{showTools ? <FontAwesomeIcon icon={faCircleArrowUp} /> : <FontAwesomeIcon icon={faCircleChevronDown} />}</button>
                            </div>
                            {showTools && (<div className='text-sm font-light mx-5 hover:font-semibold'>
                                <Link className=' hover:underline' onClick={() => setShowToggle(!setShowToggle)} href='/tools/vat_calculator'>
                                    VAT Calculator
                                </Link>
                                <br />
                                <Link className=' hover:underline' onClick={() => setShowToggle(!setShowToggle)} href="/tools/IncomeTax_Calculator">
                                    Income Tax Calculator
                                </Link>
                            </div>)}

                        </div>
                        {/* startUp */}
                        <div className='py-2'>
                            <Link onClick={() => setShowToggle(!setShowToggle)} className='hover:underline py-2 px-2' href="#">Startup</Link>
                        </div>
                        {/* Opportunities */}
                        <div className='py-2'>
                            <Link onClick={() => setShowToggle(!setShowToggle)} className='hover:underline py-2 px-2' href="#">Opportunities</Link>
                        </div>
                        {/* More */}
                        <div>
                            <div onClick={handleShowMore} className='flex justify-between py-2 px-2 cursor-pointer hover:underline'>
                                <span className=''>More</span> <button>{showMore ? <FontAwesomeIcon icon={faCircleArrowUp} /> : <FontAwesomeIcon icon={faCircleChevronDown} />}</button>
                            </div>
                            {showMore && (<div className='text-sm font-light mx-5 hover:font-semibold'>

                                <Link className=' hover:underline' onClick={() => setShowToggle(!setShowToggle)} href='/about' >
                                    <br />
                                    About us
                                </Link>
                                <Link className=' hover:underline' onClick={() => setShowToggle(!setShowToggle)} href='/teams'  >
                                    <br />
                                    Our Team
                                </Link>
                                <Link className=' hover:underline' onClick={() => setShowToggle(!setShowToggle)} href='/contact'  >
                                    <br />
                                    Contact Us
                                </Link>   
                                 <Link className=' hover:underline' onClick={() => setShowToggle(!setShowToggle)} href='https://careers.shega.co/'  >
                                    <br />
                                    Career
                                </Link>
                            </div>)}
                        </div>
                        <hr className='border-2 border-orange-300 my-4' />
                    </div>
                </div>



            </div>}
        </div>
    )
}

export default MobileNavBar