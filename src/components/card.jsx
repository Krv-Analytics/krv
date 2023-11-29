import React from 'react';
import Image from 'next/image'

const Card = ({ name, image, githubUrl, linkedInUrl, websiteUrl, description}) => {

if(websiteUrl)
  
  return (
    <><link rel="stylesheet" href="https://pro.fontawesome.com/releases/v6.0.0-beta1/css/all.css" />
        <div class="flex py-8 px-12 md:px-2 rounded-md border border-black bg-gray-200"> 
            <img class="rounded-full border-4 border-gray-300 h-24 w-24 mx-auto" src={image} alt="" />
            <div class="flex flex-col text-center md:text-left">
              <div class="font-medium text-lg text-gray-800">{name}
              <span class="text-xs text-gray-400"> Founder</span>
              </div>
              <div class="text-gray-500 mb-3 whitespace-nowrap">{description}</div>
              <div class="flex flex-row gap-4 text-gray-800 my-auto text-2xl mx-auto md:mx-0">
                <a href={websiteUrl}class="hover:cursor-pointer hover:text-red-500"><i class="fa-solid fa-globe"></i></a>
                <a href={githubUrl} class="hover:cursor-pointer hover:text-red-500"><i class="fab fa-github-square"></i></a>
                <a href={linkedInUrl}class="hover:cursor-pointer hover:text-red-500"><i class="fab fa-linkedin"></i></a>
            </div>
            </div>
          </div></>
  );

else 

return (
  <><link rel="stylesheet" href="https://pro.fontawesome.com/releases/v6.0.0-beta1/css/all.css" />
  <div class="flex py-8 px-12 md:px-2 rounded-md border border-black bg-gray-200"> 
      <img class="rounded-full border-4 border-gray-300 h-24 w-24 mx-auto" src={image} alt="" />
      <div class="flex flex-col text-center md:text-left">
        <div class="font-medium text-lg text-gray-800">{name}
        <span class="text-xs text-gray-400"> Founder</span>
        </div>
        <div class="text-gray-500 mb-3 whitespace-nowrap">{description}</div>
        <div class="flex flex-row gap-4 text-gray-800 my-auto text-2xl mx-auto md:mx-0">
          <a href={githubUrl} class="hover:cursor-pointer hover:text-red-500"><i class="fab fa-github-square"></i></a>
          <a href={linkedInUrl}class="hover:cursor-pointer hover:text-red-500"><i class="fab fa-linkedin"></i></a>
      </div>
      </div>
    </div></>

)


};

export default Card;
