import logo from "./logo.svg";
import "./App.scss";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Header from "./Components/Header";
import Loading from "./Components/Loading";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Loading />
        <Switch>
          {/**exact tìm đúng tên đường dẫn */}
          <Route exact path="/home" component={Home} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          {/**Root mặc định để dưới cuối cùng của ứng dụng */}
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
