"use client"

import { useFormState } from "react-dom"

import { login } from "../actions/actions"

export default function LoginForm() {
  const [state, formAction] = useFormState<any, FormData>(login, undefined)

  return (
    <form action={formAction}>
      <input type='text' name='username' required placeholder='username' />
      <input type='password' name='password' required placeholder='password' />
      <button>Login</button>
      {state?.error && <p>{state.error}</p>}
    </form>
  )
}
