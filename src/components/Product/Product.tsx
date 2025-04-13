import { product } from "constants"
import { Title } from "ui"
import { ProductItem } from "components/Product"

export const Product = () => {
  return (
    <main>
      <Title title="Всегда в наличии и под заказ" />

      <ul className="grid grid-cols-3 gap-6">
        {product.map((props) => (
          <ProductItem key={props.id} {...props} />
        ))}
      </ul>
    </main>
  )
}