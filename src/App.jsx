import { ReactFlow, Background, Controls } from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import "./App.css";

function App() {
  return (
    <div style={{ width: "500px", height: "500px", border: "1px solid red" }}>
      <ReactFlow>
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
}

export default App;
