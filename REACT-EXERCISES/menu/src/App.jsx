import "./App.css"
import ItemList from "./components/ItemList"
import Layout from "./components/Layout"
import Header from "./components/Header"

function App() {

  return (
    <>
    <Layout>
      <Header headerText="Our Menu" />
      <ItemList />
    </Layout>
    </>
  )
}

export default App
