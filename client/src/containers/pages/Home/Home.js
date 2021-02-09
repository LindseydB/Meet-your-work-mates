import React from 'react';
import EventList from "../../../components/EventList/EventList.js"
import MeetupList from "../../../components/MeetupsList/MeetupsList.js"
import "./home.css";

const Home = () => {
  return (
    <div>
      <div className="row">
        <div className="col-12">
          <h1 className="usernameGreeting"><strong>Hello Username,</strong> </h1><br />
          <p>Here you can check out your up coming meet-ups and events.</p><br /><br />
          <h1 className="midTitle">Catch-ups</h1>
          <div className="sidescroll">
            <EventList />
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
