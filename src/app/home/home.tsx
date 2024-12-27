import { Link, Outlet} from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import RouterSpinner from '../common/router-spinner';

export function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-blue-400 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            <div className="flex space-x-4">
              <Link to="./dashboard" className="text-gray-700 hover:text-gray-900">
                Home
              </Link>
              <Link to="./products" className="text-gray-700 hover:text-gray-900">
                Products
              </Link>
              <Link to="./about" className="text-gray-700 hover:text-gray-900">
                About
              </Link>
              <RouterSpinner/>
            </div>
          </div>
          
        </div>
        
      </nav>
      <main className="max-w-7xl mx-auto px-4 py-6">
        <Outlet/>      </main>
        <TanStackRouterDevtools />
    </div>
  )
}

export default Home;