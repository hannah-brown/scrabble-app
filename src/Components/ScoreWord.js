import { useState } from 'react'

const ScoreWord = ({onAdd}) => {
    const [text, setText] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()

        if(!text){
            alert('Please Enter Word')
            return
        }
        onAdd({text})

        setText('')
    }

    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <input type='text' placeholder='Enter Word' value={text} onChange={(e)=> setText(e.target.value)}/>
            </div>
            <input type='submit' value='Score' className='btn btn-block'></input>
        </form>
    )
}

export default ScoreWord
