import { Footer, Header } from "components"
import { Modals } from "components"

const App = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Header />

        <div className="flex-1">
        </div>

        <Footer />
      </div>

      <Modals />
    </>
  )
}
export default App