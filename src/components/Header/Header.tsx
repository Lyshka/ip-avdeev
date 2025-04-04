import { Container } from "components"
import { Contact, Menu } from "components/Header"

export const Header = () => {
  return (
    <header className="py-5 bg-header font-robotoFlex">
      <Container className="flex justify-between items-center">
        <Menu />

        <Contact />
      </Container>
    </header>
  )
}