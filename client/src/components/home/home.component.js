import React,{Component} from 'react';
import EventList from "./event-list.component.js"
import MeetupList from "./meetups-list.component.js"

import "./home.css";


export default class Home extends Component{

  render() {
    return(
      <div>
        <div class="row">
          <div class="col-12"><br />
            <h1 class="h2">Hi Username, </h1><br />
            <p><strong>Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br /> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</strong></p><br /><br />
            <h1 class="h2">Upcoming Events</h1>
            <div class="sidescroll">
              <EventList />
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-12">
            <h1 class="h2">Meet-ups</h1><br />
            <div class="sidescroll">
              <MeetupList />
            </div>
            </div>
        </div>
      </div>
    )
  }

}
