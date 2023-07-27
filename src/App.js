// import About from "./Components/About.js";
import Alert from "./Components/Alert.js";
import Navbar from "./Components/Navbar.js"
import TextForm from "./Components/TextForm.js"
import React, {useState} from 'react';
// import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [mode,setMode]=useState('light');

  const[alert,setAlert]=useState(null);

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    });
    setTimeout(()=>{
      setAlert(null);
    },1500)
  }

  const removeClasses=()=>{
    document.body.classList.remove("bg-dark")
    document.body.classList.remove("bg-primary")
    document.body.classList.remove("bg-success")
    document.body.classList.remove("bg-danger")
    document.body.classList.remove("bg-warning")
  }

  const toggleMode=(cls)=>{
    removeClasses();
    document.body.classList.add("bg-"+cls);
    if(mode==='light')
    {
      setMode('dark')
       document.body.style.backgroundColor="#192734"
      // showAlert('You have enabled the dark mode', "success");
      document.title="TextUtils-Dark Mode"
    }
    else
    {
      setMode('light')
       document.body.style.backgroundColor="white"
      // showAlert('You have enabled the light mode', "success");
      document.title="TextUtils-Light Mode"
    }
  }

  return (
  // <BrowserRouter>
  <>
  <Navbar  title="TextUtils" about="About TextUtils" mode={mode} toggleMode={toggleMode} />
  <Alert  alert={alert}/>
  {/* <div className="container my-4" mode={mode}> */}
          {/* <Routes> */}
            {/* <Route exact path="/about" element={<About />}></Route> */}
            {/* <Route
              exact path="/"
              element={ */}
                <TextForm
                  showAlert={showAlert}
                  heading="Enter Text to analyze "
                  mode={mode}
                />
              {/* }
            ></Route>
          </Routes>
        </div> */}
  </>
  // </BrowserRouter>
  );
}

export default App;
