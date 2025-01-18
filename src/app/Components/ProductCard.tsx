import { client } from "@/src/sanity/lib/client";
import imageUrlBuilder from '@sanity/image-url';
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa";

// Initialize the builder for image URL generation
const builder = imageUrlBuilder(client);

function urlFor(source: SanityImageSource) {
  // Sanity image URL builder to get a valid image URL
  return builder.image(source).url();
}

interface Product {
  image: SanityImageSource;  // Updated to expect an image object
  flag: string;
  name: string;
  price: string;
  priceWithoutDiscount: string;
}

interface ProductCardProps {
  item: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ item }) => {
  // Ensure that item.image is passed to the urlFor function correctly
  const imageUrl = urlFor(item?.image).toString(); // Generate the image URL

  return (
    <Link href={"/product"}>
      <div className="flex flex-col items-center justify-center group transition-all duration-200 hover:scale-105 my-2 mx-2">
        {/* Image */}
        <div className="relative">
          {/* Ensure the src is correctly populated */}
          <img
            src={imageUrl}  // Use the generated image URL
            alt={item?.name || 'Product Image'}
            className="md:w-[300px] w-[175px] md:h-[300px] h-[175px] rounded-[8px]"
          />
          {/* Flag Badge */}
          {item?.flag === "new" && (
            <div className="absolute md:top-[20px] top-3 md:left-[20px] left-3 rounded-[4px] md:px-3 px-2 md:py-2 py-0.5 bg-[#01ad5a] text-white font-medium md:text-[13px] text-xs leading-[14.3px]">
              New
            </div>
          )}
          {item?.flag === "sale" && (
            <div className="absolute md:top-[20px] top-3 md:left-[20px] left-3 rounded-[4px] md:px-3 px-2 md:py-2 py-0.5 bg-[#F5813F] text-white font-medium md:text-[13px] text-xs leading-[14.3px]">
              Sale
            </div>
          )}
        </div>

        {/* Product Title, Price, and Cart Icon */}
        <div className="flex items-center justify-between my-2 w-full">
          {/* Title and Price */}
          <div className="flex flex-col items-start justify-start md:gap-y-2 gap-y-1">
            <div className="text-[#272343] group-hover:text-[#007580] font-normal md:text-[16px] text-sm leading-[20.8px] capitalize">
              {item?.name}
            </div>
            <div className="flex items-center justify-center gap-x-1">
              <div className="text-[#272343] font-semibold md:text-[18px] text-sm leading-[19.8px]">
                ${item?.price}
              </div>
              {item?.priceWithoutDiscount !== "$0" && (
                <div className="text-red-400 font-normal md:text-[14px] text-xs leading-[15.4px] line-through">
                  ${item?.priceWithoutDiscount}
                </div>
              )}
            </div>
          </div>

          {/* Cart Icon */}
          <div className="rounded-lg bg-[#F0F2F3] group-hover:bg-[#007580] md:p-3 p-1.5">
            <FaShoppingCart className="text-[#272343] group-hover:text-white md:text-[20px] text-[15px]" />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
