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
        My name is John Tucker. I have a BS in Petroleum Engineering from the
        University of Oklahoma.
      </p>
      <p>
        I worked at the{" "}
        <a href="https://rrc.texas.gov/">Railroad Commission of Texas</a> for
        seven years doing engineering work, which increasingly took on a
        software development and data analysis component. That became my
        facorite part of the job, and it because clear that was the direction I
        wanted my career to take. In 2018, I made the carreer-switch to a
        Software Engineer role focusing on web development and data engineering.
      </p>

      <span>My software interests include</span>
      <ul>
        <li>full stack web development</li>
        <li>data pipelines, databases, and analysis</li>
        <li>cloud computing services (e.g., AWS)</li>
      </ul>
      <p>
        In my free time, I enjoy spending time with my wife, Ashley and Son,
        Archie. I also like games (board and video) and the occasional home
        improvement project.
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
