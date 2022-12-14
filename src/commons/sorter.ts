import { TypeActivityItem } from "src/components/Dasahboard/DashboardActivityItem/DashboardActivityItem";
const sorter = (
  value: Array<TypeActivityItem>,
  type: string
): Array<TypeActivityItem> => {
  if (type === "Terlama") {
    return value.sort((a, b) => Number(a.id) - Number(b.id));
  }
  if (type === "A-Z") {
    return value.sort((a, b) =>
      a.title.toLowerCase() < b.title.toLowerCase() ? -1 : 1
    );
  }
  if (type === "Z-A") {
    return value.sort((a, b) =>
      a.title.toLowerCase() > b.title.toLowerCase() ? -1 : 1
    );
  }
  if (type === "Belum Selesai") {
    return value.sort((a, b) => b.is_active - a.is_active);
  }
  return value.sort((a, b) => Number(b.id) - Number(a.id));
};

export default sorter;
