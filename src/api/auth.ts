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
