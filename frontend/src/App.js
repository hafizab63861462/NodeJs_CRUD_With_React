import './App.css';
import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink, from } from "@apollo/client"
import { onError } from '@apollo/client/link/error'

const errorLink = onError(({ graphqlErrors, networkError }) => {

  if (graphqlErrors) {
    graphqlErrors.map(({ message, locatioin, path }) => {
      console.log('message', message)
      console.log('locatioin', locatioin)
      console.log('path', path)
      alert(`Graprhql error ${message}`)
      return true
    })
  }
})

const link = from([
  errorLink,
  new HttpLink({ uri: `http://localhost:4000/graphql` })
])

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link,
  defaultOptions: {
    watchQuery: {
      fetchPolicy: "cache-and-network",
    },
  },
})

function App() {
  return (
    <ApolloProvider client={client}>
    </ApolloProvider>
  );
}

export default App;
