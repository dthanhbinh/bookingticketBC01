import logo from "./logo.svg";
import "./App.scss";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Header from "./Components/Header";
import Loading from "./Components/Loading";
import Lifecycle from "./pages/LifeCycle/Lifecycle";
import UseStateHook from "./pages/Hook/UseStateHook";
import BaiTapChonXe from "./pages/Hook/BaiTapChonXe";

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
          <Route
            exact
            path="/lifecycle"
            render={(propsRoute) => {
              //tham số chứ các props của thẻ route
              return (
                <div>
                  <h3>Commponent lifecycle</h3>
                  <Lifecycle {...propsRoute} />
                </div>
              );
            }}
            component={Lifecycle}
          />
          <Route exact path="/usestatedemo" component={UseStateHook} />
          <Route exact path="/baitapchonxe" component={BaiTapChonXe} />
          {/**Root mặc định để dưới cuối cùng của ứng dụng */}
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
