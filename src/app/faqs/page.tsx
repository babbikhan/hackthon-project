import { FaPlus } from "react-icons/fa";
import { GoPlus } from "react-icons/go";

const FAQ = () => {
  const faqs = [
    {
      id: 1,
      question: "What types of chairs do you offer?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem",
    },
    {
      id: 2,
      question: "How can we get in touch with you?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem",
    },
    {
      id: 3,
      question: "Do your chairs come with a warranty?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem",
    },
    {
      id: 4,
      question: "What will be delivered? And When?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem",
    },
    {
      id: 5,
      question: "Can I try a chair before purchasing?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem",
    },
    {
      id: 6,
      question: "How do I clean and maintain my Comforty chair?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?",
    },
  ];

  return (
    <div className="max-w-screen-xl mx-auto md:py-12 py-6">
      {/* Title Section */}
      <h2 className="md:text-4xl text-3xl font-bold py-5 text-center text-[#333333] ">
        Questions Looks Here
      </h2>
      <p className="text-center text-gray-600 mb-[4rem] text-sm mx-2">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the
      </p>

      {/* FAQ Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-5 md:mx-0 mx-5">
        {faqs.map((faq) => (
          <div
            key={faq.id}
            className="md:w-[640px] md:h-[170px] p-6 bg-[#F7F7F7] rounded-lg relative"
          >
            <div className="flex justify-between items-start">
              <h3 className="text-lg font-bold font-inter text-[#272343]">
                {faq.question}
              </h3>
              <button className="text-[#000000] text-lg focus:outline-none">
                <GoPlus />
              </button>
            </div>
            <p className="text-sm text-gray-600 mt-4">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
