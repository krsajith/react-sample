const ProductsPage = () => {
  const products = [
    { id: 1, name: 'Product 1', price: '$99' },
    { id: 2, name: 'Product 2', price: '$149' },
    { id: 3, name: 'Product 3', price: '$199' },
  ]

  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {products.map(product => (
          <div key={product.id} className="p-4 bg-white rounded shadow">
            <h2 className="text-xl font-semibold">{product.name}</h2>
            <p className="text-gray-600">{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  )
}


export default ProductsPage;



