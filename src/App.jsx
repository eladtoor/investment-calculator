import { useState } from "react";
import { Header } from "./components/Header"
import { UserInput } from "./components/UserInput"
import { Result } from "./components/Result"




function App() {
  const [dataObject, setDataObject] = useState({
    initialInvestment: 0,
    annualInvestment: 0,
    expectedReturn: 0,
    duration: 0
  });



  return (
    <>

      <Header />
      <UserInput setDataObject={setDataObject} />
      {<Result dataObject={dataObject} />}



    </>
  )
}

export default App
