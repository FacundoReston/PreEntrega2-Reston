import "./CartWidget.css"

import React from 'react'

import { BsCart2 } from "react-icons/bs"

import { Link } from "react-router-dom"

const CartWidget = () => {
  return (
    <div className="container-cart">
      <Link to="/cart">
        <BsCart2 size={35} color={"#001B38"} />
      </Link>
    </div>
  )
}

export default CartWidget