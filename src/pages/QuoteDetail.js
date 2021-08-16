import { Fragment } from "react";
import { useParams, useRouteMatch, Route } from "react-router-dom";

import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";

const QuoteDetail = (props) => {
  const params = useParams();
  const match = useRouteMatch();

  const quoteToShow = props.quotes.find((quote) => quote.id === params.quoteId);

  return (
    <Fragment>
      <h1>Quote Detail Page</h1>
      <HighlightedQuote text={quoteToShow.text} author={quoteToShow.author} />
      <Route path={`${match.path}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  );
};

export default QuoteDetail;
