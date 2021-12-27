export const LOGIN = `
mutation Login($email: String!, $password: String!) {
  login(options: {email: $email, password: $password}) {
    code
    errors {
      field
      message
    }
    user {
      id
      userName
      createdAt
      updatedAt
      email
    }
    accessToken
    refreshToken
  }
}
`;

export const REGISTER = `
mutation Register($userName: String!, $email: String!, $password: String!) {
  register(options: {userName: $userName, email: $email, password: $password}) {
    code
    errors {
      field
      message
    }
    user {
      id
      userName
      email
      createdAt
      updatedAt
    }
  }
}
`;
