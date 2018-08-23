import fetch from 'isomorphic-unfetch'
import Page from '../components/layouts/Page'
import PostLists from '../components/layouts/PostLists'
import Post from '../components/layouts/Post'
import React from 'react'

export default class extends React.Component {

  static async getInitialProps(context) {
    let id;
    if (context.query.id === undefined) {
      id = "/"
    } else {
      id = context.query.id.replace("//", "/")
    }
    const fetch_url = `http://127.0.0.1:9001${id}/index.html`
    console.log(fetch_url)
    const res = await fetch(fetch_url)
    const data = await res.json()

    // console.log(`Fetched show: ${data.layout}`)
    // console.log(data.data)

    return { json: data }
  }

  render() {
    const layoutStyle = {
      margin: 20,
      padding: 20,
      border: '1px solid #DDD'
    }

    let layout;

    if (this.props.json.layout == "page") { layout = <Page data={this.props.json} />; } 
    else if (this.props.json.layout == "posts") { layout = <PostLists data={this.props.json} />;} 
    else if (this.props.json.layout == "post") { layout = <Post data={this.props.json} />;} 
    else {layout = null;}

    return (
      <div>
        <div>{layout}</div>
      </div>
    )
  }
}



