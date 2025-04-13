import { upBlock } from "constants"
import { Container } from "ui"

export const UpBlock = () => {
  return (
    <section className="bg-[url('bgUpBlock.png')] h-screen bg-cover bg-center">
      <Container className="py-20 flex items-center h-full">
        <div className="max-w-[819px] w-full">
          <h1 className="text-[60px] font-bold text-white uppercase">Горбыль и дрова<br /> сухие и естественной влажности</h1>

          <ul className="space-y-2.5">
            {upBlock.map(() => (
              <li></li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  )
}