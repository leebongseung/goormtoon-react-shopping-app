import './App.css'
import CartPage from './pages/CartPage/CartPage.js'
import Contents from './pages/Contents/index.js'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import ItemDetailPage from './pages/ItemDetailPage'

import LayoutPage from './pages/LayoutPage'
import CartCheckout from './pages/CartCheckoutPage'
import SignUp from './pages/RegisterPage/sign-up/SignUp'
import SignIn from './pages/LoginPage/sign-in/SignIn'

function App() {
	// const [products, setProducts] = useState([]);

	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<LayoutPage />}>
					<Route index element={<Contents />} />
					<Route path="cart" element={<CartPage />} />
					<Route path="/item" element={<ItemDetailPage />} />
					<Route path="/login" element={<SignIn />} />
					<Route path="/register" element={<SignUp />} />
					<Route path="/cartCheckout" element={<CartCheckout />} />
				</Route>
			</Routes>
		</BrowserRouter>
	)
}

export default App
