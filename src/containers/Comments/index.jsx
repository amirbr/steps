import {useEffect, useLayoutEffect, useState} from 'react'
import { nanoid } from 'nanoid';
import { Comment } from '../../components/Comment';
import { useFetch, useOnScrollBottom } from "../../hooks";
import './style.css'

const AMOUNT_ITEMS = 20
const URL_GET_COMMENTS = (page, amount) => `https://jsonplaceholder.typicode.com/comments?_start=${(page * amount) - amount}&_limit=${amount * page}`

const Comments = () => {
  const [page, setPage] = useState(1);
  const { loading, error, list, sendQuery} = useFetch();
  const { isAtBottom } = useOnScrollBottom(250);

  useLayoutEffect(() => {
    if(isAtBottom) {
      setPage(page + 1)
    }
  }, [isAtBottom])

  useEffect(() => {
    sendQuery('GET', URL_GET_COMMENTS(page, AMOUNT_ITEMS) )
  }, [page])

  return (
    <div className='containers-comments'>
      {loading ? <h2 className='loading'>Loading...</h2> :
        list.map(({ name, email, body }) => <Comment key={nanoid()} name={name} email={email} body={body}/>)
      }
      {error && <div>Error!</div>}
    </div>
  )
}

export { Comments }
