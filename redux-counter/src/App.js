import './App.css';
import { decrement, increment } from './store';
import { connect } from "react-redux"

function App({ count, incrementerClicked, decrementerClicked }) {

  return (
    <main>
      <p>{count}</p>
      <button id='incrementer' onClick={incrementerClicked}>+</button>
      <button id='decrementer' onClick={decrementerClicked}>-</button>
    </main>

  )

}

const mapStateToProps = state => ({ count: state })
const mapDispatchToProps = {
  incrementerClicked: increment,
  decrementerClicked: decrement
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
