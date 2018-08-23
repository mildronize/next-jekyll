import Header from '../includes/Header'

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
}

const Post = (props) => (
  <div style={layoutStyle}>
    <Header />
    <h1>{props.data.title}</h1>
    <div dangerouslySetInnerHTML={{ __html: props.data.data.html }} />
    <div>{props.data.data.date}</div>
  </div>
)

export default Post
