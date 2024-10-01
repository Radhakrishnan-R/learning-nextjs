import { notFound } from "next/navigation";

const Review = ({params}) => {

  if(parseInt(params.reviewId) > 5){
   return notFound();
  }
  
  return (
    <h1>Review of reviewer {params.reviewId}</h1>
  )
}

export default Review;