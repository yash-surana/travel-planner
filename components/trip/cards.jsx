import React from 'react';
import { Link } from 'react-router-dom';
import getFormattedDate from '../../utils/getFormattedDate';

// Import Icons
import TripSettingsIcon from '/src/images/more-horizontal.svg';

const TripCards = ({ tripData }) => {
  const startDate = getFormattedDate(tripData.startDate);
  return (
    <div className="rounded-lg bg-tertiaryBlue p-4 mb-3">
      <div className="w-full mx-auto flex flex-row justify-between items-start mb-2">
        <Link to={`${tripData.tripID}`} key={tripData.tripID}>
          <div>
            <h3 className="text-[15px] font-semibold text-black">
              {tripData.tripName}
            </h3>
            <p className="text-xs font-normal text-black ">{startDate}</p>
          </div>
        </Link>

        <img
          src={TripSettingsIcon}
          alt="Trip Settings"
          width={24}
          height={24}
          className="img"
          title="Coming soon"
        />
      </div>
    </div>
  );
};

export default TripCards;
