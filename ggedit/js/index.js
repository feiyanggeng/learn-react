import React from "react";
import ReactDOM from "react-dom";
import GGEditor, { Flow, EditableLabel } from "gg-editor";

import "./styles.css";

const data = {
  nodes: [
    {
      id: "0",
      label: "Node",
      x: 55,
      y: 55,
    },
    {
      id: "1",
      label: "Node",
      x: 55,
      y: 255,
    },
    {
      id: "2",
      label: "Node",
      x: 255,
      y: 255,
    },
  ],
  edges: [
    {
      source: "0",
      target: "1",
      styles: {
        backgroundColor: "#f00",
      },
    },
    {
      source: "0",
      target: "2",
      styles: {
        backgroundColor: "#00f",
      },
    },
  ],
};

function App() {
  return (
    <GGEditor className="editor">
      <Flow
        className="editorBd"
        data={data}
        fixView={true}
        graphConfig={{
          defaultNode: {
            type: "bizFlowNode",
          },
          defaultEdge: {
            type: "bizFlowEdge",
          },
        }}
      />
      <EditableLabel />
    </GGEditor>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
