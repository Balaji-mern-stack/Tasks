import React from 'react'
import Cookies from 'js-cookie'

function CookiesExample() {
    localStorage.setItem("name","balaji")
    localStorage.setItem("value","true")
    sessionStorage.setItem("name","balaji")
    function acceptCookies(){
        Cookies.set("name","react",{expires:10})
        alert("accepted")
    }
  return (
    <div>
      <button onClick={() => localStorage.removeItem("name")}>remove</button>
      <button onClick={() => {localStorage.clear()}}>clear</button>
      {localStorage.getItem("name")}
      <button onClick={acceptCookies}>accept cookies</button>
      {Cookies.get("name")}
    </div>
  )
}

export default CookiesExample
// npm i js-cookie