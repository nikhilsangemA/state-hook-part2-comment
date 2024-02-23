import {useState} from 'react'
import {v4 as uuidv4} from 'uuid'
import CommentItem from '../CommentItem'
import {
  CommentsContainer,
  CommentsTitle,
  Form,
  NameInput,
  CommentTextInput,
  CommentButton,
  CommentsList,
} from './styledComponents'

const Comments = () => {
  const [name, setName] = useState('')
  const [commentText, setCommentText] = useState('')
  const [commentsList, setCommentsList] = useState([])

  const onChangeName = event => setName(event.target.value)
  const onChangeText = event => setCommentText(event.target.value)

  const submitChange = event => {
    event.preventDefault()
    const newData = {
      id: uuidv4(),
      name,
      commentText,
    }
    setCommentsList(prevState => [...prevState, newData])
    setName('')
    setCommentText('')
  }

  return (
    <CommentsContainer>
      <CommentsTitle>Comments</CommentsTitle>
      <Form onSubmit={submitChange}>
        <NameInput
          value={name}
          type="text"
          placeholder="Your name"
          onChange={onChangeName}
        />
        <CommentTextInput
          value={commentText}
          placeholder="Your comment"
          rows="6"
          onChange={onChangeText}
        />
        <CommentButton type="submit">Comment</CommentButton>
      </Form>
      <CommentsList>
        {commentsList.map(eachComment => (
          <CommentItem commentDetails={eachComment} key={eachComment.id} />
        ))}
      </CommentsList>
    </CommentsContainer>
  )
}

export default Comments
