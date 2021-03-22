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
import UseEffectHome from "./pages/Hook/UseEffectHome";
import ReduxHookHome from "./pages/Hook/ReduxHookHome";
import Details from "./pages/Details/Details";
import HookUseCallBack from "./pages/Hook/HookUseCallBack";
import HookMemo from "./pages/Hook/HookUseMemo";
import UseRef from "./pages/Hook/UseRef";
import ParentComponent from "./pages/HOC/ParentComponent";
import { HomeTemplate } from "./templates/HomeTemplate";
import { AdminTemplate } from "./templates/AdminTemplate";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* <Header /> */}
        <Loading />
        <Switch>
          {/* <HomeTemplate exact path="/home" component={Home} /> */}
          {/**exact tìm đúng tên đường dẫn */}
          <HomeTemplate exact path="/home" Component={Home} />
          <HomeTemplate exact path="/contact" Component={Contact} />
          <AdminTemplate exact path="/login" Component={Login} />
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
          <Route exact path="/useeffecthome" component={UseEffectHome} />
          <Route exact path="/ReduxHookHome" component={ReduxHookHome} />
          <Route exact path="/Details/:id" component={Details} />
          <Route exact path="/usecallback" component={HookUseCallBack} />
          <Route exact path="/usememo" component={HookMemo} />
          <Route exact path="/useref" component={UseRef} />
          <Route exact path="/demoprops" component={ParentComponent} />
          {/**Root mặc định để dưới cuối cùng của ứng dụng */}
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
