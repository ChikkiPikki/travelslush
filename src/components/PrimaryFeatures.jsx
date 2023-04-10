const products = [
  {
    id: 1,
    name: 'Maldives',
    href: '#',
    price: 'Starts from ₹50,000',
    description: 'Spend 5 nights and 5 days at one of the most beautiful vacation destination.',
    options: '5 days',
    imageSrc: 'https://images.pexels.com/photos/4825701/pexels-photo-4825701.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    imageAlt: 'Eight shirts arranged on table in black, olive, grey, blue, white, red, mustard, and green.',
  },
  {
    id: 2,
    name: 'Goa',
    href: '#',
    price: 'Starts from ₹15,000',
    description: 'A 4 days and 4 nights package for the pleasant state of Goa',
    options: '4 days',
    imageSrc: 'https://images.pexels.com/photos/872831/pexels-photo-872831.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    imageAlt: 'Front of plain black t-shirt.',
  },
  {
    id: 3,
    name: 'Himachal',
    href: '#',
    price: 'Starts from ₹15,000',
    description: 'Fresh yourself up with a little heem.',
    options: '4 days',
    imageSrc: 'https://images.pexels.com/photos/1658967/pexels-photo-1658967.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    imageAlt: 'Front of plain black t-shirt.',
  },
  {
    id: 4,
    name: 'Maldives',
    href: '#',
    price: 'Starts from ₹50,000',
    description: 'Spend 5 nights and 5 days at one of the most beautiful vacation destination.',
    options: '5 days',
    imageSrc: 'https://images.pexels.com/photos/4825701/pexels-photo-4825701.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    imageAlt: 'Eight shirts arranged on table in black, olive, grey, blue, white, red, mustard, and green.',
  },
  {
    id: 5,
    name: 'Goa',
    href: '#',
    price: 'Starts from ₹15,000',
    description: 'A 4 days and 4 nights package for the pleasant state of Goa',
    options: '4 days',
    imageSrc: 'https://images.pexels.com/photos/872831/pexels-photo-872831.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    imageAlt: 'Front of plain black t-shirt.',
  },
  {
    id: 6,
    name: 'Himachal',
    href: '#',
    price: 'Starts from ₹15,000',
    description: 'Fresh yourself up with a little heem.',
    options: '4 days',
    imageSrc: 'https://images.pexels.com/photos/1658967/pexels-photo-1658967.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    imageAlt: 'Front of plain black t-shirt.',
  },
  // More products...
]

export function PrimaryFeatures() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8">
          <div
            key={0}
            className="p-5 group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white"
          >
            <h1 className="text-4xl font-bold tracking-tight mb-2">Browse from our available packages</h1>
            <p className="text-xl">From Maldives to Himachal, explore all plans across the globe!</p>
          </div>
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white"
            >
              <div className="aspect-h-4 aspect-w-3 bg-gray-200 sm:aspect-none group-hover:opacity-75 sm:h-96">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center sm:h-full sm:w-full"
                />
              </div>
              <div className="flex flex-1 flex-col space-y-2 p-4">
                <h3 className="text-sm font-medium text-gray-900">
                  <a href={product.href}>
                    <span aria-hidden="true" className="absolute inset-0" />
                    {product.name}
                  </a>
                </h3>
                <p className="text-sm text-gray-500">{product.description}</p>
                <div className="flex flex-1 flex-col justify-end">
                  <p className="text-sm italic text-gray-500">{product.options}</p>
                  <p className="text-base font-medium text-gray-900">{product.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
