import React from 'react';
import { Link } from 'react-router-dom';
import getFormattedDate from '../../utils/getFormattedDate';

const TripCards = ({ tripData }) => {
  const startDate = getFormattedDate(tripData.startDate);
  return (
    <div className="rounded-lg bg-tertiaryBlue p-4 mb-3">
      {/* <a href={`trips/${tripData.tripID}`}> */}
      <div className="w-full mx-auto flex flex-row justify-between items-start mb-2">
        <Link to={`trips/${tripData.tripID}`} key={tripData.tripID}>
          <div>
            <h3 className="text-[15px] font-semibold text-black">
              {tripData.tripName}
            </h3>
            <p className="text-xs font-normal text-black ">{startDate}</p>
          </div>
        </Link>

        <img
          src="./more-horizontal.svg"
          alt="Trip Settings"
          width={24}
          height={24}
          className="img"
        />
      </div>
      {/* </a> */}
    </div>
  );
};

export default TripCards;
