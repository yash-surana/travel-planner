import React from 'react';
import ActivitiesCard from '../activities';

const DayCard = ({ dayInfo }) => {
  const { activities } = dayInfo;
  return (
    <div className="rounded-lg border-2 border-black py-2 px-4 mb-8">
      <h2 className="text-2xl font-medium"> Day {dayInfo.dayID}</h2>
      <div className="my-4 mx-2">
        {activities.map((activity, id) => {
          return <ActivitiesCard activity={activity} key={'Activity' + id} />;
        })}
      </div>

      <div className="flex flex-row justify-start items-center gap-2">
        <div id="addActivityIcon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 448 512"
          >
            <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
          </svg>
        </div>
        <p>Add an activity</p>
      </div>
    </div>
  );
};

export default DayCard;
