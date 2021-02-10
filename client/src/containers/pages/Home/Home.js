import React from 'react';
import EventList from "../../../components/EventList/EventList.js"
import MeetupList from "../../../components/MeetupsList/MeetupsList.js"
import PastEventList from "../../../components/PastEventList/PastEventList.js"

import "./home.css";


const Home = () => {
  return (
    <div>
      <div className="row">
              <div className="col-12"><br />
                  <h1 className="h2">Hi {JSON.parse(localStorage.getItem('currentUser')).name}, </h1>
          <p><strong>Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br /> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</strong></p><br /><br />
          <h1 className="h2">Catch-ups</h1>
          <div className="sidescroll">
            <EventList />
          </div>

          <p>&nbsp;</p>
          
          <h1 className="midTitle">Past Catch-ups</h1>
          <div className="sidescroll">
            <PastEventList />
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
