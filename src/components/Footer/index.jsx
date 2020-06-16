import Logout from '../Logout'

export default function Footer({
  handleLogout,
  isLogged
}) {

  return (
    isLogged && (
      <Logout
        handleLogout={handleLogout}
      />
    )
  )
}