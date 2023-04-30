import { useState } from 'react'

function App() {
  const [altura, setAltura] = useState(0)
  const [peso, setPeso] = useState(0)
  const [result, setResult] = useState(null)
  const [classification, setClassification] = useState('');



  const calcular = () => {
    if(peso == '' || altura == ''){
      return;
    } else {
      const imc = peso / (altura * altura);
      setResult(imc.toFixed(2))
      
      if (imc < 18.5) {
        setClassification('Abaixo do peso');
      } else if (imc < 25) {
        setClassification('Peso normal');
      } else if (imc < 30) {
        setClassification('Sobrepeso');
      } else if (imc < 35) {
        setClassification('Obesidade grau 1');
      } else if (imc < 40) {
        setClassification('Obesidade grau 2');
      } else {
        setClassification('Obesidade grau 3');
      }
    }
    }
  return (
    
      <div>
          <h1>Calculadora de IMC</h1>
          <input onChange={(e) => setAltura(e.target.value)} placeholder= 'informe sua altura' type='number'/>
          <input onChange={(e) => setPeso(e.target.value)} placeholder= 'informe seu peso' type='number'/> <br/>
          <button onClick={calcular}> Calcular </button>

          {result && (
            <div>Seu IMC é: {result} voce esta com {classification}</div>
          )
          }
      </div>

    
  )
}


export default App
