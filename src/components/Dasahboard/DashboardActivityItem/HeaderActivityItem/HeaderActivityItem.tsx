import React, { Dispatch, FC, SetStateAction } from "react";
import ActivityItemButtons from "./ActivityItemButtons";
import HeadingActivityItem from "./HedingActivityItem";

type HeaderActivityItemProps = {
  setClick: Dispatch<SetStateAction<boolean>>;
  setSortFunction: Dispatch<SetStateAction<string>>;
};

const HeaderActivityItem: FC<HeaderActivityItemProps> = ({
  setClick,
  setSortFunction,
}) => {
  return (
    <>
      <HeadingActivityItem />
      <ActivityItemButtons
        setClick={setClick}
        setSortFunction={setSortFunction}
      />
    </>
  );
};

export default HeaderActivityItem;
