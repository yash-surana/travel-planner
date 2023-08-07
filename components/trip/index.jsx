import DayCard from '../days';
import SampleJSON from '../../sample.json';
import { useState, useEffect } from 'react';

export default function Trip() {
  const [tripData, setTripData] = useState({});

  const fetchTripData = async () => {
    const response = await fetch(
      'https://colab-mvp.onrender.com/trip/getTrips',
      {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        // body: JSON.stringify({
        //   tripData: '065806b3-7177-476a-a09b-0575490432c8',
        // }),
      }
    );

    if (!response.ok) {
      throw new Error('Data coud not be fetched!');
    } else {
      return response.json();
    }
  };

  useEffect(() => {
    fetchTripData()
      .then((res) => setTripData(res[0]))
      .catch((e) => {
        console.log(e.message);
      });
  }, []);

  // const tripData = SampleJSON.data[0];
  // const { tripName, destination, days } = tripData;
  return (
    <main className="h-full md:w-[50vw] md:mx-auto bg-white md:my-6 md:border-opacity-40 md:rounded-lg md:p-4 md:border-2 md:border-black">
      <section className="shadow-lg p-6">
        <div className="w-full mx-auto flex flex-row justify-between items-center mb-2">
          <h1 className="text-2xl text-black font-semibold">
            {tripData.tripName}
          </h1>
          <img
            src="./more-horizontal.svg"
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
            src="./add-user.svg"
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
  );
}
