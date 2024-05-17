import { logout } from '../actions/actions'

export default function LogoutForm() {
  return (
    <form action={logout}>
        <button>logout</button>
    </form>
  )
}
