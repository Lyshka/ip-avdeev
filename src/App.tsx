import { Footer, Header, PolicyModal } from "components"

const App = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Header />

        <div className="flex-1"></div>

        <Footer />
      </div>

      <PolicyModal />
    </>
  )
}
export default App