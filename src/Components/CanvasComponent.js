import React from "react";
import Split from "react-split";
import CanvasRight from "./Editor/CanvasRight";
import Editor from "./Editor/Editor";
import "./Style.css";

export default function CanvasComponent() {
  return (
    <Split className="split">
      <div>
        <CanvasRight />
      </div>
      <div>
        <Editor />
      </div>
    </Split>
  );
}
