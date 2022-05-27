import React from 'react'
import { Link } from 'react-router-dom'

const MainNavigation = () => {
  return (
    <header>
        <div>
            <ul>
                <li>
                    <Link to='/'>All Meetup</Link>
                </li>
                <li>
                    <Link to='/new-meetup'>New Meetup</Link>
                </li>
                <li>
                    <Link to='/favorite'>Favorite</Link>
                </li>
            </ul>
        </div>
    </header>
  )
}

export default MainNavigation