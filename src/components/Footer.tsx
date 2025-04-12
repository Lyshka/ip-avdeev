import { modalEnum } from "enums/modalEnum";
import { useModalStore } from "stores"
import { Container } from "ui"

export const Footer = () => {
  const { toggle } = useModalStore();

  const handleToggle = () => {
    toggle(modalEnum.CONF, true);
  }

  return (
    <>
      <footer className="bg-gray-31 py-14 font-robotoFlex">
        <Container className="flex items-center justify-between text-sm text-white">
          <p>
            ©{new Date().getFullYear()} ИП Авдеев А.В., УНП 391067914 от 29 Марта 2019 г.
          </p>

          <button onClick={handleToggle}>Политика обработки персональных данных</button>

          <a href="https://lyshka.by">
            Создание сайта: Lyshka.by
          </a>
        </Container>
      </footer>
    </>
  )
}