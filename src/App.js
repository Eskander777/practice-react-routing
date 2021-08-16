import { Route, Switch, Redirect } from "react-router-dom";

import Layout from "./components/layout/Layout";
import AllQuotes from "./pages/AllQuotes";
import QuoteDetail from "./pages/QuoteDetail";
import NewQuote from "./pages/NewQuote";

const DUMMY_QUOTES = [
  { id: "q1", author: "Max", text: "Learning React is fun!" },
  { id: "q2", author: "Maximilian", text: "Learning React is great!" },
];

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/quotes/:quoteId">
          <QuoteDetail quotes={DUMMY_QUOTES} />
        </Route>
        <Route path="/quotes">
          <AllQuotes quotes={DUMMY_QUOTES} />
        </Route>
        <Route path="/new-quote">
          <NewQuote />
        </Route>
        <Route>
          <Redirect to="/quotes" />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
