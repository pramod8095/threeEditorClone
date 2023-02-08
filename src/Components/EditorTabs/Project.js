import React from "react";

export default function Project() {
  return (
    <div style={{ padding: "12px" }}>
      <form>
        <div class="form-group row">
          <label class="col-sm-2 col-form-label">Title</label>
          <div class="col-sm-10">
            <input type="text" />
          </div>
        </div>
        <div class="form-group row">
          <label class="col-sm-2 col-form-label">Editable</label>
          <div class="col-sm-10">
            <input type="checkbox" />
          </div>
        </div>
        <div class="form-group row">
          <label class="col-sm-2 col-form-label">VR</label>
          <div class="col-sm-10">
            <input type="checkbox" />
          </div>
        </div>
        <hr />
        RENDERER
        <br />
        <div class="form-group row">
          <label class="col-sm-2 col-form-label">Antialias</label>
          <div class="col-sm-10">
            <input type="checkbox" checked />
          </div>
        </div>
        <div class="form-group row">
          <label class="col-sm-2 col-form-label">Physical lights</label>
          <div class="col-sm-10">
            <input type="checkbox" />
          </div>
        </div>
        <div class="form-group row">
          <label class="col-sm-2 col-form-label">Shadows</label>
          <div class="col-sm-10">
            <input type="checkbox" checked />{" "}
            <select>
              <option>BASIC</option> <option>PCF</option>
              <option>PCF SOFT</option>
            </select>
          </div>
        </div>
        <div class="form-group row">
          <label class="col-sm-2 col-form-label">Tone mapping</label>
          <div class="col-sm-10">
            <select>
              <option>NO</option>
              <option>LINEAR</option>
              <option>REINHARD</option>
              <option>CINEON</option>
              <option>ACESFILMIC</option>
            </select>
          </div>
        </div>
      </form>
    </div>
  );
}
