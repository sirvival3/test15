// SKAL SLETTES
"use client"

import { useState, useEffect } from "react"

export default function Test() {
  const [myvar, setMyvar] = useState<string>("")

  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      let savedValue: string = window.localStorage.getItem("myvar") || ""
      setMyvar(savedValue)
    }
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (typeof window !== "undefined" && window.localStorage) {
      localStorage.setItem("myvar", e.target.value)
    }
    setMyvar(e.target.value)
  }

  return (
    <div>
      <input type='text' onChange={handleChange} value={myvar} />
    </div>
  )
}
