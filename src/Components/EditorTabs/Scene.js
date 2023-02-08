import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getBackGroundColor,
  getHeroValue,
} from "../../redux/actions/actionCenter";

export default function Scene() {
  const [selected, setSelected] = useState("");
  const heroValue = useSelector((state) => state.applicationReducer.heroValue);

  const dispatch = useDispatch();
  return (
    <div>
      <div>
        <textarea rows="4" cols="50"></textarea>
        <br />
      </div>
      <label>
        Background{" "}
        <select
          onChange={(e) => {
            setSelected(e.target.value);
          }}
        >
          <option value=""></option>
          <option value="color">Color</option>{" "}
          <option value="hero">Edit Value</option>
          <option value="equirect">Equirect</option>
        </select>
      </label>
      {selected === "color" ? (
        <>
          {" "}
          <input
            type="color"
            value={getBackGroundColor}
            onChange={(e) => dispatch(getBackGroundColor(e.target.value))}
          />
        </>
      ) : selected === "hero" ? (
        <>
          {" "}
          <input
            type="text"
            value={heroValue}
            placeholder=""
            maxLength="2"
            onChange={(e) => dispatch(getHeroValue(e.target.value))}
          />
          {""}
        </>
      ) : (
        ""
      )}
      <br />
      <br />
      <label>
        Environment{" "}
        <select>
          <option></option>
          <option>EQUIRECT</option>
          <option>MODELVIEWER</option>
        </select>
      </label>
      <br />
      <br />
    </div>
  );
}
