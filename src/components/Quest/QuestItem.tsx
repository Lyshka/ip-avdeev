import { useState } from "react";

import { ArrowDownQuest } from "icons";
import { IQuestItem } from "interfaces"
import { cn } from "libs";

export const QuestItem: React.FC<IQuestItem> = ({ title, desc, open = false }) => {
    const [isOpen, setIsOpen] = useState(open);

    const handleOpen = () => {
        setIsOpen(prv => !prv);
    }

    return (
        <li onClick={handleOpen} className="px-5 py-3 border border-gray-ae rounded-md text-lg">
            <div className="flex gap-5 justify-between items-center">
                <h5 className="font-bold uppercase">
                    {title}
                </h5>

                <ArrowDownQuest className={cn("shrink-0 transition-all duration-500 transform", isOpen && "rotate-180")} />
            </div>

            <div className={cn("grid grid-rows-(--grid-rows-0) transition-all duration-500 overflow-hidden", isOpen && "mt-3.5 grid-rows-(--grid-rows-1)")}>
                <div className={"font-robotoFlex min-h-0"} dangerouslySetInnerHTML={{ __html: desc }} />
            </div>
        </li>
    )
}