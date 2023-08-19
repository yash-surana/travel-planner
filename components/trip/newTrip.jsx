import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import { addMonths } from 'date-fns';
import 'react-datepicker/dist/react-datepicker.css';
import { Form, redirect } from 'react-router-dom';
import { POST_NEW_TRIP } from '../../apis/urls';

export const newTripAction = async ({ request }) => {
  const formData = await request.formData();
  const { tripName, startDate, endDate, description, destination } =
    Object.fromEntries(formData);
  const newTripData = {
    userID: '2',
    tripName: tripName,
    destination: destination,
    startDate: new Date(startDate).toISOString(),
    endDate: new Date(endDate).toISOString(),
    // description : description,
  };

  await fetch(POST_NEW_TRIP, {
    method: 'POST',
    body: JSON.stringify(newTripData),
    headers: {
      'Content-type': 'application/json',
    },
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log('TRIP POST RESPONSE SENT');
    })
    .catch((err) => {
      console.log(err.message);
    });
  return redirect(`/`);
};

const NewTrip = () => {
  const requiredStar = <span className="text-[#E53F3F]">*</span>;
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  return (
    <div className="divStyle">
      <div className="mb-4">
        <div className="w-full mx-auto flex flex-row justify-start items-center gap-2 mb-2">
          <img
            src="/arrow-left.svg"
            alt="Go Back"
            width={24}
            height={24}
            className="img"
          />
          <h1 className="text-2xl text-black font-semibold">New Trip</h1>
        </div>
        <h3 className="text-[15px] font-normal text-black">
          Create a new trip
        </h3>
      </div>
      <Form method="post" className="mx-4">
        <label htmlFor="tripName" className="inputLabel" aria-required>
          Name {requiredStar}
        </label>
        <input
          type="text"
          name="tripName"
          id="tripName"
          placeholder="What do we call this plan?"
          required
          className="inputText"
        />

        {/* Dates */}
        <p className="inputLabel">Dates {requiredStar}</p>
        <DatePicker
          selected={startDate}
          name="startDate"
          onChange={(date) => setStartDate(date)}
          minDate={new Date()}
          placeholderText="Start Date"
          className="px-3 py-2 mb-4 mt-2 border-gray-400 border-2 rounded-md hover:border-[#386DF4] focus:outline-[#386DF4]"
          dateFormat={'dd MMMM yyyy'}
          autoComplete="off"
          required
        />
        <p className="lg:inline lg:mx-4">to</p>
        <DatePicker
          selected={endDate}
          name="endDate"
          onChange={(date) => setEndDate(date)}
          minDate={startDate ? startDate : new Date()}
          maxDate={addMonths(startDate ? startDate : new Date(), 2)}
          placeholderText="End Date"
          disabled={startDate === null ? true : false}
          className={`px-3 py-2 mt-2 mb-4 border-gray-400 border-2 rounded-md ${
            startDate != null
              ? 'hover:border-[#386DF4] active:border-[#386DF4]'
              : 'hover:border-warning active:border-warning'
          }`}
          dateFormat={'dd MMMM yyyy'}
          autoComplete="off"
          required
        />
        {/* <div className="flex flex-col lg:flex-row gap-3 justify-start items-start lg:items-center mb-5">
          <div>
            <label className="inputLabel" htmlFor="startDate">
              Start Date {requiredStar}
            </label>
            <input
              type="date"
              name="startDate"
              id="startDate"
              placeholder="Start Date"
              required
              className="inputDate"
            />
          </div>
          <div>
            <label className="inputLabel" htmlFor="endDate">
              End Date {requiredStar}
            </label>
            <input
              type="date"
              name="endDate"
              id="endDate"
              placeholder="End Date"
              required
              className="inputDate ml-6 lg:ml-4"
            />
          </div>
        </div> */}

        {/* Destination */}
        <label htmlFor="destination" className="inputLabel" aria-required>
          Destination {requiredStar}
        </label>
        <input
          type="text"
          name="destination"
          id="destination"
          placeholder="Where are you going?"
          required
          autoComplete="off"
          className="inputText"
        />

        {/* Description */}
        <label htmlFor="description" className="inputLabel" aria-required>
          Description
        </label>
        <input
          type="text"
          name="description"
          id="description"
          placeholder="Tell us more about this trip!"
          className="inputText"
        />

        <div className="w-full grid place-items-center my-8">
          <input
            type="submit"
            id="submit"
            value="Create Trip"
            className="inputSubmit active:bg-positive"
          />
        </div>
      </Form>
    </div>
  );
};

export default NewTrip;
