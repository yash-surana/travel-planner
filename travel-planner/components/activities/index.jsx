import React from 'react';

const ActivitiesCard = ({ activity }) => {
  return (
    <div className="border-2 border-black border-opacity-30 rounded-md my-2 py-2 px-4">
      <div className="flex flex-row justify-between items-center pb-4 ">
        <h3 className="font-semibold">{activity.activityName}</h3>
        <img src="./threeDots.svg" alt="Edit" />
      </div>
      <div
        id="votes"
        className=" w-full flex flex-row justify-start gap-4 items-center"
      >
        <div>
          <img src="./interested.svg" alt="Interested" width={24} height={24} />
        </div>
        <div>
          <img
            src="./notInterested.svg"
            alt="Not Interested"
            width={24}
            height={24}
          />
        </div>
        <div>
          <img src="./maybe.svg" alt="Maybe" width={24} height={24} />
        </div>
      </div>
    </div>
  );
};

export default ActivitiesCard;
