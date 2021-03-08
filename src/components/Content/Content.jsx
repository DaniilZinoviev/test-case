import React from 'react'

const Content = ({ title, children }) => {
  return (
    <section className="content">
      <h3 className="content--title">{ title }</h3>
      <div className="content--inner">{ children }</div>
    </section>
  )
}

export default Content
