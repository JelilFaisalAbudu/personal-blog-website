import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import {
  container,
  navLinks,
  navLinkItem,
  navLinkText,
  heading,
  siteTitle,
} from './layout.module.css';

const Layout = ({ pageTitle, children }) => {
  const {
    site: {
      siteMetadata: {
        title
      }
    }
  } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  console.log(title);
  
  return (
    <div className={container}>
      <title>{pageTitle} | {title}</title>
      <header>
        <h1 className={siteTitle}>{title}</h1>
      </header>
      <nav>
        <ul className={navLinks}>
          <li className={navLinkItem}>
            <Link to="/" className={navLinkText}>Home</Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/about" className={navLinkText}>About</Link>
          </li>
        </ul>
      </nav>
      <main>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>
      <footer>
        This project is under the construction by Jelil.
      </footer>
    </div>
  );
}

export default Layout;