import Image from 'next/image';
export default function MenuItem() {
  return (
    <div className="bg-gray-200 p-4 rounded-lg text-center group hover:bg-white hover:shadow-md hover:shadow-black/25 transition-all ">
      <div className="text-center">
        <Image
          src={'/pizza.png'}
          alt={'pizza'}
          className="max-h-24 max-h-auto block mx-auto "
          width={109}
          height={189}
        />
      </div>
      <h4 className="font-semibold text-xl my-3">Pepperoni Pizza</h4>
      <p className="text-gray-500 text-sm">
        Lorem ipsum dolor sit amet, consectetur, adipisicing elit
      </p>
      <button className="mt-4 bg-primary text-white rounded-full px-8 py-2">
        Add to cart $12
      </button>
    </div>
  );
}
