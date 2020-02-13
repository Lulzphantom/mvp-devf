import React from 'react';
import './linkForm.scss';


export const LinkForm = () => {

  return (
    <form>
      <div className="field">
        <label for="" className="label">Título</label>
        <div className="control has-icons-left">
          <input type="text" placeholder="Título" className="input is-rounded" required />
          <span className="icon is-small is-left">
            <i class="fas fa-heading"></i>
          </span>
        </div>
      </div>
      <div className="field">
        <label for="" className="label">Descripción</label>
        <div className="control has-icons-left">
          <input type="text" placeholder="Descripción" className="input is-rounded" required />
          <span className="icon is-small is-left">
            <i class="fas fa-audio-description"></i>
          </span>
        </div>
      </div>
      <div className="field">
        <label for="" className="label">URL</label>
        <div className="control has-icons-left">
          <input type="text" placeholder="URL" className="input is-rounded" required />
          <span className="icon is-small is-left">
            <i class="fas fa-cloud"></i>
          </span>
        </div>
      </div>
      <div className="field">
        <label className="label">Icono</label>
        <div className="control">
          <div className="select">
            <select>
              <option>Select dropdown</option>
              <option>With options</option>
            </select>
          </div>
        </div>
      </div>
      <div className="field">
        <label className="label">Color</label>
        <div className="control has-icons-left  ">
          <div className="select  is-primary is-rounded is-small" onfocus='this.size=10;' onblur='this.size=0;' 
            onchange='this.size=1; this.blur();'>
            <select>
              <option value="info" className="has-background-info">Azul</option>
              <option value="success" className="has-background-success">Verde</option>
              <option value="waring"className="has-background-warning">Amarillo</option>
              <option value="danger" className="has-background-danger">rojo</option>
            </select>
          </div>
          <span className="icon is-small is-left">
            <i className="fas fa-tint"></i>
          </span>
        </div>
      </div>

      <div className="field is-grouped flex">
        <div className="control">
          <button className="button is-info is-rounded">AGREGAR</button>
        </div>
        <div className="control">
          <button className="button is-link is-light is-rounded">CANCELAR</button>
        </div>
      </div>

    </form>


  )
}