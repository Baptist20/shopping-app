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
    name: 'Flay Gown',
    href: '#',
    imageSrc: '/images/dress.jpeg',
    imageAlt: "Front of women's Basic dress.",
    price: '$60',
    color: 'Blue',
  },
  {
    id: 3,
    name: 'Sunglasses',
    href: '#',
    imageSrc: '/images/femalewatches.jpeg',
    imageAlt: "Front of women's Basic dress.",
    price: '$32',
    color: 'Green',
  },
  {
    id: 4,
    name: 'Green Sweat wear',
    href: '#',
    imageSrc: '/images/femaleactivewear.jpeg',
    imageAlt: "Front of women's Basic dress.",
    price: '$200',
    color: 'Green',
  },
  {
    id: 5,
    name: 'Pink White Leather Bag',
    href: '#',
    imageSrc: '/images/femalebags.jpeg',
    imageAlt: "Front of women's Basic dress.",
    price: '$35',
    color: 'Pink and White',
  },
  {
    id: 6,
    name: 'Leather Belt',
    href: '#',
    imageSrc: '/images/femalebelt.jpeg',
    imageAlt: "Front of women's Basic dress.",
    price: '$28.30',
    color: 'Brown',
  },
  {
    id: 7,
    name: 'Blue Jean Denim',
    href: '#',
    imageSrc: '/images/femaledenim.jpeg',
    imageAlt: "Front of women's Basic dress.",
    price: '$300',
    color: 'Blue',
  },
  {
    id: 8,
    name: 'Black Hat',
    href: '#',
    imageSrc: '/images/femalehat.jpeg',
    imageAlt: "Front of women's Basic dress.",
    price: '$20',
    color: 'Black',
  },
  {
    id: 1,
    name: 'Cutton Sweater',
    href: '#',
    imageSrc: '/images/femalesweater.jpeg',
    imageAlt: "Front of women's Basic dress.",
    price: '$35',
    color: 'Light Brown',
  },
  {
    id: 10,
    name: 'White Trouser',
    href: '#',
    imageSrc: '/images/femaletousers.jpeg',
    imageAlt: "Front of women's Basic dress.",
    price: '$20',
    color: 'White',
  },
  {
    id: 11,
    name: 'Silk-Cutton Shirt',
    href: '#',
    imageSrc: '/images/maletshirt.jpeg',
    imageAlt: "Front of women's Basic dress.",
    price: '$50',
    color: 'White',
  },
  {
    id: 12,
    name: 'Throwback Hip Bag',
    href: '#',
    imageSrc: '/images/femalewallet.jpeg',
    imageAlt: "Front of women's Basic dress.",
    price: '$90',
    color: 'Pink',
  },
  // More products...
]

export default function Browseall() {
  return (
    <>
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">ALL</h2>

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