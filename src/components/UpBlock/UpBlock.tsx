import { upBlock } from "constants"
import { Button, Container } from "ui"
import { Sale, UpBlockItem } from "components/UpBlock"
import { useModalStore } from "stores"
import { modalEnum } from "enums"

export const UpBlock = () => {
  const { toggle } = useModalStore()

  const handleToggle = () => {
    toggle(modalEnum.ORDER, true);
  }

  return (
    <section className="bg-[url('bgUpBlock.png')] h-screen bg-cover bg-center">
      <Container className="py-20 flex items-center h-full relative">
        <div className="max-w-[819px] w-full space-y-11">
          <h1 className="text-[60px] font-bold text-white uppercase">Горбыль и дрова<br /> сухие и естественной влажности</h1>

          <ul className="space-y-2.5">
            {upBlock.map((props) => (
              <UpBlockItem key={props.id} {...props} />
            ))}
          </ul>

          <Button onClick={handleToggle}>
            Обсудить поставку
          </Button>
        </div>

        <Sale />
      </Container>
    </section>
  )
}