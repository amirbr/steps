import { useState } from 'react'
import { nanoid } from 'nanoid';
import { Comment } from '../../components/Comment';
import { useFetch } from "../../hooks";
import './style.css'

const AMOUNT_ITEMS = 20

const Comments = () => {
  const [page, setPage] = useState(1);
  const { loading, error, list } = useFetch(page, AMOUNT_ITEMS)

  return (
    <div className='containers-comments'>
      {loading ? 'loading...' :
        list.map(({ name, email, body }) => <Comment key={nanoid()} name={name} email={email} body={body}/>)
      }
      {error && <div>Error!</div>}
    </div>
  )
}

export { Comments }
