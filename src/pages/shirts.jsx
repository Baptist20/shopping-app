import { useState } from "react"
import Payment from "../components/payment"

const products = [
  {
    id: 1,
    name: 'Basic Tee',
    href: '#',
    imageSrc: 'images/femaletshirt.jpeg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$30',
    color: 'White',
  },
  {
    id: 2,
    name: 'Long sleeve',
    href: '/',
    imageSrc: 'images/shirt2.jpeg',
    imageAlt: "Front of women Basic Tee in black.",
    price: '$50',
    color: 'Green',
  },
  {
    id: 3,
    name: 'White Casual Longsleeve',
    href: '/',
    imageSrc: 'images/shirt3.jpeg',
    imageAlt: "Front of women's Basic Tee in black.",
    price: '$50',
    color: 'White',
  },
  {
    id: 4,
    name: 'Pink Short sleeve',
    href: '/',
    imageSrc: 'images/shirt4.jpeg',
    imageAlt: "Front of women's Basic Tee in black.",
    price: '$40',
    color: 'Pink',
  },
  // More products...
]

export default function Shirts() {
  const [showPayment, setShowPayment] = useState(false)
  const openPayment = () => {
    setShowPayment(true)
  }
  return (
    <>
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Women Shirts</h2>

        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                <img onClick={openPayment}
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={product.href}  onClick={openPayment}>
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
        {showPayment ? <Payment setShowPayment={setShowPayment} openModal={true}/> : null}
      </div>
    </>
  )
}