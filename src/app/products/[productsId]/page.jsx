

import Link from "next/link";

export function generateMetadata({params}){
  return {
    title: `Product ${params.productsId}`,
    description: "Im the best",
  }
}

// export const metadata = {
//   title: "Product Info",
// }

const Product = ({params: {productsId}}) => {
    const reviews = [
        {id: 1, name: "Reviewer 1"},
        {id: 2, name: "Reviewer 2"},
        {id: 3, name: "Reviewer 3"},
        {id: 4, name: "Reviewer 4"},
        {id: 5, name: "Reviewer 5"},
    ]
   
  return (
    <div>
        <h1>Product Details of {productsId}st Product</h1>
        {reviews.map(review => (
            <Link key={review.id} href={`/products/${productsId}/reviews/${review.id}`}>
            <h2>{review.name}</h2>
            </Link>
        ))}
    </div>
  )
}

export default Product;