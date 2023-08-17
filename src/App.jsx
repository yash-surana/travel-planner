// import ActivityData from '../components/activities/activityForm';
import TripHome from '../components/trip';
// import NewTrip from '../components/trip/newTrip';
// import TripChild from '../components/trip/tripChild';

export default function App() {
  // const activityData = {
  //   tripID: '065806b3-7177-476a-a09b-0575490432c8',
  //   dayID: '1e8470a9-cc01-452f-8b7c-d732cc45524d',
  // };
  return (
    <div className="m-0 p-0 h-screen w-full">
      {/* <NewTrip /> */}
      <TripHome />
      {/* <TripChild /> */}
      {/* <ActivityData day={1} activityData={activityData} /> */}
    </div>
  );
}
