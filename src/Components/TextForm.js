import React , {useState} from 'react'

export default function TextForm(props) {

  const handleUpClick= ()=>{
    console.log("You clicked the button");
    let upper=text.toUpperCase();
    setText(upper);
    props.showAlert("The text is converted to Upper Case", "success");
  }

  const handleLoClick= ()=>{
    console.log("You clicked the button");
    let lower=text.toLowerCase();
    setText(lower);
    props.showAlert("The text is converted to Lower Case", "success");
  }

  const handleOnFind= (event)=>{
    setfword(event.target.value);
  }

  const handleOnReplace= (event)=>{
    setrWord(event.target.value);
  }

  const handleReplaceOnClick =() =>{
    console.log(text);
    let newText=text.replace(fWord,rWord);
    setText(newText);
    if(text.search(fWord)===-1)
    {
      props.showAlert(`Cannot find ${fWord} in the text so cannot be replaced `,"danger");
    }
    else
    {
      props.showAlert( `${fWord} has been updated to ${rWord}`, "success");
    }
    
  }

  const handleOnChange=(event)=>{
    console.log("Something changed");
    setText(event.target.value);
  }

  const [text,setText]= useState("Enter text here");

  const [fWord, setfword]=useState("");

  const [rWord, setrWord]=useState("");

  return (
    <div style={{color:`${props.mode==='light'?'black':'white'}`}}>
      {/* For text-area */}
      <div className="container my-3"  >
        <h1>{props.heading}</h1>
        <div className="container mb-3" >
          <textarea className="form-control" value={text} id="exampleFormControlTextarea1" style={
            {backgroundColor:props.mode==='light'?'white':'grey',
            color:props.mode==='light'?'black':'white'}} onChange={handleOnChange} rows="8"></textarea>
        </div>
      </div>

      {/* Buttons to convert to lower and upper case */}
      <div className='container my-3'>
        <button className="btn btn-primary mx-2" onClick={handleUpClick} >Convert text to Upper Case</button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick} >Convert text to Lower Case</button>
      </div>

      
      <div className='container my-2'>
        {/* To find a word */}
        <div className="row g-3 align-items-center my-3">
          <div className="col-auto">
            <label htmlFor="findWord" className="col-form-label">Enter Word to find:</label>
          </div>
          <div className="col-auto">
            <input type="text" id="findWord" style={
            {backgroundColor:props.mode==='light'?'white':'grey',
            color:props.mode==='light'?'black':'white'}} value={fWord} onChange={handleOnFind} className="form-control" aria-labelledby="passwordHelpInline" />
          </div>
        </div>
        
        {/* To replace the found word */}
        <div className="row g-3 align-items-center my-3">
          <div className="col-auto">
            <label htmlFor="replaceWord" className="col-form-label">Enter Word to Replace: </label>
          </div>
          <div className="col-auto">
            <input type="text" id="replaceWord" style={
            {backgroundColor:props.mode==='light'?'white':'grey',
            color:props.mode==='light'?'black':'white'}} value={rWord} onChange={handleOnReplace} className="form-control" aria-labelledby="passwordHelpInline" />
          </div>
        </div>

        {/* To convert the word */}
        <div className='my-3'>
          <button className="btn btn-primary" onClick={handleReplaceOnClick} >Replace</button>
        </div>

      </div>
      
      <div className="container my-3" data-bs-theme="blue">
        <h2>Your text Summary</h2>
        <p>
          You text has {text.split(" ").length} no. of words and {text.length} no. of characters.
        </p>
      </div>
    </div>
  )
}
