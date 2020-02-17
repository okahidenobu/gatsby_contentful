import React from "react"
// importを追記
import {graphql} from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = (props) => {
  const authorData = props.data.allContentfulPerson.edges[0].node
  return (
    <Layout>
      <SEO title="Home"/>
      <h1>{authorData.name}のページ</h1>
      <p>{authorData.name}</p>
      <img src={authorData.image.file.url}/>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
    query MyQueryAuthor($id: String) {
        allContentfulPerson(filter: {id: {eq: $id}}) {
            edges {
                node {
                    id
                    name
                    image {
                        file {
                            url
                        }
                    }
                }
            }
        }
    }

`
