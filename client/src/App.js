import Header from './components/Header';
import Clients from './components/Clients';
import Projects from './components/Projects';
import AddClientsModal from './components/AddClientsModal';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        clients: {
          merge(existing, incoming) {
            return incoming;
          }
        },
        projects: {
          merge(existing, incoming) {
            return incoming;
          }
        }
      }
    }
  }
});

const client = new ApolloClient({
  uri: 'http://localhost:5050/graphql',
  cache: cache
});

function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <BrowserRouter>
          <Header />
          <div className='container'>
            <AddClientsModal />
            <Projects />
            <Clients />
          </div>
        </BrowserRouter>
      </ApolloProvider>
    </>
  );
}

export default App;
