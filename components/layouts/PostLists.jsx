import Header from '../includes/Header'
import Link from 'next/link'

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
}

const PostLists = (props) => (
  <div style={layoutStyle}>
    <Header />
    <h1>{props.data.title}</h1>
    <ul>
      {props.data.data.map((post) => (
        <li key={post.link}>
          {post.date} » <Link href={post.link}><a>{post.title}</a></Link>
        </li>
      ))}
    </ul>
  </div>
)

export default PostLists
