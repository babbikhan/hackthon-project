import { client } from "@/src/sanity/lib/client";
import imageUrlBuilder from '@sanity/image-url';
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
// Initialize the builder for image URL generation
const builder = imageUrlBuilder(client);

function urlFor(source: SanityImageSource) {
  // Sanity image URL builder to get a valid image URL
  return builder.image(source).url();
}


interface Category {
  image: SanityImageSource;
  title: string;
  products: string;
}

interface CategoryCardProps {
  item: Category;
}

// Define the component with typed props
const CategoryCard: React.FC<CategoryCardProps> = ({ item }) => {
  const imageUrl = urlFor(item?.image).toString(); // Generate the image URL

  return (
    <div className=" flex flex-col items-center justify-center group transition-all duration-200 hover:scale-105 relative">
      {/* image  */}
      <div className="">
        <img src={imageUrl} className="w-[414px] h-[400px] rounded-[8px] " />
      </div>

      {/* title and count  */}
      <div className="flex items-center justify-between w-full px-5 py-3 absolute bottom-0 bg-black opacity-70 rounded-b-[8px] ">
        {/* title and price  */}
        <div className="flex flex-col items-start justify-start gap-y-2">
          <div className="text-white font-semibold text-[20px] leading-[22px] capitalize">
            {item?.title}
          </div>
          <div className="text-white font-normal text-[14px] leading-[15.4px] capitalize">
            {item?.products} Products
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
