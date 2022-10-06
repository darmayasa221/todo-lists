import IconLatest from "src/asset/svg/latest.svg";
import IconOldest from "src/asset/svg/oldest.svg";
import IconAz from "src/asset/svg/az.svg";
import IconZa from "src/asset/svg/za.svg";
import IconUnfinished from "src/asset/svg/unfinished.svg";
export type TypeSort = {
  [key: string]: string | undefined;
  icon?: string;
  title: string;
  dataCy?: string;
};
const SORT: Array<TypeSort> = [
  {
    icon: IconLatest,
    title: "Terbaru",
    dataCy: "sort-latest",
  },
  {
    icon: IconOldest,
    title: "Terlama",
    dataCy: "sort-oldest",
  },
  {
    icon: IconAz,
    title: "A-Z",
    dataCy: "sort-az",
  },
  {
    icon: IconZa,
    title: "Z-A",
    dataCy: "sort-za",
  },
  {
    icon: IconUnfinished,
    title: "Belum Selesai",
    dataCy: "sort-unfinished",
  },
];

export default SORT;
