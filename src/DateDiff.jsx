import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DateDiff = () => {
  const [dates, setDates] = useState([null, null]); // Start date, End date
  const [difference, setDifference] = useState(null);

  // Calculate the difference between two dates
  const calculateDifference = (start, end) => {
    if (start && end) {
      const startDateObj = new Date(start);
      const endDateObj = new Date(end);
      const diffTime = endDateObj - startDateObj;
      const diffDays = Math.abs(Math.ceil(diffTime / (1000 * 60 * 60 * 24)));
      setDifference(diffDays);
    } else {
      setDifference(null);
    }
  };

  // Handle date range change
  const handleDateChange = (dates) => {
    setDates(dates);
    const [start, end] = dates;
    calculateDifference(start, end);
  };

  return (
    <div className="flex-col gap-5 sm:flex sm:flex-row">
      <div className="left">
        <h2 className="font-bold mb-2 text-teal-400">
          DATE DIFFERENCE CALCULATOR
        </h2>

        {/* Result */}
        <div className="result">
          <div className="flex flex-col gap-1 font-medium text-lg mt-5 w-full rounded-lg text-white bg-gradient-to-tr from-neutral-600 to-neutral-700 p-2 border border-neutral-500">
            Result{" "}
            {difference !== null ? (
              <span className="font-normal text-neutral-300">{`${difference} Day${
                difference !== 1 ? "s" : ""
              }`}</span>
            ) : (
              <span className="font-normal text-neutral-300">
                No Dates Selected
              </span>
            )}
          </div>
        </div>

        <div className="text-black text-lg w-full">
          <DatePicker
            selected={dates[0]}
            startDate={dates[0]}
            endDate={dates[1]}
            onChange={handleDateChange}
            selectsRange
            inline
            calendarStartDay={1}
            dateFormat="yyyy/MM/dd"
            calendarClassName="w-full mt-5"
          />
        </div>
      </div>

      {/* Trivia Side - Filler */}
      <div className="right grid gap-2 mt-5 sm:mt-0">
        <h3 className="text-white">Calendar Trivia</h3>
        <div>
          <h5>The Missing Days</h5>
          <p>
            In 1582, 10 days were skipped to fix the calendar. October 4 was
            followed by October 15!
          </p>
        </div>
        <div>
          <h5>Why 7 Days?</h5>
          <p>
            The 7-day week comes from ancient Babylon, based on the seven
            celestial bodies they observed.
          </p>
        </div>
        <div>
          <h5>February's Oddity</h5>
          <p>
            February is the only month that can have no full moon during a
            calendar year.
          </p>
        </div>
        <div>
          <h5>Year Zero Doesn't Exist</h5>
          <p>
            The Gregorian calendar jumps from 1 BC to AD 1, there is no year 0.
          </p>
        </div>
        <div>
          <h5>Longest Year Ever</h5>
          <p>
            45 BC was 445 days long thanks to Julius Caesar’s calendar reform.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DateDiff;
