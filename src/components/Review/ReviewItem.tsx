import { IReview } from "interfaces/IReview"

export const ReviewItem: React.FC<IReview> = ({ fio, text }) => {
    return (
        <div className="p-[70px] border border-gray-ae bg-gray-f8 space-y-9 text-lg rounded-md overflow-hidden bg-[url('/bgReview.png')] bg-bottom bg-no-repeat">
            <p className="font-robotoFlex">
                {text}
            </p>

            <p className="font-bold uppercase">
                {fio}
            </p>
        </div>
    )
}