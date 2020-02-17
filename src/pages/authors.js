import React from "react"
// importを追記
import {useStaticQuery, graphql, Link} from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
      query MyQueryAuthors {
          allContentfulPerson {
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
  `)
  return (
    <Layout>
      <SEO title="Home"/>
      {
        data.allContentfulPerson.edges.map(({node}) => {
            return (
              <div key={node.id}>
                <Link to={'/author/' + node.id}>{node.name}</Link>
              </div>
            )
          }
        )
      }
    </Layout>
  )
}

export default IndexPage