import {useState} from 'react'
import './App.css'

const App = () => {

  const[length,setLength] = useState(8)
  const[uppercase,setUppercase] = useState(true)
  const[lowercase,setLowercase] = useState(true)
  const[numbers,setNumbers] = useState(true)
  const[symbols,setSymbols] = useState(true)
  const[password,setPassword] = useState('')

  function generatePassword(){
    let charset = '';
    if(uppercase) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if(lowercase) charset += 'abcdefghijklmnopqrstuvwxyz';
    if(numbers) charset += '0123456789';
    if(symbols) charset += '!@#$%^&*()_-+=';

    let generatedPassword = ''
    for(let i=0; i < length; i++){
      const randomIndex = Math.floor(Math.random()*charset.length);
      generatedPassword += charset[randomIndex];
    }
    setPassword(generatedPassword);
  };

  function copy(){
    navigator.clipboard.writeText(password);
    alert('Password Copied')
  }

  return (
    <>
      <div className='password-generator'>
        <h2>Strong Password Generator</h2>
        <div className='input-group'>
          <label htmlFor='length'>Password Length:</label>
          <input type='number' id='length' value={length} onChange={(e) => setLength(e.target.value)} />
        </div>
        <div className='checkbox-group'>
          <input type='checkbox' id='upper' checked={uppercase} onChange={(e) => setUppercase(e.target.checked) } />
          <label htmlFor='upper'>Include Uppercase</label>
        </div>
        <div className='checkbox-group'>
          <input type='checkbox' id='lower' checked={lowercase} onChange={(e) => setLowercase(e.target.checked)} />
          <label htmlFor='lower'>Include Lowercase</label>
        </div>
        <div className='checkbox-group'>
          <input type='checkbox' id='number' checked={numbers} onChange={(e) => setNumbers(e.target.checked)} />
          <label htmlFor='number'>Include Numbers</label>
        </div>
        <div className='checkbox-group'>
          <input type='checkbox' id='symbol' checked={symbols} onChange={(e) => setSymbols(e.target.checked)} />
          <label htmlFor='symbol'>Include Symbols</label>
        </div>
        <button className='generated-btn' onClick={generatePassword}>Generate Password</button>
        <div className='generated-password'>
          <input type='text' readOnly value={password} />
          <button className='copy-btn' onClick={copy}>Copy</button>
        </div>
      </div>
    </>
  )
}

export default App