import React from 'react'

import Navbar from "../../../component/pageComponent/Navbar/Navbar";
import Footer1 from '../../../component/smallComponent/footer';


const NewsPage = () => {
    return (
        <div>
            <Navbar />
            {/* <!-- Banner --> */}
            <div class="text-center py-2 bg-image">
                <div class="flex flex-col justify-center my-56">
                    <div class="flex flex-col mx-auto mb-3 w-64 xl:w-96">
                        <h2 class="text-center font-bold text-2xl text-white">What's New</h2>
                        <div class="input-group relative flex flex-nowrap items-stretch">
                            <input type="search"
                                class="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                placeholder="Search" aria-label="Search" aria-describedby="button-addon2" />
                            <button
                                class="btn px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-blue-700  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out "
                                type="button" id="button-addon2">
                                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" class="w-4"
                                    role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    <path fill="currentColor"
                                        d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z">
                                    </path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- Late Post --> */}
            <div class="mx-10">
                <div class="flex mx-auto">
                    <h1 class="relative inline-block font-bold text-4xl corner mx-auto my-20 text-center text-white">NEWS</h1>
                </div>
                <div>
                    <h4 class="text-white font-bold text-xl">Last Post</h4>
                </div>
                <div class="flex flex-wrap mt-4 border-2 rounded-lg">
                    <div class="w-1/2 py-10 pl-16">
                        <h4 class="font-bold text-2xl text-white">5-Minutes Stress Reliever Bodyweight Workout</h4>
                        <p class="font-reguler text-lg whitespace-normal text-white">Try our 5-Minute Stress Reliever Full-Body
                            Workout to
                            get an effective
                            full-body workout that will not only get your heart pumping but will help reduce stress.</p>
                        <a href="" class="text-blue-500 font-reguler text-lg mt-5">Readmore</a>
                    </div>
                    <div class="w-1/2 pl-48 py-10">
                        <img src="img/img-post1.png" alt="" />
                    </div>
                </div>
            </div>

            {/* <!-- Reading List --> */}
            <div class="mx-10 my-24">
                <h2 class="font-bold text-2xl text-white">READING LIST</h2>
                {/* <!-- Card --> */}
                <div class="flex flex-row mt-4">
                    <div class="w-100 pr-10 flex flex-col">
                        <img src="img/img-post2.png" alt="" />
                        <h2 class="font-reguler text-lg whitespace-normal text-white">In publishing and graphic design, Lorem
                            ipsum is a
                            placeholder text commonly used</h2>
                    </div>
                    <div class="w-100 pr-10 flex flex-col">
                        <img src="img/img-post2.png" alt="" />
                        <h2 class="font-reguler text-lg whitespace-normal text-white">In publishing and graphic design, Lorem
                            ipsum is a
                            placeholder text commonly used</h2>
                    </div>
                    <div class="w-100 pr-10 flex flex-col">
                        <img src="img/img-post2.png" alt="" />
                        <h2 class="font-reguler text-lg whitespace-normal text-white">In publishing and graphic design, Lorem
                            ipsum is a
                            placeholder text commonly used</h2>
                    </div>
                    <div class="w-100 pr-10 flex flex-col">
                        <img src="img/img-post2.png" alt="" />
                        <h2 class="font-reguler text-lg whitespace-normal text-white">In publishing and graphic design, Lorem
                            ipsum is a
                            placeholder text commonly used</h2>
                    </div>
                </div>
            </div>
            <Footer1 />
        </div>
    )
}

export default NewsPage
