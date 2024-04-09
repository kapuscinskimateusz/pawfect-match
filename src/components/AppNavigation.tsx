import { NavLink } from 'react-router-dom'
import { sitemap } from '../sitemap'

function AppNavigation() {
    return (
        <nav>
            <ul>
                {sitemap.map((el) => (
                    <li key={el.path}>
                        <NavLink to={el.path}>{el.label}</NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default AppNavigation
