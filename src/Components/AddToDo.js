import React, { Component } from 'react';
import ListToDo from './ListToDo';

export default class AddToDo extends Component {

  constructor(){
    super()
    this.state = {
      description : '',
      tasks: []
    }

    this.handleChange = this.handleChange.bind(this);
    this.addTask = this.addTask.bind(this)
  }


  render() {
    return (
      <div>
        <fieldset>
          <legend>Add a task </legend>
          <form onSubmit={this.addTask}>
            <label htmlFor="taskId">Add a task</label>
            <input
              id="taskId"
              type="text"
              onChange={this.handleChange}
              value={this.state.description}
            />

            <button type="submit">add</button>
          </form>
        </fieldset>

        <ListToDo tareasPorHacer={this.state.tasks} />
      </div>
    )
  }

  handleChange(e){
    this.setState({description : e.target.value})
  }

  addTask(e){
    e.preventDefault();
    if(this.state.description.length < 1){
      return;
    }

    let task = {
      description : this.state.description,
      id : Date.now()
    }
    
    this.setState({
      tasks : this.state.tasks.concat(task),
      description : ''
    })
  }
}