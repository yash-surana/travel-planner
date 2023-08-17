import React, { useState, useEffect } from 'react';
import TripCards from './cards';
import { Await, Link, useLoaderData } from 'react-router-dom';

import AddIcon from '/plus.svg';

export async function AllTripsLoader() {
  const response = await fetch('https://colab-mvp.onrender.com/trip/getTrips', {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    // body: JSON.stringify({
    //   tripData: '065806b3-7177-476a-a09b-0575490432c8',
    // }),
  });

  if (!response.ok) {
    throw new Error('Data could not be fetched!');
  } else {
    console.log('Data received');
    return response;
  }
}
const TripHome = () => {
  // const [tripsData, setTripsData] = useState({});
  const tripsData = useLoaderData();
  // console.log(useLoaderData(), tripsData, 'TRIP DATA');
  // const fetchAllTripData = async () => {
  //   const response = await fetch(
  //     'https://colab-mvp.onrender.com/trip/getTrips',
  //     {
  //       method: 'GET',
  //       headers: {
  //         Accept: 'application/json',
  //         'Content-Type': 'application/json',
  //       },
  //       // body: JSON.stringify({
  //       //   tripData: '065806b3-7177-476a-a09b-0575490432c8',
  //       // }),
  //     }
  //   );

  //   if (!response.ok) {
  //     throw new Error('Data could not be fetched!');
  //   } else {
  //     console.log('Data received');
  //     return response.json();
  //   }
  // };

  // useEffect(() => {
  //   fetchAllTripData()
  //     .then((res) => setTripsData(res))
  //     .catch((e) => {
  //       console.log(e.message);
  //     });
  // }, []);

  // const renderTripCards = () => {
  //   tripsData.map((trip) => {
  //     return <TripCards tripData={trip} key={trip.tripID} />;
  //   });
  // };
  console.log(tripsData);
  return (
    <React.Suspense fallback={<p>Loading trip data...</p>}>
      <Await
        resolve={tripsData.result}
        errorElement={<p>Error loading data. Please refresh.</p>}
      >
        {() => (
          <main className="divStyle">
            <h1 className="text-2xl text-black font-semibold mb-3.5">Trips</h1>
            {/* Trip Cards */}
            {tripsData?.map((trip) => {
              return <TripCards tripData={trip} key={trip.tripID} />;
            })}
            <Link to={`/trips/newTrip`}>
              <div className="flex flex-row justify-start items-center gap-2 cursor-pointer hover:-translate-y-1 hover:underline transition-transform my-3 text-[#111E96]">
                <img src={AddIcon} width={24} height={24} alt="Add Trip" />
                <p className="text-base font-semibold">Add a trip</p>
              </div>
            </Link>
          </main>
        )}
      </Await>
    </React.Suspense>
  );
};

export default TripHome;
