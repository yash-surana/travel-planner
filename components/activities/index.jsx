import React, { useState } from 'react';
import { VOTE_FOR_ACTIVITY } from '../../apis/urls';
import { Link } from 'react-router-dom';
import { useUserContext } from '../../context/userContext';

// Import Icons
import SettingsIcon from '/src/images/more-horizontal.svg';
import InterestedIcon from '/src/images/check-circle.svg';
import NotInterestedIcon from '/src/images/x-circle.svg';
import MaybeIcon from '/src/images/question-circle.svg';

const ActivitiesCard = ({ activity, day }) => {
  const { userID } = useUserContext();
  const [radioClicked, setRadioClicked] = useState(null);
  const activityIDTrimmed = activity.activityID.replace(' ', '');
  const handleRadioClick = async (e) => {
    let radioInput = e.target.value;
    setRadioClicked(radioInput);
    const voteData = {
      userID: userID,
      activityID: activity.activityID,
      voteType: radioInput,
    };
    await fetch(VOTE_FOR_ACTIVITY, {
      method: 'POST',
      body: JSON.stringify(voteData),
      headers: {
        'Content-type': 'application/json',
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log('TRIP POST RESPONSE SENT');
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div className="border-1 border-opacity-30 bg-white my-3 py-2 px-4">
      <Link
        to={`/trips/${activity.tripID}/${day}/viewActivity`}
        state={{ activity: activity }}
      >
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
      </Link>
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
            value="notInterested"
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
                radioClicked === 'notInterested'
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
                radioClicked === 'maybe' ? 'bg-yellow' : 'bg-transparent'
              } md:img rounded-full`}
            />
          </label>
        </div>
      </div>
    </div>
  );
};

export default ActivitiesCard;
