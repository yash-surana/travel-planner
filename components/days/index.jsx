import React from 'react';
import ActivitiesCard from '../activities';

const DayCard = ({ dayInfo }) => {
  const { activities } = dayInfo;
  return (
    <div className="rounded-lg bg-tertiaryBlue p-4 mb-3">
      <h2 className="text-base font-semibold"> Day {dayInfo.day}</h2>
      <div className="mx-1">
        {activities
          ? activities.map((activity, id) => {
              return (
                <ActivitiesCard activity={activity} key={'Activity' + id} />
              );
            })
          : ''}
      </div>

      <div className="flex flex-row justify-start items-center gap-2 cursor-pointer hover:scale-105 transition-transform my-3">
        <img src="./plus.svg" width={24} height={24} alt="Add Activity" />
        <p className="text-base font-semibold">Add an activity</p>
      </div>
    </div>
  );
};

export default DayCard;
