import { useState } from "react";
import { useFetch } from "../../hooks";
import './style.css'

const URL_POST_COMMENT = (query) => `https://test.steps.me/test/testAssignComment&${query}`

const AddComment = () => {
  const [comment, setComment] = useState('')
  const { error, sendQuery } = useFetch()

  const handleSubmit = (event) => {
    event.preventDefault();
    setComment('')
    sendQuery('POST', URL_POST_COMMENT(comment))
    if(!error) {
      console.log('handleSubmit')
    } else {
      console.log('handle error')
    }
  }

  const handleChange = (event) => {
    setComment(event.target.value)
  }

  return (
    <form className='form-add-comment' onSubmit={handleSubmit}>
      <label>
        Your Comment:
        <textarea
          value={comment}
          onChange={handleChange}
          placeholder="Add Comment..."
        />
      </label>
      <input type="submit" value="Submit" />
    </form>
  )
}

export { AddComment }
