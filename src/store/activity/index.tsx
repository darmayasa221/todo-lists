import { createContext, Dispatch, SetStateAction } from "react";
import { TypeActivitys } from "src/types/TypeActivity";

type TypeActivityContext = {
  activitys: TypeActivitys;
  postActivity: () => Promise<void>;
  deleteActivity: (
    id: number,
    setNotification: Dispatch<SetStateAction<boolean>>
  ) => Promise<void>;
};

const ActivityContext = createContext<TypeActivityContext>(
  {} as TypeActivityContext
);

export default ActivityContext;
