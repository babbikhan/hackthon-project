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
const ProductCard: React.FC<ProductCardProps> = ({ item }) => {
  return (
    <div className=" flex flex-col items-center justify-center group transition-all duration-200 my-2 mx-2">
      {/* image  */}
      <div className="relative">
        <img
          src={item?.image}
          className="md:w-[300px] w-[175px] md:h-[300px] h-[175px] rounded-[8px] "
        />
        {item?.flag == "new" ? (
          <div className="absolute md:top-[20px] top-3 md:left-[20px] left-3 rounded-[4px] md:px-3 px-2 md:py-2 py-0.5 bg-[#01ad5a] text-white font-medium md:text-[13px] text-xs leading-[14.3px]">
            New
          </div>
        ) : item?.flag == "sale" ? (
          <div className="absolute md:top-[20px] top-3 md:left-[20px] left-3 rounded-[4px] md:px-3 px-2 md:py-2 py-0.5 bg-[#F5813F] text-white font-medium md:text-[13px] text-xs leading-[14.3px]">
            Sales
          </div>
        ) : null}
      </div>

      {/* title,price and cart  */}
      <div className="flex items-center justify-between my-2 w-full ">
        {/* title and price  */}
        <div className="flex flex-col items-start justify-start md:gap-y-2 gap-y-1">
          <div className="text-[#272343] group-hover:text-[#007580] font-normal md:text-[16px] text-sm leading-[20.8px] capitalize">
            {item?.name}
          </div>
          <div className="flex items-center justify-center gap-x-1">
            <div className="text-[#272343] font-semibold md:text-[18px] text-sm leading-[19.8px] ">
              {item?.price}
            </div>
            {item?.discount == "$0" ? null : (
              <div className="text-[#9A9CAA] font-normal md:text-[14px] text-xs leading-[15.4px] line-through ">
                {item?.discount}
              </div>
            )}
          </div>
        </div>

        {/* cart  */}
        <div className="rounded-lg bg-[#F0F2F3] group-hover:bg-[#007580] md:p-3 p-1.5 ">
          <FaShoppingCart className="text-[#272343] group-hover:text-white md:text-[20px] text-[15px]" />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
