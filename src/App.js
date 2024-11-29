import "./App.css"
import "bootstrap-icons/font/bootstrap-icons.css"
import "bootstrap/dist/css/bootstrap.min.css"
import MyNav from "./Components/MyNav"
import SecondNavBar from "./Components/SecondNavBar"
import MyFooter from "./Components/MyFooter"
import MainContent from "./Components/MainContent"

function App() {
  return (
    <div className="App bg-dark">
      <header>
        <MyNav />
        <SecondNavBar />
      </header>
      <main>
        <MainContent />
      </main>
      <footer>
        <MyFooter />
      </footer>
    </div>
  )
}

export default App
