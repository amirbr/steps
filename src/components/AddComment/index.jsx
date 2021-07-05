import { useState } from "react";
import './style.css'

const AddComment = () => {
  const [comment, setComment] = useState('Add Comment...')

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('handleSubmit')
  }

  const handleChange = (event) => {
    setComment(event.target.value)
  }

  const onFocus = () => {
    setComment('')
  }

  const onBlur = () => {
    setComment('Add Comment...')
  }

  return (
    <form className='form-add-comment' onSubmit={handleSubmit}>
      <label>
        Your Comment:
        <textarea
          value={comment}
          onChange={handleChange}
          onFocus={onFocus}
          onBlur={onBlur}
        />
      </label>
      <input type="submit" value="Submit" />
    </form>
  )
}

export { AddComment }
