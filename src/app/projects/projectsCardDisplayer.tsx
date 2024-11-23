import {HTMLProps, ReactNode, useEffect, useState} from "react";

export interface ProjectCardDisplayerInterface extends HTMLProps<HTMLUListElement> {
  children: ReactNode[]
  currentlyShowing: number
}

/**
 * Just handles which project should be displayed in the card.
 * @param children
 * @param currentlyShowing
 * @param props
 * @constructor
 */
export default function ProjectsCardDisplayer({children, currentlyShowing, ...props}: ProjectCardDisplayerInterface) {
  const [shownIndex, setShownIndex] = useState(currentlyShowing);

  useEffect(() => {
    setShownIndex(currentlyShowing);
  }, [currentlyShowing]);

  const validIndex = Math.min(Math.max(shownIndex, 0), children.length - 1);

  return <ul className="list-style-none" {...props}>
    {children[validIndex]}
  </ul>
}