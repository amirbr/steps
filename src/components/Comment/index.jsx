import './style.css'
import userPlaceholder from '../../assets/user_placeholder.png'

const Comment = ({ name, email, body }) => (
  <div className='comment'>
    <img src={userPlaceholder} alt=""/>
    <div>
      <div className='name'>{name}</div>
      <div className='email'>{email}</div>
      <div className='body'>{body}</div>
    </div>
  </div>
)

export { Comment }
