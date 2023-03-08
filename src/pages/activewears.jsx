const products = [
  {
    id: 1,
    name: 'Green Sweat wear',
    href: '#',
    imageSrc: '/images/femaleactivewear.jpeg',
    imageAlt: "Front of women's Basic dress.",
    price: '$200',
    color: 'Green',
  },
  {
    id: 2,
    name: 'Complete Blue Active set',
    href: '/',
    imageSrc: '/images/activewear2.jpeg',
    imageAlt: "Front of women's Basic dress.",
    price: '$100',
    color: 'Light Blue',
  },
  {
    id: 3,
    name: 'Navy Slim fit Wear',
    href: '/',
    imageSrc: '/images/activewear3.jpeg',
    imageAlt: "Front of women's Basic dress.",
    price: '$300',
    color: 'Dark Blue',
  },
  {
    id: 4,
    name: 'Complete Active Pink Set',
    href: '/',
    imageSrc: '/images/activewear1.jpeg',
    imageAlt: "Front of women's Basic dress.",
    price: '$400',
    color: 'Light Pink',
  },
  // More products...
]

export default function Activewears() {
  return (
    <>
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Active Wears</h2>

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