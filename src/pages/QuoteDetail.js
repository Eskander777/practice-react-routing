import { Fragment } from "react";
import { useRouteMatch, Route, Link } from "react-router-dom";

import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import NoQuotesFound from "../components/quotes/NoQuotesFound";

const QuoteDetail = (props) => {
  const match = useRouteMatch();

  const quoteToShow = props.quotes.find(
    (quote) => quote.id === match.params.quoteId
  );

  if (!quoteToShow) return <NoQuotesFound />;

  return (
    <Fragment>
      <HighlightedQuote text={quoteToShow.text} author={quoteToShow.author} />
      <Route path={`${match.path}/comments`}>
        <Comments />
      </Route>
      {/* Render conditionaly with Route instead conditions in state */}
      <Route path={match.path} exact>
        <div className={"centered"}>
          <Link className="btn--flat" to={`${match.url}/comments`}>
            Load Comments
          </Link>
        </div>
      </Route>
    </Fragment>
  );
};

export default QuoteDetail;
