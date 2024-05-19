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

  const handleChange = (e) => {
    if (typeof window !== "undefined" && window.localStorage) {
      localStorage.setItem("myvar", e.target.value)
    }
    setMyvar(e.target.value)
  }

  return (
    <div>
      <div>Test</div>
      <form>
        <input type='text' onChange={handleChange} value={myvar} />
      </form>
    </div>
  )
}
