import React from "react";

const SplitPaneContainer = (props) => {
  return (
    <div
      style={{
        position: "relative",
        overflow: "hidden",
        display: "grid",
        gridTemplateColumns:
          "minmax(min-content, var(--split-pos, var(--split-initial))) auto minmax(min-content, 1fr)",
        gridTemplateRows: "1fr",
        alignItems: "stretch",
        justifyItems: "stretch",
      }}
      {...props}
    />
  );
};

const Sash = (props) => {
  return (
    <div
      style={{
        width: "1.6rem",
        display: "flex",
        flexDirection: "column",
        cursor: "ew-resize",
      }}
    >
      <div
        style={{
          content: "⋮",
          margin: "auto",
          fontSize: "2.4rem",
          fontWeight: "800",
        }}
      />
      {props.children}
    </div>
  );
};

export { SplitPaneContainer, Sash };
