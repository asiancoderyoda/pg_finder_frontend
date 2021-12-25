import { createClient } from 'urql';

export const client = createClient({
  url: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8092/graphql',
  fetchOptions: () => {
    const token = '';
    return {
      headers: { authorization: token ? `Bearer ${token}` : '' },
    };
  },
});
