import Link from 'next/link'

const linkStyle = {
  marginRight: 15
}

const Header = () => (
  <div>
    <a href="/" style={linkStyle}>Home</a>
    <Link href="/blog">
      <a style={linkStyle}>Blog</a>
    </Link>
    <Link href="/posts/introduction">
    <a style={linkStyle}>intro blog</a>
  </Link>
  </div>
)

export default Header
