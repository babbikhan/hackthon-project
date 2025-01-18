import CategoryCard from "./CategoryCard";
import { client } from "../../sanity/lib/client";


const  Categories = async () =>  {
    let categories = await client.fetch('*[_type == "categories"]')
    console.log(categories)
  
  // const categories = [
  //   {
  //     image: "/wingchair.png",
  //     name: "Wing Chair",
  //     count: "3,584",
  //   },
  //   {
  //     image: "/woodenchair.png",
  //     name: "Wooden Chair",
  //     count: "157",
  //   },
  //   {
  //     image: "/deskchair.png",
  //     name: "Desk Chair",
  //     count: "154",
  //   },
  // ];
  return (
    <section className="max-w-screen-xl mx-auto my-16">
      {/* heading  */}
      <div className=" md:mx-0 mx-2 font-semibold md:text-[32px] text-2xl leading-[35.2px] text-left  text-[#272343]">
        Top Categories
      </div>
      {/* categories  */}
      <div className="flex flex-wrap items-center justify-between my-5 md:gap-0 gap-4 md:mx-0 mx-5">
        {categories?.map((category: any) => (
          <CategoryCard item={category} />
        ))}
      </div>
    </section>
  );
};

export default Categories;
