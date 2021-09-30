import React, { Component } from 'react'

import { Newsletter as NewsletterSubscription, StaticPage } from '../components'

class Newsletter extends Component {
  render() {
    return (
      <section>
        <StaticPage slug="newsletter" />
        <hr />
        <NewsletterSubscription />
      </section>
    )
  }
}

export default Newsletter