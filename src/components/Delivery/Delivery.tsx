import { Button, Title } from "ui"
import { Picture, List } from "components/Delivery"
import { useModalStore } from "stores"
import { modalEnum } from "enums"

export const Delivery = () => {
  const { toggle } = useModalStore()

  const handleToggle = () => {
    toggle(modalEnum.ORDER, true);
  }

  return (
    <section>
      <Title title="Доставка собственным автомобилем" />

      <div className="grid grid-cols-2 gap-6">
        <Picture />

        <div className="space-y-11">
          <List />

          <Button onClick={handleToggle}>
            Обсудить поставку
          </Button>
        </div>
      </div>
    </section>
  )
}