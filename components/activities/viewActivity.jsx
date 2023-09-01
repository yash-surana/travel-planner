import React from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import isNotEmptyNullOrUndefined from '../../apis/checkPropsValue';

// Import Icons
import InterestedIcon from '/src/images/check-circle.svg';
import NotInterestedIcon from '/src/images/x-circle.svg';
import MaybeIcon from '/src/images/question-circle.svg';
import ArrowLeft from '/src/images/arrow-left.svg';
import LocationIcon from '/src/images/location.svg';
import TimeIcon from '/src/images/clock.svg';

const ViewActivity = () => {
  const locationRouter = useLocation();
  const activity = locationRouter.state?.activity;
  const {
    activityName,
    location,
    description,
    cost,
    startTime,
    endTime,
    votes: { interested, maybe, notInterested },
  } = activity;
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  const { day } = useParams();
  return (
    <main className="divStyle min-h-screen">
      <div className="w-full mx-auto flex flex-row justify-start items-center gap-2 mb-4 ">
        <img
          src={ArrowLeft}
          alt="Go Back"
          width={24}
          height={24}
          className="img"
          onClick={goBack}
        />
        <h1 className="text-2xl text-black font-semibold">{activityName}</h1>
      </div>
      <h3 className="text-lg font-semibold text-black pl-1 mb-6 underline">
        Day {day}
      </h3>
      {/* Location */}
      <div
        className="w-full mx-auto flex flex-row justify-start items-center gap-2 mb-5 "
        id="viewActivityLocation"
      >
        <img
          src={LocationIcon}
          alt="Activity Location"
          width={24}
          height={24}
          className="img"
        />
        <p className="text-[15px] font-semibold">{location}</p>
      </div>
      {/* Time */}
      {isNotEmptyNullOrUndefined(activity.startTime) &&
      isNotEmptyNullOrUndefined(activity.endTime) ? (
        <div className="w-full mx-auto flex flex-row justify-start items-center gap-2 mb-5 ">
          <img
            src={TimeIcon}
            alt="Time"
            width={24}
            height={24}
            className="img"
          />
          <p className="text-[15px] font-semibold">
            {startTime} - {endTime}
          </p>
        </div>
      ) : (
        ''
      )}

      {/* Cost */}
      {isNotEmptyNullOrUndefined(activity.cost) ? (
        <p className="text-[15px] font-semibold mb-5 pl-1">
          <span className="text-secondaryBlue">{cost}</span> per person
        </p>
      ) : null}

      {/* Description */}

      <p className="text-base font-semibold mb-5 pl-1 text-gray75">
        {isNotEmptyNullOrUndefined(description)
          ? description
          : "It's going to be a great day!"}
      </p>

      {/* Voting */}
      <div className="bg-[#E3EEFA] rounded-lg flex flex-row justify-center items-center min-w-[180px] max-w-[200px] p-3 mx-auto">
        {/* Interested */}
        <p className="text-base font-semibold text-black pr-1">{interested}</p>
        <img
          src={InterestedIcon}
          alt="Interested"
          width="24"
          height="24"
          className={`bg-positive md:img rounded-full mr-6`}
        />

        {/* Not interested */}
        <p className="text-base font-semibold text-black pr-1">
          {notInterested}
        </p>
        <img
          src={NotInterestedIcon}
          alt="Not Interested"
          width="24"
          height="24"
          className={`bg-warning md:img rounded-full mr-6`}
        />

        {/* Maybe */}
        <p className="text-base font-semibold text-black pr-1">{maybe}</p>
        <img
          src={MaybeIcon}
          alt="Maybe"
          width="24"
          height="24"
          className={`bg-yellow md:img rounded-full`}
        />
      </div>
      <div className="w-full flex justify-center items-center gap-7 my-8">
        <button
          id="deleteActivity"
          className="secondaryButton active:bg-positive"
        >
          Delete
        </button>
        <button
          id="finalizeActivity"
          className="primaryButton active:bg-positive"
        >
          Finalize
        </button>
      </div>
    </main>
  );
};

export default ViewActivity;
