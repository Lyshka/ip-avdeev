import Container from "../Container"
import Contact from "./Contact/Index"
import Menu from "./Menu/Index"

const Header = () => {
  return (
    <header className="py-5 bg-header">
      <Container className="flex justify-between items-center">
        <Menu />

        <Contact />
      </Container>
    </header>
  )
}
export default Header