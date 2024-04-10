import { NavLink } from 'react-router-dom'
import { sitemap } from '../sitemap'

function AppNavigation() {
    return (
        <nav>
            <ul className="flex items-center divide-x">
                {sitemap.map((el) => (
                    <li key={el.path} className="px-3 first:pl-0 last:pr-0">
                        <NavLink to={el.path}>{el.label}</NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default AppNavigation
