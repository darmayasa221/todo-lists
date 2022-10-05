import IconLatest from "src/asset/svg/latest.svg";
import IconOldest from "src/asset/svg/oldest.svg";
import IconAz from "src/asset/svg/az.svg";
import IconZa from "src/asset/svg/za.svg";
import IconUnfinished from "src/asset/svg/unfinished.svg";
export type TypeSort = {
  [key: string]: string | undefined;
  icon?: string;
  title: string;
};
const SORT: Array<TypeSort> = [
  {
    icon: IconLatest,
    title: "Terbaru",
  },
  {
    icon: IconOldest,
    title: "Terlama",
  },
  {
    icon: IconAz,
    title: "A-Z",
  },
  {
    icon: IconZa,
    title: "Z-A",
  },
  {
    icon: IconUnfinished,
    title: "Belum Selesai",
  },
];

export default SORT;
