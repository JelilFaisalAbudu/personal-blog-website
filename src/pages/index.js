import * as React from "react"
import { Link } from "gatsby";

// markup
const IndexPage = () => {
  return (
    <main >
      <title>Home Page</title>

        <h1>Welcome to my blog website!</h1>
        <Link to="/about">About</Link>
        <p>
          I'm currently building the site. Please come back later for an exiting articles of your interest.
        </p>
        <p>
          Cheers...
        </p>

    </main>
  )
}

export default IndexPage;
