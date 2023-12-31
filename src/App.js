import { makeStyles } from "@material-ui/core";
import Homepage from "./pages/HomePage";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import CoinPage from "./pages/CoinPage";
import Header from "./components/Header";
import News from "./components/News";

const useStyles = makeStyles(() => ({
  App: {
    backgroundColor: "rgb(0, 0, 0)",
    color: "white",
    minHeight: "100vh",
  },
}));

function App() {
  const classes = useStyles();

  return (
    <BrowserRouter>
      <div className={classes.App}>
        <Header />
        <Route path="/" component={Homepage} exact />
        <Route path="/coins/:id" component={CoinPage} exact />
        <Route path="/news" component={News} exact />
      </div>
    </BrowserRouter>
  );
}

export default App;
