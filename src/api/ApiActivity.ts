import { TypeActivity } from "src/components/Dasahboard/DashboardActivity/DashboardActiviy";

type TypeResponseActivity = {
  total: number;
  limit: number;
  skip: number;
  data: Array<TypeActivity>;
};
export default class ApiActivity {
  private uri: string;
  private activitys: TypeResponseActivity | object;
  constructor() {
    this.uri = "https://todo.api.devcode.gethired.id/";
    this.activitys = {};
  }
  public get GetActivity() {
    const getData = async () => {
      const response = await fetch(
        `${this.uri}activity-groups/?email=test@email.com`
      );
      const responseJson: TypeResponseActivity = await response.json();
      return responseJson;
    };
    this.activitys = getData();
    return this.activitys;
  }
}
