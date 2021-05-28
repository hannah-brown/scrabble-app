import Header from './Components/Header'
import ScoreWord from './Components/ScoreWord'
import {useState} from 'react'
import Letter from './Components/Letter'
import ScoreButton from './Components/ScoreButton'

function getValue(e) {
  var val = 0
  for (const value in letterValues) {
    if(letterValues[value].includes(e)) 
    val = parseInt(value)
  }
  return val
}

const letterValues = {
  1: ['a','e','i','o','u','l','n','r','s','t'],
  2: ['d','g'],
  3: ['b','c','m','p'],
  4: ['f','h','v','w','y'],
  5: ['k'],
  8: ['j','x'],
  10: ['q','z']
}

const App = () => {
  const [score, setScore] = useState(0)
  const [word, setWord] = useState('')

  const calucateScore = ({text}) => {
    var count = 0 
    text.toLowerCase().split('').forEach(letter => {
      count = count + getValue(letter)
    })
    setWord(text.toLowerCase())
    setScore(count)
  }

  const increaseScore = (number) => {
    setScore(score + number)
  }
  
  return (
    <div className="container">
      <Header/>
      <ScoreWord onAdd={calucateScore}/>

      {word.split('').map((letter, index) => (
          <Letter 
          key={index} 
          letter={letter} 
          value={getValue(letter)}
          onUpdate={increaseScore}
          /> 
      ))}

      {score !== 0 && <ScoreButton score={score} />}
      
    </div>
  )
}

export default App;