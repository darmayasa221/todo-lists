import { createContext } from "react";
import {
  TypeActivity,
  TypeActivitys,
  TypeDeleteActivity,
  TypeGetActivityById,
  TypePatchTitleActivityById,
} from "src/types/TypeActivity";

type TypeActivityContext = {
  activity: TypeActivity;
  activitys: TypeActivitys;
  postActivity: () => Promise<void>;
  deleteActivity: TypeDeleteActivity;
  getActivityById: TypeGetActivityById;
  patchTitleActivityById: TypePatchTitleActivityById;
};

const ActivityContext = createContext<TypeActivityContext>(
  {} as TypeActivityContext
);

export default ActivityContext;
