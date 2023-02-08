import React, { useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Project from "../EditorTabs/Project";
import Scene from "../EditorTabs/Scene";
import Settings from "../EditorTabs/Settings";

function Editor() {
  const [key, setKey] = useState("scene");

  return (
    <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-3"
    >
      <Tab eventKey="scene" title="SCENE">
        <Scene />
      </Tab>
      <Tab eventKey="project" title="PROJECT">
        <Project />
      </Tab>
      <Tab eventKey="settings" title="SETTINGS">
        <Settings />
      </Tab>
    </Tabs>
  );
}

export default Editor;
