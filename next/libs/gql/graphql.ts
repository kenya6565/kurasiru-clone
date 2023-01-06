/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";
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
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Mutation = {
  __typename: "Mutation";
  createTodo: Todo;
};

export type MutationCreateTodoArgs = {
  input: NewTodo;
};

export type NewTodo = {
  text: Scalars["String"];
  userId: Scalars["String"];
};

export type Query = {
  __typename: "Query";
  recipe?: Maybe<Recipe>;
  todos: Array<Todo>;
};

export type QueryRecipeArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type Recipe = {
  __typename: "Recipe";
  id?: Maybe<Scalars["ID"]>;
  introduction?: Maybe<Scalars["String"]>;
  subTitle?: Maybe<Scalars["String"]>;
  title?: Maybe<Scalars["String"]>;
};

export type Todo = {
  __typename: "Todo";
  done: Scalars["Boolean"];
  id: Scalars["ID"];
  text: Scalars["String"];
  user: User;
};

export type User = {
  __typename: "User";
  id: Scalars["ID"];
  name: Scalars["String"];
  pictureUrl?: Maybe<Scalars["String"]>;
};

export type GetRecipeQueryVariables = Exact<{
  recipeId?: InputMaybe<Scalars["ID"]>;
}>;

export type GetRecipeQuery = {
  __typename: "Query";
  recipe?: {
    __typename: "Recipe";
    id?: string | null;
    title?: string | null;
    subTitle?: string | null;
    introduction?: string | null;
  } | null;
};

export const GetRecipeDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "GetRecipe" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "recipeId" },
          },
          type: { kind: "NamedType", name: { kind: "Name", value: "ID" } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "recipe" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "recipeId" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "title" } },
                { kind: "Field", name: { kind: "Name", value: "subTitle" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "introduction" },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetRecipeQuery, GetRecipeQueryVariables>;
