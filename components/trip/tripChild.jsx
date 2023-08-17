import React from 'react';
import DayCard from '../days';
// import SampleJSON from '../../sample.json';
// import { useState, useEffect } from 'react';
import { useLoaderData, Await } from 'react-router-dom';
// import { useParams } from 'react-router-dom';

// Import Icons
import SettingsIcon from '/more-horizontal.svg';
import AddUserIcon from '/add-user.svg';

export async function SingleTriploader({ params }) {
  const response = await fetch('https://colab-mvp.onrender.com/trip/getTrips', {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });
  const responseJSON = await response.json();
  const trip = responseJSON.find((trip) => trip.tripID == params.tripID);
  return trip;
}

export default function TripChild() {
  const tripData = useLoaderData();

  // const { tripID } = useParams();
  // console.log(tripID, 'trippID');
  // const [tripData, setTripData] = useState({});

  // const fetchTripData = async () => {
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
  //     throw new Error('Data coud not be fetched!');
  //   } else {
  //     return response.json();
  //   }
  //   // console.log(response, 'alltrips');
  // };

  // useEffect(() => {
  //   fetchTripData()
  //     .then((res) => {
  //       let trip = res.find((trip) => trip.tripID == tripID);
  //       setTripData(trip);
  //     })
  //     .catch((e) => {
  //       console.log(e.message);
  //     });
  // }, []);
  // console.log(tripData, 'ajnjcs');
  // console.log(tripData.find((trip) => (tripData.tripID = )));
  // const tripData = SampleJSON.data[0];
  // const { tripName, destination, days } = tripData;
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
                <h3 className="w-[80%] text-[15px] font-normal text-black ">
                  {tripData.destination}
                </h3>
                <img
                  src={AddUserIcon}
                  alt="Trip Settings"
                  width={24}
                  height={24}
                  className="img"
                />
              </div>
            </section>

            {/* Day Cards */}
            <div className="my-5 mx-3 md:max-w-[80%] md:mx-auto">
              {tripData.days?.map((day, id) => {
                return <DayCard dayInfo={day} key={'Day' + id} />;
              })}
            </div>
          </main>
        )}
      </Await>
    </React.Suspense>
  );
}
