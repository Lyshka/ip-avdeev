import { ToastContainer } from "react-toastify"

import { Contact, Delivery, Edge, Footer, FormBlock, Gallery, Header, Modals, Product, Quest, Review, UpBlock } from "components"
import { Container } from "ui"

const App = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Header />

        <div className="flex-1">
          <UpBlock />

          <Container className="space-y-28 py-28">
            <Edge />
            <Product />
            <Delivery />
            <Review />
            <Gallery />
            <Quest />
            <FormBlock />
            <Contact />
          </Container>
        </div>

        <Footer />
      </div>

      <Modals />
      <ToastContainer />
    </>
  )
}
export default App