interface Category {
  image: string;
  name: string;
  count: string;
}

interface CategoryCardProps {
  item: Category;
}

// Define the component with typed props
const CategoryCard: React.FC<CategoryCardProps> = ({ item }) => {
  return (
    <div className=" flex flex-col items-center justify-center group transition-all duration-200 relative">
      {/* image  */}
      <div className="">
        <img src={item?.image} className="w-[414px] h-[400px] rounded-[8px] " />
      </div>

      {/* title and count  */}
      <div className="flex items-center justify-between w-full px-5 py-3 absolute bottom-0 bg-black opacity-70 rounded-b-[8px] ">
        {/* title and price  */}
        <div className="flex flex-col items-start justify-start gap-y-2">
          <div className="text-white font-semibold text-[20px] leading-[22px] capitalize">
            {item?.name}
          </div>
          <div className="text-white font-normal text-[14px] leading-[15.4px] capitalize">
            {item?.count} Products
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
