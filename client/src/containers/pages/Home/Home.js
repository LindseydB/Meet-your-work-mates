import React from 'react';
import ReactDOM from "react-dom";
import EventList from "../../../components/EventList/EventList.js"
import MeetupList from "../../../components/MeetupsList/MeetupsList.js"
import PastEventList from "../../../components/PastEventList/PastEventList.js"
import HorScrollFuture from "./HorScrollFuture";
import HorScrollPast from "./HorScrollPast";



import "./home.css";


const Home = () => {
  let currentUserObj = React.useState(
    JSON.parse(localStorage.getItem('currentUser')) || ''
  );
  let user = currentUserObj[0];




  return (
    <div>
      <div className="row">
              <div className="col-12"><br />
                  <h1 className="greeting">Hi {user.name}, </h1>
                  <p class="introtxt">Organise your meet ups and upcoming events.</p><br /><br />
          <h1 className="midTitle">Catch-ups</h1>
          <div className="sidescroll">
          <HorScrollFuture />
          </div>

          <p>&nbsp;</p>

          <h1 className="midTitle">Past Catch-ups</h1>
          <div className="sidescroll">
            <HorScrollPast />
          </div>





        </div>
      </div>



      <div className="row">
        <div className="col-12"><br />
          <h1 className="midTitle">Upcoming events</h1>
          <div className="sidescroll">
            <MeetupList />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
