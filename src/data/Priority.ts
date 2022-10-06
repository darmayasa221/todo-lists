export type TypePriority = {
  [key: string]: string | undefined;
  color?: string;
  title: string;
  priority: string;
};

const PRIORITY: Array<TypePriority> = [
  {
    color: "#ED4C5C",
    title: "Very High",
    priority: "very-high",
  },
  {
    color: "#F8A541",
    title: "High",
    priority: "high",
  },
  {
    color: "#00A790",
    title: "Medium",
    priority: "normal",
  },
  {
    color: "#428BC1",
    title: "Low",
    priority: "low",
  },
  {
    color: "#8942C1",
    title: "Very Low",
    priority: "very-low",
  },
];

export default PRIORITY;
