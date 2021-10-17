import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const AboutPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const author = data.site.siteMetadata.author.name

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title={"About: " + author} />
      <h1>{author}</h1>
      <p>Hello and welcome to my programming blog!</p>
      <p>
        My name is John Tucker.
        I have a BS in Petroleum Engineering from the University of Oklahoma.
        I'm currently working as a Software Engineer in Dallas, Texas doing full
        stack web development.
      </p>
    </Layout>
  )
}

export default AboutPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        author {
          name
        }
      }
    }
  }
`
