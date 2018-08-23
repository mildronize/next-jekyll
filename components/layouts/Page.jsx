import Header from '../includes/Header'

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
}

const Page = (props) => (
  <div style={layoutStyle}>
    <Header />
    <h1>{props.data.title}</h1>
    {props.data.html}
  </div>
)

export default Page
