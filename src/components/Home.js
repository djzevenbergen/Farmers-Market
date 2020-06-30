import React from 'react';
import Day from "./Day";
import PropTypes from "prop-types";

const marketSchedule = [
  {
    day: "Sunday",
    location: "Lents International",
    hours: "9:00am - 2:00pm",
    booth: "4A"
  },
  {
    day: "Monday",
    location: "Pioneer Courthouse Square",
    hours: "10:00am - 2:00pm",
    booth: "7C"
  },
  {
    day: "Tuesday",
    location: "Hillsboro",
    hours: "5:00pm - 8:30pm",
    booth: "1F"
  },
  {
    day: "Wednesday",
    location: "Shemanski Park",
    hours: "10:00am - 2:00pm",
    booth: "3E"
  },
  {
    day: "Thursday",
    location: "Northwest Portland",
    hours: "2:00pm - 6:00pm",
    booth: "6D"
  },
  {
    day: "Saturday",
    location: "Beaverton",
    hours: "10:00am - 1:30pm",
    booth: "9G"
  }
];



function Home(props) {
  console.log(typeof (props.keyword));
  console.log(marketSchedule[props.keyword].day);
  //console.log(marketSchedule[0][day]);
  return (
    <React.Fragment>
      <hr />
      {/* {marketSchedule.map((keyword) => */}
      <Day day={marketSchedule[props.keyword].day}
        location={marketSchedule[props.keyword].location}
        hours={marketSchedule[props.keyword].hours}
        booth={marketSchedule[props.keyword].booth}

      />

    </React.Fragment>
  )
}


export default Home;