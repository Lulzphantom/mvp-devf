import React from 'react';


export const LinkForm = () => {

    return (

            
            <div className="field">
                <label className="label">
                    Titulo
                </label>
                <div className="control">
                    <input className="input is-info" type="text" placeholder="Titulo"/>
                </div>
                <label className="label">
                   Descripción
                </label>
                <div className="control">
                    <input className="input is-info" type="text" placeholder="Descripcion"/>
                </div>
                <label className="label">
                    URL
                </label>
                <div className="control">
                    <input className="input is-info" type="text" placeholder="URL"/>
                </div>
                <label class="label">Subject</label>
                    <div class="control">
                         <div class="select">
                             <select>
                                <option>Select dropdown</option>
                                <option>With options</option>
                         </select>
                 </div>
            </div>
            <div className="field is-grouped is-centered">
  <p className="control">
    <button className="button is-link">
      Save changes
    </button>
  </p>
  <p className="control">
    <button className="button is-danger">
      Delete post
    </button>
  </p>
</div>
            </div>
   

            )
}