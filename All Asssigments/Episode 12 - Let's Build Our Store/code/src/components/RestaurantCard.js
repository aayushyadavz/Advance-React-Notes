import { CDN_URL } from '../utils/constants';
import { FiClock } from 'react-icons/fi';
import { AiOutlineStar } from 'react-icons/ai';
import { useContext } from 'react';
import UserContext from '../utils/UserContext';

const RestaurantCard = (props) => {
  const { resData } = props;
  const { loggedInUser } = useContext(UserContext);

  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
    deliveryTime,
  } = resData?.data;

  return (
    <div className="m-4 p-4 w-[250px] bg-gray-100 rounded-lg hover:shadow-md hover:bg-gray-200 transition-all ">
      <div>
        <img
          className="w-[250px] h-[150px] rounded-lg"
          src={CDN_URL + cloudinaryImageId}
          alt="Biryani"
        />
      </div>

      <div>
        <h3 className="py-4 text-lg font-bold">{name}</h3>
        <hr />
        <em>{cuisines.join(', ')}</em>
        <h4 className="avg-rating">
          <span className="icons">
            <AiOutlineStar />
          </span>
          <span>{avgRating} stars</span>
        </h4>
        <h4 className="item-price">
          <span style={{ marginLeft: '4px' }}>₹</span>
          <span>{costForTwo / 100} FOR TWO</span>
        </h4>
        <h4 className="time">
          <span className="icons">
            <FiClock />
          </span>
          <span>{deliveryTime} minutes</span>
        </h4>
        <h4>User: {loggedInUser}</h4>
      </div>
    </div>
  );
};

// * Higher Order Component

// * input - RestaurantCard => RestaurantCardPromoted

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute p-2 mb-6 ml-4 text-white bg-black rounded-lg">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
