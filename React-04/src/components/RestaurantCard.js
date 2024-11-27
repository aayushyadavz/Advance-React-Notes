import { CDN_URL } from "../utils/constants"; // named imports

const RestaurantCard = (props) => {
  // Here, props is an object in itself
  // De-Structuring of Object
  const { resData } = props;
  const {
    name,
    cloudinaryImageId,
    cuisines,
    avgRating,
    sla: { deliveryTime },
  } = resData?.info; // optional chaining operator

  return (
    <div data-testid="resCard" className="w-52 p-1">
      <img
        className="h-36 w-full object-cover rounded-3xl shadow-md"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <div className="p-3">
        <h3 className="text-xl font-bold overflow-ellipsis overflow-hidden whitespace-nowrap w-full">
          {name}
        </h3>
        <h4 className="text-lg font-medium">
          {avgRating} Stars{" "}
          <span className="font-semibold">• {deliveryTime} mins</span>
        </h4>
        <h4
          className="text-lg leading-tight text-gray-500 overflow-hidden overflow-ellipsis"
          style={{
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
          }}
        >
          {cuisines.join(", ")}
        </h4>
      </div>
    </div>
  );
};

// Higher Order Component
const withPriceLabel = (RestaurantCard) => {
  // Takes RestaurantCard component as input

  return (props) => {
    // New component returning
    const { resData } = props;
    const { aggregatedDiscountInfoV3 } = resData?.info;

    return (
      <div>
        <label className="absolute text-white font-extrabold bg-orange-400 bg-opacity-60 p-1 rounded-xl mt-3 ml-3">
          {aggregatedDiscountInfoV3.header} {aggregatedDiscountInfoV3.subHeader}
        </label>
        <RestaurantCard {...props} />{" "}
        {/* Forward all the props needed to RestaurantCard */}
      </div>
    );
  };
};

export default RestaurantCard;
export { withPriceLabel };

// Notes

// Higher Order Component

// A higher-order component is a function that takes a component as input and returns a new component. Essentially, a higher-order component enhances the input component by adding extra features, and then returns the modified component.
