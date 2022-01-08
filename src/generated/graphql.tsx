import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type FieldError = {
  __typename?: 'FieldError';
  field: Scalars['String'];
  message: Scalars['String'];
};

export type LoginInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  login: UserResponse;
  register: UserResponse;
};

export type MutationLoginArgs = {
  options: LoginInput;
};

export type MutationRegisterArgs = {
  options: UserNamePasswordInput;
};

export type Query = {
  __typename?: 'Query';
  hello: Scalars['String'];
};

export type UserEntity = {
  __typename?: 'UserEntity';
  createdAt: Scalars['String'];
  email: Scalars['String'];
  id: Scalars['String'];
  updatedAt: Scalars['String'];
  userName: Scalars['String'];
};

export type UserNamePasswordInput = {
  email: Scalars['String'];
  password: Scalars['String'];
  userName: Scalars['String'];
};

export type UserResponse = {
  __typename?: 'UserResponse';
  accessToken?: Maybe<Scalars['String']>;
  code: Scalars['Float'];
  errors?: Maybe<Array<FieldError>>;
  refreshToken?: Maybe<Scalars['String']>;
  user?: Maybe<UserEntity>;
};

export type LoginMutationVariables = Exact<{
  options: LoginInput;
}>;

export type LoginMutation = {
  __typename?: 'Mutation';
  login: {
    __typename?: 'UserResponse';
    code: number;
    accessToken?: string | null | undefined;
    refreshToken?: string | null | undefined;
    errors?:
      | Array<{ __typename?: 'FieldError'; field: string; message: string }>
      | null
      | undefined;
    user?:
      | {
          __typename?: 'UserEntity';
          id: string;
          userName: string;
          createdAt: string;
          updatedAt: string;
          email: string;
        }
      | null
      | undefined;
  };
};

export type RegisterMutationVariables = Exact<{
  options: UserNamePasswordInput;
}>;

export type RegisterMutation = {
  __typename?: 'Mutation';
  register: {
    __typename?: 'UserResponse';
    code: number;
    errors?:
      | Array<{ __typename?: 'FieldError'; field: string; message: string }>
      | null
      | undefined;
    user?:
      | {
          __typename?: 'UserEntity';
          id: string;
          userName: string;
          email: string;
          createdAt: string;
          updatedAt: string;
        }
      | null
      | undefined;
  };
};

export const LoginDocument = gql`
  mutation Login($options: LoginInput!) {
    login(options: $options) {
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

export function useLoginMutation() {
  return Urql.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument);
}
export const RegisterDocument = gql`
  mutation Register($options: UserNamePasswordInput!) {
    register(options: $options) {
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

export function useRegisterMutation() {
  return Urql.useMutation<RegisterMutation, RegisterMutationVariables>(
    RegisterDocument
  );
}
