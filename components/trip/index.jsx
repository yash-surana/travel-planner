import React from 'react';
import { Await, Link, useLoaderData } from 'react-router-dom';

import { GET_ALL_TRIPS } from '../../apis/urls';
import { useUserContext } from '../../context/userContext';

import TripCards from './cards';
import AddIcon from '/src/images/plus.svg';

export async function AllTripsLoader() {
  const response = await fetch(GET_ALL_TRIPS, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Response('', {
      status: 404,
      statusText: 'Not Found',
    });
  } else {
    console.log('Data received');
    return response;
  }
}
const TripHome = () => {
  const tripsData = useLoaderData();
  const { name } = useUserContext();

  return (
    <main className="divStyle min-h-screen">
      <h1 className="text-2xl text-primaryBlue font-semibold mb-3.5">
        Hi {name}
      </h1>
      <h2 className="text-xl text-black font-semibold mb-3.5">Trips</h2>
      <React.Suspense fallback={<p>Loading trip data...</p>}>
        <Await
          resolve={tripsData}
          errorElement={<p>Error loading data. Please refresh.</p>}
        >
          {/* Trip Cards */}
          {tripsData?.map((trip) => {
            return <TripCards tripData={trip} key={trip.tripID} />;
          })}
        </Await>
      </React.Suspense>
      <Link to={`/trips/newTrip`}>
        <div className="flex flex-row justify-start items-center gap-2 cursor-pointer hover:-translate-y-1 hover:underline transition-transform my-3 text-[#111E96]">
          <img src={AddIcon} width={24} height={24} alt="Add Trip" />
          <p className="text-base font-semibold">Add a trip</p>
        </div>
      </Link>
    </main>
  );
};

export default TripHome;
