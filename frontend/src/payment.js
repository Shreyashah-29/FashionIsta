import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_live_51PT2PmRxgLrT02fVj9TryO4AzjwqoIuUC3hi2vpT2qJG0oRVi5WKc86WOXWyh3kyyOc94dWvBVM2vdXDGRAmtGn600cq4jfpPi');

export default function App() {
  const options = {
    // passing the client secret obtained from the server
    clientSecret: '{{CLIENT_SECRET}}',
  };

  return (
    <Elements stripe={stripePromise} options={options}>
      <CheckoutForm />
    </Elements>
  );
};