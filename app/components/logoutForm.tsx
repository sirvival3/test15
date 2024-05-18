import { logout } from '../actions/actions'

export default function LogoutForm() {
  return (
    <form action={logout} className="inline-block">
        <button>logout</button>
    </form>
  )
}
