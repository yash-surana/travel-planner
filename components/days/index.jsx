import React from 'react';
import ActivitiesCard from '../activities';

// Import Icons
import AddIcon from '/plus.svg';
import { Link } from 'react-router-dom';

const DayCard = ({ dayInfo }) => {
  const { activities } = dayInfo;
  return (
    <div className="rounded-lg bg-tertiaryBlue p-4 mb-3">
      <h2 className="text-base font-semibold"> Day {dayInfo.day}</h2>
      <div className="mx-1">
        {activities
          ? activities.map((activity, id) => {
              return (
                <ActivitiesCard
                  activity={activity}
                  key={'Activity' + id}
                  day={dayInfo.day}
                />
              );
            })
          : ''}
      </div>

      <Link to={`/trips/${dayInfo.tripID}/${dayInfo.day}/newActivity`}>
        <div className="flex flex-row justify-start items-center gap-2 cursor-pointer hover:-translate-y-1 hover:underline transition-transform my-3 text-[#111E96]">
          <img src={AddIcon} width={24} height={24} alt="Add Activity" />
          <p className="text-base font-semibold">Add an activity</p>
        </div>
      </Link>
    </div>
  );
};

export default DayCard;
