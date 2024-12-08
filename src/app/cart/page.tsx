import Bag from "../Components/Bag";
import Summary from "../Components/Summary";

const HomePage = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
      <div className="flex flex-wrap items-center justify-between md:gap-x-[150px]">
        <Bag />
        <Summary />
      </div>
    </div>
  );
};

export default HomePage;
