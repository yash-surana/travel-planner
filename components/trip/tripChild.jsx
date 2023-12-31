import React from 'react';
import { GET_ALL_TRIPS } from '../../apis/urls';
import { useLoaderData, Await, redirect } from 'react-router-dom';

// Import Icons
import SettingsIcon from '/src/images/more-horizontal.svg';
import AddUserIcon from '/src/images/add-user.svg';

import DayCard from '../days';

export async function SingleTriploader({ params }) {
  const response = await fetch(GET_ALL_TRIPS, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });
  const responseJSON = await response.json();
  const trip = responseJSON.find((trip) => trip.tripID == params.tripID);
  return trip != undefined && trip != [] ? trip : redirect('/error-page/');
}

export default function TripChild() {
  const tripData = useLoaderData();
  const { startDate, endDate } = tripData;
  const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
  let tripDuration =
    Math.abs((new Date(endDate) - new Date(startDate)) / oneDay) + 1;

  const renderDayCards = (tripDayPassed) => {
    const tripDay = parseInt(tripDayPassed);
    if (tripData.days.length > 0 && tripData.days.length >= tripDay) {
      return (
        <DayCard
          dayInfo={tripData.days[tripDay - 1]}
          key={'Day' + (tripDay - 1)}
        />
      );
    } else {
      return (
        <DayCard
          tripDay={tripDay}
          tripID={tripData.tripID}
          key={'Day' + (tripDay - 1)}
        />
      );
    }
  };

  return (
    <React.Suspense fallback={<p>Loading trip data...</p>}>
      <Await
        resolve={tripData.result}
        errorElement={<p>Error loading data. Please refresh.</p>}
      >
        {() => (
          <main className="divStyle">
            <section className="shadow-lg p-6">
              <div className="w-full mx-auto flex flex-row justify-between items-center mb-2">
                <h1 className="text-2xl text-black font-semibold">
                  {tripData.tripName}
                </h1>
                <img
                  src={SettingsIcon}
                  alt="Trip Settings"
                  width={24}
                  height={24}
                  className="img"
                />
              </div>
              <div className="w-full mx-auto flex flex-row justify-between items-center">
                <h3 className="w-[50%] text-[15px] font-normal text-black ">
                  {tripData.destination}
                </h3>
                <span
                  title="Copy invite link"
                  className="flex gap-5 font-semibold text-primaryBlue items-start justify-end cursor-pointer"
                  onClick={() => {
                    window
                      ? (navigator.clipboard.writeText(
                          'https://wander-us.vercel.app/'
                        ),
                        alert('Link has been copied! Go ahead and share it!'))
                      : null;
                  }}
                >
                  Copy invite link
                  <img
                    src={AddUserIcon}
                    alt="Trip Settings"
                    width={24}
                    height={24}
                    className="img"
                    title="Copy invite link"
                  />
                </span>
              </div>
            </section>

            {/* Day Cards */}
            <div className="my-5 mx-3 md:max-w-[80%] md:mx-auto">
              {[...Array(tripDuration)].map((day, id) => {
                return renderDayCards(id + 1);
              })}
            </div>
          </main>
        )}
      </Await>
    </React.Suspense>
  );
}
