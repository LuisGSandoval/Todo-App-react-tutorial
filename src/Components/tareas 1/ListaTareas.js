import React, { Component } from 'react';

export default class ListaTareas extends Component{
  constructor(props){
    super(props);
    this.mostrarTareas = this.mostrarTareas.bind(this)
  }
  
  render(){
    return(
      <fieldset>
        <legend>Las tareas son: </legend>
        
        <ul>
          {
            this.props.tareas.map(data => (
              <li key={data.id}>
                {data.descripcion}
              </li>
            ))
          }
        </ul>

        <button  onClick={this.mostrarTareas}>Mostrar tareas</button>
      </fieldset>

    )
  }

  mostrarTareas(){
    console.log(this.props.tareas)
  }
}