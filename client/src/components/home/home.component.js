import React,{Component} from 'react';
import EventList from "./event-list.component.js"
import MeetupList from "./meetups-list.component.js"

import "./home.css";


export default class CreateTodo extends Component{

  constructor(props)
  {
    super(props);
    this.setState({
      todo_description: '',
      todo_responsible:'',
      todo_priority:'',
      todo_completed: false
    });
  }

  onChangeTodoDescription(e){
      this.setState({
        todo_description: e.target.value
      });
  }

  onChangeTodoResponsible(e){
      this.setState({
        todo_responsible: e.target.value
      });
  }

  onChangeTodoPriority(e){
      this.setState({
        todo_priority: e.target.value
      });
  }

  onSubmit(e){
    e.preventDefault();

    console.log('Form submitted:');
    console.log('Todo Description: ${this.state.toodo_description}');
    console.log('Todo Responsible: ${this.state.toodo_responsible}');
    console.log('Todo Priority: ${this.state.toodo_priority}');
    console.log('Todo Completed: ${this.state.toodo_completed}');

    this.setState({
      toodo_description: '',
      todo_responsible: '',
      todo_priority: '',
      todo_completed: false
    })
  }

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
          <div class="col-12"><br />
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
