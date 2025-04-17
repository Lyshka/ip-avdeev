import { QuestForm } from "components/Form"
import { Title } from "ui"

export const FormBlock = () => {
  return (
    <div className="p-16 bg-gray-f8 border border-gray-ae rounded-md space-y-11">
      <div className="space-y-5">
        <Title title="Остались вопросы?" />

        <p className="text-center font-bold text-lg uppercase">
          Звоните нам или оставляйте заявку, и мы ответим на интересующие вопросы,<br /> просчитаем стоимость и время доставки
        </p>
      </div>

      <QuestForm />
    </div>
  )
}