const products = [
  {
    id: 1,
    name: 'Silk-Cutton Shirt',
    href: '#',
    imageSrc: '/images/maletshirt.jpeg',
    imageAlt: "Front of women's Basic dress.",
    price: '$50',
    color: 'Black',
  },
  {
    id: 2,
    name: 'Black Cutton Shirt',
    href: '/',
    imageSrc: '/images/tshirt2.jpg',
    imageAlt: "Front of women's Basic dress.",
    price: '$40',
    color: 'Black',
  },
  {
    id: 3,
    name: 'White Silk Shirt',
    href: '/',
    imageSrc: '/images/tshirt3.jpeg',
    imageAlt: "Front of women's Basic dress.",
    price: '$60',
    color: 'White',
  },
  {
    id: 4,
    name: 'Couple Pair',
    href: '/',
    imageSrc: '/images/tshirt4.jpeg',
    imageAlt: "Front of Couple Basic dress.",
    price: '$70',
    color: 'White',
  },
  // More products...
]

export default function Tshirts() {
  return (
    <>
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">T-Shirt</h2>

        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}