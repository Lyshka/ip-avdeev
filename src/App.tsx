import { ToastContainer } from "react-toastify"

import { Footer, Header, Modals } from "components"

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
      <ToastContainer />
    </>
  )
}
export default App