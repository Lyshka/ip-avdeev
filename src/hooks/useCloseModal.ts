import { useEffect } from "react";

export const useCloseModal = (
  openArray: boolean[],
  handleToggle: VoidFunction
) => {
  const isNotOpenAllCheck = openArray.every((value) => !value);

  useEffect(() => {
    const body = document.querySelector("body");

    if (isNotOpenAllCheck) {
      body?.classList.remove("noScroll");
    } else {
      body?.classList.add("noScroll");
    }
  }, openArray);

  const handleClose = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.currentTarget === event.target) {
      handleToggle();
    }
  };

  return { handleClose };
};
