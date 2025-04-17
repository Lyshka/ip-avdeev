import { Title } from "ui"
import { MapContact, Address, Email, Tels } from "components/Contact"

export const Contact = () => {
  return (
    <section>
      <Title title="Контакты" />

      <div className="grid grid-cols-6 gap-6">
        <div className='col-span-2 space-y-6 font-robotoFlex'>
          <Tels />

          <Email />

          <Address />
        </div>

        <div className='col-span-4'>
          <MapContact />
        </div>
      </div>
    </section>
  )
}