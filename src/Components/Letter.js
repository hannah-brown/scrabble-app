import {useState} from 'react'


const Letter = ({letter, value, onUpdate}) => {
    const [isDouble, setIsDouble] = useState(false)

    const toggleDouble = () => {
        setIsDouble(!isDouble)
        !isDouble ? onUpdate(value) : onUpdate(-value)
    }

    return (
        <>
        <button 
            className='btn' 
            onClick={toggleDouble} 
            style={isDouble ? {backgroundColor: 'blue'} : {backgroundColor: 'black'}}>
            {letter} {isDouble ? <sub>{value * 2 }</sub> : <sub>{value}</sub>}
        </button>
        </>
    )
}


export default Letter
