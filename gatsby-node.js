/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it


//https://qiita.com/kenzoukenzou104809/items/0240058df733ab8ecf27から転用。動的ルーティング？

const path = require(`path`)
const slash = require(`slash`)
exports.createPages = async function ({graphql, actions}) {
  const {createPage} = actions

  //template/blogpost.js/〜を作成
  const {data: postData} = await graphql(
    `
    query {
  allContentfulBlogPost {
    edges {
      node {
        id
        title
        body {
          body
        }
        author {
          id
        }
      }
    }
  }
  }
  `)
  postData.allContentfulBlogPost.edges.map(({node}) => {
    createPage({
      path: `/blogpost/${node.id}/`,
      component: slash(path.resolve("./src/templates/blogpost.js")),
      context: {
        slug: node.title,
        id: node.id
      }
    })
  })

  //template/author.js/〜を作成
  const {data: authorData} = await graphql(
    `
    query {
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
  authorData.allContentfulPerson.edges.map(({node}) => {
    createPage({
      path: `/author/${node.id}/`,
      component: slash(path.resolve("./src/templates/author.js")),
      context: {
        image: node.image.file.url,
        id: node.id
      }
    })
  })


}