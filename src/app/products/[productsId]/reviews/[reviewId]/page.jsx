"use client";
import { notFound } from "next/navigation";

const Review = ({params}) => {

  const randomNumber = random(2);

  function random(count){
   
    return Math.floor(Math.random() * count);
  }
  console.log(randomNumber);

  

  if(randomNumber === 1){
    throw new Error(`Error fetching revoew for ${params.reviewId}`);
  }



  if(parseInt(params.reviewId) > 5){
   return notFound();
  }
  
  return (
    <h1>Review of reviewer {params.reviewId}</h1>
  )
}

export default Review;