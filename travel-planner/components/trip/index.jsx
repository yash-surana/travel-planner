import DayCard from '../days';
import SampleJSON from '../../sample.json';

export default function Trip() {
  const tripData = SampleJSON.data[0];
  const { tripName, destination, days } = tripData;
  return (
    <main className="h-screen p-6 md:px-28 md:py-8">
      <div className="w-full mx-auto flex flex-row justify-between items-center mb-2">
        <h1 className="text-3xl text-red-700">{tripName}</h1>
        <img src="./threeDots.svg" alt="Edit" />
      </div>
      <h3>{destination}</h3>

      {/* Activity Cards */}
      <div className="my-8">
        {days.map((day, id) => {
          return <DayCard dayInfo={day} key={'Day' + id} />;
        })}
      </div>
    </main>
  );
}
