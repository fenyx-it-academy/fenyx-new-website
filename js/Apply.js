import React from 'react'
import { Link } from 'gatsby'

const Apply = () => (
  <section id="two">
    <div className="inner center">
      <header className="">{/* <h2>Made Up Your Mind?</h2> */}</header>
      <br />
      <ul className="actions center">
        <li>
          <Link to="/apply" className="button next">
            Click to apply
          </Link>
        </li>
      </ul>
    </div>
  </section>
)

export default Apply
