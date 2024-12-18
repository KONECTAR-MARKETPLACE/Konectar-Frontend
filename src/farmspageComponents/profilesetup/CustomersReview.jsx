import Helen from "../../assets/images/helenAdams.png";
import Benjy from "../../assets/images/BenjyTommy.png";
import Yarinya from "../../assets/images/yarinyaJigga.png";
import PropTypes from "prop-types";
import {FaStar} from "../../icon"

const customers = [
  {
    image: Helen,
    name: "Helen Adams",
    role: "Chef, Kingston Hotels",
    desc: "Porem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est",
    stars: 4
  },
  {
    image: Benjy,
    name: "Benjy Tommy",
    role: "Culinary Master",
    desc: "Porem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est  Etiam eu turpis molestie, dictum est",
    stars: 5
  },
  {
    image: Yarinya,
    name: "Yarinya Jigga",
    role: "Housewife",
    desc: "Porem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est",
    stars: 3
  },
];

function CustomersReview() {
  return (
    <div>
      <ul className="grid grid-cols-1 gap-x-4 md:grid-cols-3 items-center px-[4.5rem] mb-10">
        {customers.map((customer, index) => (
          <Customer key={index} customer={customer} />
        ))}
      </ul>
    </div>
  );
}

function Customer({ customer }) {
    // Function to render stars based on rating
  const renderStars = (starCount) => {
    return [...Array(starCount)].map((_, index) => (
      <FaStar key={index} className="text-yellow-500 inline-block mr-1" />
    ));
  };

  return (
    <li className="flex text-sm flex-col gap-y-4 gap-x-4 px-3 py-5 bg-neutral10 rounded-2xl  ">
      <div className="flex gap-2">
        <img src={customer.image} alt={customer.name} className="w-10 h-10" />
        <span className="flex flex-col">
            <span className="text-primary">{customer.name}</span>
            <span className="text-xs">{customer.role}</span>
        </span>
      </div>
      <span className="w-[18rem]">{customer.desc}</span>

      <div className="flex">
        {/* Render stars dynamically */}
        {renderStars(customer.stars)}
      </div>
    </li>
  );
}

Customer.propTypes = {
  customer: PropTypes.object,
};
export default CustomersReview;
