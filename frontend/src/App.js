import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import HomeScreen from './components/screens/HomeScreen'
import ProductList from './components/ProductList'
import Product from './components/screens/ProductScreen'


const App = () => {
  return (
    <Router>
      <Header />
          <main className="py-3">
            <Container>
              <Route exact path="/" component={HomeScreen} />
              <Route path='/products' component={ProductList} />
              <Route path="/product/:id" component={Product} />
            </Container>
          </main>
      <Footer />
    </Router>
  );
}

export default App;
