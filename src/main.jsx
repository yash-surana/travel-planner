import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Import CSS
import './index.css';

// Import routes and loaders
import App from './App.jsx';
import Layout from '../components/layout/layout.jsx';
import ErrorPage from './error-page.jsx';
import NewTrip, { newTripAction } from '../components/trip/newTrip.jsx';
import { UserProvider } from '../context/userContext';
import ActivityForm from '../components/activities/activityForm.jsx';
import TripChild, { SingleTriploader } from '../components/trip/tripChild.jsx';
import { AllTripsLoader } from '../components/trip/index.jsx';
import ViewActivity from '../components/activities/viewActivity';
import SignUp, { SignUpAction } from '../components/signUp';

const router = createBrowserRouter([
  {
    path: '/',
    element: <SignUp />,
    errorElement: <ErrorPage />,
    action: SignUpAction,
  },
  {
    path: 'trips',
    element: <App />,
    loader: AllTripsLoader,
  },
  {
    path: 'trips/:tripID',
    element: <TripChild />,
    loader: SingleTriploader,
  },
  {
    path: 'trips/newTrip',
    element: <NewTrip />,
    action: newTripAction,
  },
  {
    path: 'trips/:tripID/:day/newActivity',
    element: <ActivityForm />,
  },
  {
    path: 'trips/:tripID/:day/viewActivity',
    element: <ViewActivity />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Layout>
      <UserProvider>
        <RouterProvider router={router} />
      </UserProvider>
    </Layout>
  </React.StrictMode>
);
