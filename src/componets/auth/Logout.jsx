import React, { useContext } from 'react'
import { Navigate, useNavigate } from 'react-router'
import { Link } from 'react-router-dom'
import { AuthContext } from './AuthProvider'

const Logout = () => {

    const auth = useContext(AuthContext)
	const navigate = useNavigate()

	const handleLogout = () => {
		auth.handleLogout()
		Navigate("/", { state: { message: " You have been logged ouy!" } })
	}
  return (
    <>
			<li>
				<Link className="dropdown-item" to={"/profile"}>
					Profile
				</Link>
			</li>
			<li>
				<hr className="dropdown-divider" />
			</li>
			<button className="dropdown-item" onClick={handleLogout}>
				Logout
			</button>
		</>
  )
}

export default Logout