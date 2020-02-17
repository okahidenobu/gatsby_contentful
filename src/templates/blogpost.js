import React from "react"
// importを追記
import {graphql} from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

export default (props) => {
  const pageData = props.data.allContentfulBlogPost.nodes[0]

  return (
    <Layout>
      <SEO title="Home"/>
      <p>{pageData.title}</p>
      <p>{pageData.body.body}</p>
    </Layout>
  )
}

export const query = graphql`
    query MyQuerythree($id: String) {
        allContentfulBlogPost(filter: {id: {eq: $id}}) {
            nodes {
                title
                id
                body {
                    body
                }
            }
        }
    }

`
