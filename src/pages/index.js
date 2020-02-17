import React from "react"
// importを追記
import {graphql, Link} from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = (props) => {
  return (
    <Layout>
      <SEO title="Home"/>
      {props.data.allContentfulBlogPost.nodes.map(({id, title}) => (
        <ul>
          <li key={id}>
            <Link to={`/blogpost/${id}`}>{title}</Link>
          </li>
        </ul>
      ))}
      <Link to="/authors/">著者一覧ページへ</Link>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
    query MyQuery {
        allContentfulBlogPost {
            nodes {
                title
                id
            }
        }
    }
`
