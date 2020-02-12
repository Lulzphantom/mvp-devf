import React from 'react';


export const LinkForm = () => {

    return (
        <form>
             <div className="field">
                    <label for="" className="label">Título</label>
                    <div className="control has-icons-left">
                        <input type="text" placeholder="titulo" className="input is-rounded" required/>
                        <span className="icon is-small is-left">
                            <i class="fas fa-heading"></i>
                        </span>
                    </div>
                </div>
            <div className="field">
                    <label for="" className="label">Descripción</label>
                    <div className="control has-icons-left">
                        <input type="text" placeholder="descripción" className="input is-rounded" required/>
                        <span className="icon is-small is-left">
                        <i class="fas fa-audio-description"></i>    
                        </span>
                    </div>
            </div>
            <div className="field">
                    <label for="" className="label">URL</label>
                    <div className="control has-icons-left">
                        <input type="text" placeholder="URL" className="input is-rounded" required/>
                        <span className="icon is-small is-left">
                        <i class="fas fa-cloud"></i>
                        </span>
                    </div>
            </div>
            <div class="field">
  <label class="label">Subject</label>
  <div class="control">
    <div class="select">
      <select>
        <option>Select dropdown</option>
        <option>With options</option>
      </select>
    </div>
  </div>
</div>
<div className="field is-grouped">
  <div className="control">
    <button className="button is-info is-rounded">Submit</button>
  </div>
  <div className="control">
    <button className="button is-link is-light is-rounded">Cancel</button>
  </div>
</div>

</form>
   

            )
}