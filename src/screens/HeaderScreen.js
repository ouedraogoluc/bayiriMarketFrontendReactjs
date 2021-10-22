import React from 'react'

export default function HeaderScreen() {
    return (
        <header className="row">
        <div>
          <a href="/" className="brand" >BayiriMarket</a>
        </div>
        <div>
          <a href="/cart">cart</a>
          <a href="/signin">sign In</a>
        </div>
      </header>
    )
}
