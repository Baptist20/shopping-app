const products = [
  {
    id: 1,
    name: 'Bright-brown Leather Jackets',
    href: '#',
    imageSrc: '/images/femalejacket.jpeg',
    imageAlt: "Front of women's Basic dress.",
    price: '$600',
    color: 'Light-brown',
  },
  {
    id: 2,
    name: 'Black Rain Jacket',
    href: '/',
    imageSrc: '/images/jacket2.jpeg',
    imageAlt: "Front of women's Basic dress.",
    price: '$200',
    color: 'Black',
  },
  {
    id: 3,
    name: 'Black Winter Jacket',
    href: '/',
    imageSrc: '/images/jacket3.jpeg',
    imageAlt: "Front of women's Basic dress.",
    price: '$300',
    color: 'Black',
  },
  {
    id: 4,
    name: 'Two Set Jacket',
    href: '/',
    imageSrc: '/images/jacket4.jpeg',
    imageAlt: "Front of women's Basic dress.",
    price: '$400',
    color: 'Pink and Light Brown',
  },
  // More products...
]

export default function Jackets() {
  return (
    <>
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Jackets</h2>

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