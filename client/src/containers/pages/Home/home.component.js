import React,{Component} from 'react';
import EventList from "../../../components/event-list.component.js"
import MeetupList from "../../../components/meetups-list.component.js"

import "./home.css";

export default class Home extends Component{

  constructor(props)
  {
    super(props);
  }

  render() {
    return(
      <div>
        <div className="row">
          <div className="col-12"><br />
            <h1 className="h2">Hi Username, </h1><br />
            <p><strong>Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br /> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</strong></p><br /><br />
            <h1 className="h2">Upcoming Events</h1>
            <div className="sidescroll">
              <EventList />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12"><br />
            <h1 className="h2">Meet-ups</h1><br />
            <div className="sidescroll">
              <MeetupList />
            </div>
            </div>
        </div>
      </div>
    )
  }

}
