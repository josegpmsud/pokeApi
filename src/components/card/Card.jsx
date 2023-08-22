import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

function Card(props) {
  return (
    <>
      <li style="background: linear-gradient(90deg, #78C850 50%, #A040A0 50%)">
        <button type="button" class="monster-sprite sprite-1"></button>
        <span>{props.nombre}</span>
        </li>
    </>
  )
}

export default Card

