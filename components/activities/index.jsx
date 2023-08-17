import React, { useEffect, useState } from 'react';
import SettingsIcon from '/more-horizontal.svg';
import InterestedIcon from '/check-circle.svg';
import NotInterestedIcon from '/x-circle.svg';
import MaybeIcon from '/question-circle.svg';

const ActivitiesCard = ({ activity, day }) => {
  const [radioClicked, setRadioClicked] = useState();
  const activityIDTrimmed = activity.activityID.replace(' ', '');
  const handleRadioClick = (e) => {
    console.log(radioClicked, activityIDTrimmed, 'Clicked');
    setRadioClicked(e.target.value);
  };

  // console.log(day, 'DAYS');
  return (
    <div className="border-1 border-opacity-30 bg-white my-3 py-2 px-4">
      <div className="flex flex-row justify-between items-center pb-4 ">
        <h3 className="text-[15px] font-normal text-black">
          {activity.activityName}
        </h3>
        <img
          src={SettingsIcon}
          alt="Edit"
          width={24}
          height={24}
          className="img"
        />
      </div>
      <div
        id="votes"
        className="w-full flex flex-row justify-start gap-3 items-center"
      >
        <div>
          <input
            type="radio"
            name={`voteFor${activityIDTrimmed}`}
            id={`interestedFor${activityIDTrimmed}`}
            value="interested"
            className="hidden"
            onChange={(e) => handleRadioClick(e)}
          />
          <label htmlFor={`interestedFor${activityIDTrimmed}`}>
            <img
              src={InterestedIcon}
              alt="Interested"
              width="24"
              height="24"
              className={`${
                radioClicked === 'interested' ? 'bg-positive' : 'bg-transparent'
              } md:img rounded-full`}
            />
          </label>
        </div>
        <div>
          <input
            type="radio"
            name={`voteFor${activityIDTrimmed}`}
            id={`not-interestedFor${activityIDTrimmed}`}
            value="not-interested"
            className="hidden"
            onChange={(e) => handleRadioClick(e)}
          />
          <label htmlFor={`not-interestedFor${activityIDTrimmed}`}>
            <img
              src={NotInterestedIcon}
              alt="Not Interested"
              width="24"
              height="24"
              className={`${
                radioClicked === 'not-interested'
                  ? 'bg-warning'
                  : 'bg-transparent'
              } md:img rounded-full`}
            />
          </label>
        </div>
        <div>
          <input
            type="radio"
            name={`voteFor${activityIDTrimmed}`}
            id={`maybeFor${activityIDTrimmed}`}
            value="maybe"
            className="hidden"
            onChange={(e) => handleRadioClick(e)}
          />
          <label htmlFor={`maybeFor${activityIDTrimmed}`}>
            <img
              src={MaybeIcon}
              alt="Maybe"
              width="24"
              height="24"
              className={`${
                radioClicked === 'maybe' ? 'bg-gray40' : 'bg-transparent'
              } md:img rounded-full`}
            />
          </label>
        </div>
      </div>
    </div>
  );
};

export default ActivitiesCard;