Skip to content
 
Search or jump to…

Pull requests
Issues
Marketplace
Explore
 @cma224 Sign out
1
7 0 benawad/hello-world-nextjs
 Code  Issues 0  Pull requests 0  Projects 0  Wiki  Insights
hello-world-nextjs/apollo/initApollo.js
9dbb8c3  on Jun 24, 2017
@benawad benawad Added graphql
     
39 lines (32 sloc)  1.09 KB
import { ApolloClient, createNetworkInterface } from "react-apollo";
import fetch from "isomorphic-fetch";

let apolloClient = null;

// Polyfill fetch() on the server (used by apollo-client)
if (!process.browser) {
  global.fetch = fetch;
}

function create(headers, initialState) {
  return new ApolloClient({
    initialState,
    ssrMode: !process.browser, // Disables forceFetch on the server (so queries are only run once)
    networkInterface: createNetworkInterface({
      uri: "https://graphql.contentful.com" + process.env.CTF_SPACE_ID + '?access_token=' + process.env.CTF_CDA_TOKEN, // Server URL (must be absolute)
      opts: {
        // Additional fetch() options like `credentials` or `headers`
        credentials: "same-origin"
      }
    })
  });
}

export default function initApollo(headers, initialState = {}) {
  // Make sure to create a new client for every server-side request so that data
  // isn't shared between connections (which would be bad)
  if (!process.browser) {
    return create(headers, initialState);
  }

  // Reuse client on the client-side
  if (!apolloClient) {
    apolloClient = create(headers, initialState);
  }

  return apolloClient;
}
