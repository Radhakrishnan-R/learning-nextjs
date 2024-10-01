import Link from "next/link";

const Products = () => {

    const products = [
        {name: "Product 1", id: 1},
        {name: "Product 2", id: 2},
        {name: "Product 3", id: 3},
        {name: "Product 4", id: 4},
        
    ]

  return (
    <div>
        <h1>Products are shown below</h1>
        {products.map(product => (
            <Link key={product.id} href={`/products/${product.id}`}>
                <h2>{product.name}</h2>
            </Link>
        ))}
    </div>
  )
}

export default Products;