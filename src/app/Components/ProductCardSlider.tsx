import { FaShoppingCart } from "react-icons/fa";

interface Product {
  image: string;
  flag: string;
  name: string;
  price: string;
  discount: string;
}

interface ProductCardProps {
  item: Product;
}

// Define the component with typed props
const ProductCardSlider: React.FC<ProductCardProps> = ({ item }) => {
  return (
    <div className=" flex flex-col items-center justify-center group transition-all duration-200 my-2">
      {/* image  */}
      <div className="relative">
        <img src={item?.image} className="w-[230px] h-[230px] rounded-[8px] " />
        {/* {item?.flag == "new" ? (
          <div className="absolute top-[20px] left-[20px] rounded-[4px] px-3 py-2 bg-[#01ad5a] text-white font-medium text-[13px] leading-[14.3px]">
            New
          </div>
        ) : item?.flag == "sale" ? (
          <div className="absolute top-[20px] left-[20px] rounded-[4px] px-3 py-2 bg-[#F5813F] text-white font-medium text-[13px] leading-[14.3px]">
            Sales
          </div>
        ) : null} */}
      </div>

      {/* title,price and cart  */}
      <div className="flex items-center justify-between w-full my-2 ">
        {/* title and price  */}
        <div className="flex flex-col items-start justify-start gap-y-2">
          <div className="text-[#272343] group-hover:text-[#007580] font-normal text-[14px] leading-[20.8px] capitalize">
            {item?.name}
          </div>
        </div>

        {/* cart  */}
        <div className="">
          <div className="text-[#272343] group-hover:text-[#007580] font-semibold text-[12px] leading-[19.8px] ">
            {item?.price}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCardSlider;
