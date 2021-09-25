import Grade from './components/Grade';
import SGPA from './components/SGPA';
import CGPA from './components/CGPA';
import Header from './components/Header';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Footer from './components/Footer';

//  color: "#45a29e"
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


