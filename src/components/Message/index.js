const Message = props => {
  const {status} = props

  return status ? 'Welcome User' : 'Please Login'
}

export default Message
