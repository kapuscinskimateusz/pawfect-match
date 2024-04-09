import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import AppLayout from './components/AppLayout'
import Home from './pages/Home'
import Animals from './pages/Animals'

const router = createBrowserRouter([
    {
        element: <AppLayout />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/animals',
                element: <Animals />,
            },
        ],
    },
])

function App() {
    return <RouterProvider router={router} />
}

export default App
