import { usePolicyStore } from "stores"
import { Container } from "ui"

export const Footer = () => {
  const { toggle } = usePolicyStore();

  return (
    <>
      <footer className="bg-gray-31 py-14 font-robotoFlex">
        <Container className="flex items-center justify-between text-sm text-white">
          <p>
            ©{new Date().getFullYear()} ИП Авдеев А.В., УНП 391067914 от 29 Марта 2019 г.
          </p>

          <button onClick={toggle}>Политика обработки персональных данных</button>

          <a href="https://lyshka.by">
            Создание сайта: Lyshka.by
          </a>
        </Container>
      </footer>
    </>
  )
}