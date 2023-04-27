import React from 'react'

export default function User() {
  let user = sessionStorage.getItem("user");
  return (
    <div>
      <h1>Welcome to the dashboard, {user}.</h1>
      <p>This page is not finished yet.</p>
      <p>Backend functionality can be seen using PostMan tool.</p>
    </div>
  )
}
