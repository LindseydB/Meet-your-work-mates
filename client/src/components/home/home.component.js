import React,{Component} from 'react';
import TodosList from "../todos-list.component.js"
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
          <div class="col-12">
            <h1 class="h2">Hi, </h1>
            <h1 class="h2">Upcoming Events</h1>

            <div class="sidescroll">
              <TodosList />
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-12">
            <h1 class="h2">Meet-ups</h1>
            </div>
        </div>
      </div>
    )
  }

}
