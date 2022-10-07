import { createContext } from "react";
import { TypeActivitys, TypeDeleteActivity } from "src/types/TypeActivity";

type TypeActivityContext = {
  activitys: TypeActivitys;
  postActivity: () => Promise<void>;
  deleteActivity: TypeDeleteActivity;
};

const ActivityContext = createContext<TypeActivityContext>(
  {} as TypeActivityContext
);

export default ActivityContext;
