export const initialNodes = [
  {
    id: "1",
    data: { label: "Hello" },
    position: { x: 0, y: 0 },
    type: "input",
  },
  {
    id: "2",
    data: { label: "World" },
    position: { x: 100, y: 100 },
  },
];

export const initialEdges = [
  {
    id: "1-2",
    source: "1",
    target: "2",
    label: "to the",
    type: "simplebezier",
    animated: true,
  },
];
