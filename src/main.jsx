import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import Layout from '../components/layout/layout.jsx';
import ErrorPage from './error-page.jsx';
import TripChild, { SingleTriploader } from '../components/trip/tripChild.jsx';
import { AllTripsLoader } from '../components/trip/index.jsx';
import ActivityForm from '../components/activities/activityForm.jsx';
import NewTrip from '../components/trip/newTrip.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
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
  },
  {
    path: 'trips/:tripID/:day/newActivity',
    element: <ActivityForm />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Layout>
      <RouterProvider router={router} />
    </Layout>
  </React.StrictMode>
);
