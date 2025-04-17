import { quest } from "constants"
import { Title } from "ui"
import { QuestItem } from "components/Quest"

export const Quest = () => {
  return (
    <section>
      <Title title="Вопрос-Ответ" />

      <div className="grid grid-cols-6 gap-6">
        <ul className="col-span-4 space-y-6">
          {quest.map((props) => {
            const isOpened = props.id === 2 || props.id === 3;

            return (
              <QuestItem key={props.id} {...props} open={isOpened} />
            )
          })}
        </ul>

        <div className="col-span-2">
          <img src="firewoodDelivery.png" alt="Доставщик дров" />
        </div>
      </div>
    </section>
  )
}