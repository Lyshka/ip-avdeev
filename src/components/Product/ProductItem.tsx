import { IProduct } from "interfaces"

export const ProductItem: React.FC<IProduct> = ({ desc, img, price, title }) => {
    return (
        <li className="space-y-5">
            <div className="h-72">
                <img src={img} alt={title} title={title} className="w-full h-full object-cover object-center" />
            </div>

            <div className="space-y-2.5">
                <h3 className="uppercase font-black text-xl">
                    {title}
                </h3>

                <div className="text-lg" dangerouslySetInnerHTML={{ __html: desc }} />

                <p className="text-lg uppercase font-bold">
                    от {price} руб. за м.куб.
                </p>
            </div>
        </li>
    )
}