import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import ArrowLeft from '/src/images/arrow-left.svg';

const initialData = {
  activityID: '',
  tripID: '',
  dayID: '',
  activityName: '',
  location: '',
  description: '',
  votes: {
    interested: null,
    notInterested: null,
    maybe: null,
  },
};

const ActivityForm = () => {
  const { tripID, day } = useParams();
  const [activityArr, setActivityArr] = useState(initialData);
  const requiredStar = <span className="text-[#E53F3F]">*</span>;

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const submitButton = document.getElementById('submit');
    const { tripID, dayID, activityName, location, description, cost } =
      activityArr;
    const activityData = {
      tripID: tripID,
      activityName: activityName,
      location: location,
      day: parseInt(day),
      description: description,
      cost: cost,
    };

    await fetch('https://colab-mvp.onrender.com/activity/create', {
      method: 'POST',
      body: JSON.stringify(activityData),
      headers: {
        'Content-type': 'application/json',
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        submitButton.style.backgroundColor = '#49BF55';
        console.log('POST RESPONSE SENT');
      })
      .catch((err) => {
        submitButton.style.backgroundColor = '#E53F3F';
        throw new Response('', {
          status: 404,
          statusText: err.message,
        });
      });
    return navigate(`/trips/${tripID}/`);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setActivityArr((prev) => ({ ...prev, [name]: value }));
  };
  useEffect(() => {
    const ids = [{ tripID: tripID }];
    ids.map((newID) => {
      setActivityArr((prev) => ({
        ...prev,
        [Object.keys(newID)[0]]: Object.values(newID)[0],
      }));
    });
  }, []);
  return (
    <div className="divStyle">
      <div className="mb-4">
        <div className="w-full mx-auto flex flex-row justify-start items-center gap-2 mb-2">
          <img
            src={ArrowLeft}
            alt="Go Back"
            width={24}
            height={24}
            className="img"
            onClick={() => navigate(-1)}
          />
          <h1 className="text-2xl text-black font-semibold">Day {day}</h1>
        </div>
        <h3 className="text-[15px] font-normal text-black">Add activity</h3>
      </div>
      <form method="post" className="mx-4" onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="activityName" className="inputLabel" aria-required>
          Name {requiredStar}
        </label>
        <input
          type="text"
          name="activityName"
          id="activityName"
          placeholder="What do we call this plan?"
          required
          className="inputText"
          onChange={(e) => handleChange(e)}
        />
        {/* Destination */}
        <label htmlFor="location" className="inputLabel" aria-required>
          Location {requiredStar}
        </label>
        <input
          type="text"
          name="location"
          id="location"
          placeholder="Where are you going?"
          className="inputText"
          required
          onChange={(e) => handleChange(e)}
        />
        {/* Cost */}
        <label htmlFor="cost" className="inputLabel">
          Cost per person
        </label>
        <input
          type="text"
          name="cost"
          id="cost"
          placeholder="Estimated cost"
          className="inputText"
          onChange={(e) => handleChange(e)}
        />

        {/* Time */}
        <label htmlFor="startTime" className="inputLabel">
          Start Time in HH:MM format
        </label>
        <input
          type="text"
          name="startTime"
          id="startTime"
          placeholder="When will you start?"
          className="inputText"
          onChange={(e) => handleChange(e)}
        />
        <label htmlFor="endTime" className="inputLabel">
          End Time in HH:MM format
        </label>
        <input
          type="text"
          name="endTime"
          id="endTime"
          placeholder="When will you end?"
          className="inputText"
          onChange={(e) => handleChange(e)}
        />
        {/* Description */}
        <label htmlFor="description" className="inputLabel" aria-required>
          Description
        </label>
        <textarea
          name="description"
          id="description"
          rows="3"
          placeholder="Tell us more about this trip!"
          onChange={(e) => handleChange(e)}
          className="inputText"
        ></textarea>

        <div className="w-full grid place-items-center my-8 cursor-pointer">
          <input
            type="submit"
            value="Add"
            className="inputSubmit"
            id="submit"
          />
        </div>
      </form>
    </div>
  );
};

export default ActivityForm;
