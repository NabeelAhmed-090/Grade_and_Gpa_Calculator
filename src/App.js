
// import 'bootstrap/dist/css/bootstrap.min.css';
import Grade from './components/Grade';
import Header from './components/Header';

//  color: "#45a29e"
function App() {
  return (
    <main style={mainStyle}>
      <div>
        <Header />
      </div>
      <Grade />
    </main >
  );
}

const mainStyle = {
  backgroundColor: "#1f2833",
  minHeight: "100vh"
}

export default App;

