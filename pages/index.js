import fetch from 'isomorphic-unfetch'

const Index = (props) => (
    <div>
      Hey
      <p>{props.data.title}</p>
      <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: props.data.html }}
        />
    </div>
  )
  
Index.getInitialProps = async function (context) {
  const { id } = context.query
  const res = await fetch(`http://127.0.0.1:8080/posts/${id}/index.html`)
  const data = await res.json()

  console.log(`Fetched show: ${data.title}`)

  // return { data: {"html":"<div>i'm come from server rendering</div>" }}
  return { data }
}

export default Index


