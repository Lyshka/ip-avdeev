import { IEdge } from "interfaces"

export const EdgeItem: React.FC<IEdge> = ({ icon: Icon, text }) => {
    return (
        <li className="flex flex-col gap-5 items-center">
            <div className="shrink-0 p-2 border border-green rounded-full">
                <div className="bg-green p-4 rounded-full">
                    <Icon />
                </div>
            </div>

            <p className="text-lg font-bold uppercase text-center" dangerouslySetInnerHTML={{ __html: text }} />
        </li>
    )
}