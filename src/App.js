import Grade from './screens/Grade';
import SGPA from './screens/SGPA';
import CGPA from './screens/CGPA';
import Header from './components/Header';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Footer from './components/Footer';
import './globalStyle.css'

const App = () => {
  return (
    <Router>
      <main style={mainStyle}>
        <div>
          <Header />
        </div>
        <Route path='/' component={Grade} exact />
        <Route path='/SGPA' component={SGPA} />
        <Route path='/CGPA' component={CGPA} />
        <Footer />
      </main >

    </Router>
  );
}

const mainStyle = {
  backgroundColor: "#1f2833",
  minHeight: "100vh"
}

export default App;


