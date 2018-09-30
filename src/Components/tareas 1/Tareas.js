import React, { Component } from 'react';
import ListaTareas from './ListaTareas'
export default class Tareas extends Component {

  constructor(props) {
    super(props);

    //Variables
    this.state = {
      tarea: '',
      tareasArray: []
    }
    //Funciones 
    this.agregarTarea = this.agregarTarea.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  render() {
    return (
      <div>
        <h3>Crea una tarea</h3>

        <fieldset>
          <legend>Agregar tareas</legend>

          <form onSubmit={this.agregarTarea}>
          
          <label htmlFor="descriptionInput">Desripcion: </label>
          <input 
            type="text" 
            id="descriptionInput"
            onChange={this.handleChange}
            value={this.state.tarea}
          /> 
          
          <br />
          <button type="submit">agregar</button>

          </form>

        </fieldset>

        <br/><br/>

        <ListaTareas  tareas={this.state.tareasArray}/>

      </div>
    )
  }

  handleChange(e){
    this.setState({tarea: e.target.value})
  }
  agregarTarea(e) {
    e.preventDefault()
    let contenido = document.getElementById('descriptionInput').value;

    if(contenido){
      this.setState({
        tarea : '',
        tareasArray: this.state.tareasArray.concat({descripcion:contenido, id:Date.now()})
      })
    }
  }

}

