import React, { Component } from 'react';

export default class ListToDo extends Component {
  render(){
    return(
      <div>
        <ul>

          {
            this.props.tareasPorHacer.map(tareas =>(
              <li key={tareas.id} > {tareas.description} </li>
            ))
          }
        </ul>
      </div>
    )
  }

}