import React from "react";
import Images from "../../component/asset/Testimony.png";
import ThumbsUpDownIcon from "@mui/icons-material/ThumbsUpDown";
import Typography from "@mui/material/Typography";
import User1 from "../../component/asset/testimony1.jpg";
const TestimonyBest = () => {
  return (
    <div class="flex justify-center items-center w-screen h-1/4 ">
    <div class="relative mx-auto mt-10 mb-10 lg:mb-40 lg:px-20">
		<div class="relative w-full my-4 lg:w-9/12 mr-auto rounded-2xl shadow-2xl">
			<img alt="Card" src="https://images.unsplash.com/photo-1496302662116-35cc4f36df92?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" class="max-w-full rounded-lg shadow-lg"/>
        </div>
		<div class="relative w-full lg:-mt-96 lg:w-3/6 p-8 ml-auto bg-red-dark  rounded-2xl z-50">
		    <div class="flex flex-col text-white">
				<div>
					<svg xmlns="http://www.w3.org/2000/svg" class="text-gray fill-current w-12 h-12 md:w-16 md:h-16" viewBox="0 0 24 24"><path d="M6.5 10c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35.208-.086.39-.16.539-.222.302-.125.474-.197.474-.197L9.758 4.03c0 0-.218.052-.597.144C8.97 4.222 8.737 4.278 8.472 4.345c-.271.05-.56.187-.882.312C7.272 4.799 6.904 4.895 6.562 5.123c-.344.218-.741.4-1.091.692C5.132 6.116 4.723 6.377 4.421 6.76c-.33.358-.656.734-.909 1.162C3.219 8.33 3.02 8.778 2.81 9.221c-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539.017.109.025.168.025.168l.026-.006C2.535 17.474 4.338 19 6.5 19c2.485 0 4.5-2.015 4.5-4.5S8.985 10 6.5 10zM17.5 10c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35.208-.086.39-.16.539-.222.302-.125.474-.197.474-.197L20.758 4.03c0 0-.218.052-.597.144-.191.048-.424.104-.689.171-.271.05-.56.187-.882.312-.317.143-.686.238-1.028.467-.344.218-.741.4-1.091.692-.339.301-.748.562-1.05.944-.33.358-.656.734-.909 1.162C14.219 8.33 14.02 8.778 13.81 9.221c-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539.017.109.025.168.025.168l.026-.006C13.535 17.474 15.338 19 17.5 19c2.485 0 4.5-2.015 4.5-4.5S19.985 10 17.5 10z"/></svg>
                </div>
                <p class="text-white my-5 px-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tincidunt arcu diam,
                    eu feugiat felis fermentum id. Curabitur vitae nibh viverra, auctor turpis sed, scelerisque ex.
                </p>
                <div class="flex justify-between pl-2">
                    <h3 class="font-bold text-2xl">Charles Philips</h3>
                    <i class="fas fa-quote-right text-2xl" />
                </div>
            </div>
        </div>
    </div>
    </div>
  );
};

export default TestimonyBest;
