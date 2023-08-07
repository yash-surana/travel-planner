import React, { useEffect, useState } from 'react';

const ActivitiesCard = ({ activity }) => {
  const [radioClicked, setRadioClicked] = useState();
  const handleRadioClick = (e) => {
    console.log(radioClicked);
    setRadioClicked(e.target.value);
  };
  return (
    <div className="border-1 border-opacity-30 bg-white my-3 py-2 px-4">
      <div className="flex flex-row justify-between items-center pb-4 ">
        <h3 className="text-[15px] font-normal text-black">
          {activity.activityName}
        </h3>
        <img
          src="./more-horizontal.svg"
          alt="Edit"
          width={24}
          height={24}
          className="img"
        />
      </div>
      <div
        id="votes"
        class="w-full flex flex-row justify-start gap-3 items-center"
      >
        <div>
          <input
            type="radio"
            name="vote"
            id="interested"
            value="interested"
            className="hidden"
            onChange={(e) => handleRadioClick(e)}
          />
          <label for="interested">
            <img
              src="./check-circle.svg"
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
            name="vote"
            id="not-interested"
            value="not-interested"
            className="hidden"
            onChange={(e) => handleRadioClick(e)}
          />
          <label for="not-interested">
            <img
              src="./x-circle.svg"
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
            name="vote"
            id="maybe"
            value="maybe"
            className="hidden"
            onChange={(e) => handleRadioClick(e)}
          />
          <label for="maybe">
            <img
              src="./question-circle.svg"
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
