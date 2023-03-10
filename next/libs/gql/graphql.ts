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

export type Ingredient = {
  __typename: "Ingredient";
  amount?: Maybe<Scalars["String"]>;
  item?: Maybe<Scalars["String"]>;
};

export type Ingredients = {
  __typename: "Ingredients";
  list?: Maybe<Array<Maybe<Ingredient>>>;
  servings?: Maybe<Scalars["String"]>;
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
  cookingTime?: Maybe<Scalars["String"]>;
  expense?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["ID"]>;
  ingredients?: Maybe<Ingredients>;
  introduction?: Maybe<Scalars["String"]>;
  subTitle?: Maybe<Scalars["String"]>;
  title?: Maybe<Scalars["String"]>;
  video?: Maybe<Video>;
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

export type Video = {
  __typename: "Video";
  source?: Maybe<Scalars["String"]>;
  thumbnailUrl?: Maybe<Scalars["String"]>;
  type?: Maybe<Scalars["String"]>;
};

export type DescriptionComponent_FragmentFragment = {
  __typename: "Recipe";
  id?: string | null;
  title?: string | null;
  subTitle?: string | null;
  introduction?: string | null;
  cookingTime?: string | null;
  expense?: string | null;
} & { " $fragmentName"?: "DescriptionComponent_FragmentFragment" };

export type IngredientElement_FragmentFragment = {
  __typename: "Ingredient";
  item?: string | null;
  amount?: string | null;
} & { " $fragmentName"?: "IngredientElement_FragmentFragment" };

export type IngredientListing_FragmentFragment = {
  __typename: "Ingredients";
  servings?: string | null;
  list?: Array<
    | ({ __typename: "Ingredient" } & {
        " $fragmentRefs"?: {
          IngredientElement_FragmentFragment: IngredientElement_FragmentFragment;
        };
      })
    | null
  > | null;
} & { " $fragmentName"?: "IngredientListing_FragmentFragment" };

export type VideoComponent_FragmentFragment = {
  __typename: "Video";
  thumbnailUrl?: string | null;
  source?: string | null;
  type?: string | null;
} & { " $fragmentName"?: "VideoComponent_FragmentFragment" };

export type GetRecipeQueryVariables = Exact<{
  recipeId?: InputMaybe<Scalars["ID"]>;
}>;

export type GetRecipeQuery = {
  __typename: "Query";
  recipe?:
    | ({
        __typename: "Recipe";
        id?: string | null;
        video?:
          | ({ __typename: "Video" } & {
              " $fragmentRefs"?: {
                VideoComponent_FragmentFragment: VideoComponent_FragmentFragment;
              };
            })
          | null;
        ingredients?:
          | ({ __typename: "Ingredients" } & {
              " $fragmentRefs"?: {
                IngredientListing_FragmentFragment: IngredientListing_FragmentFragment;
              };
            })
          | null;
      } & {
        " $fragmentRefs"?: {
          DescriptionComponent_FragmentFragment: DescriptionComponent_FragmentFragment;
        };
      })
    | null;
};

export const DescriptionComponent_FragmentFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "DescriptionComponent_Fragment" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "Recipe" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "title" } },
          { kind: "Field", name: { kind: "Name", value: "subTitle" } },
          { kind: "Field", name: { kind: "Name", value: "introduction" } },
          { kind: "Field", name: { kind: "Name", value: "cookingTime" } },
          { kind: "Field", name: { kind: "Name", value: "expense" } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<DescriptionComponent_FragmentFragment, unknown>;
export const IngredientElement_FragmentFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "IngredientElement_Fragment" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "Ingredient" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "item" } },
          { kind: "Field", name: { kind: "Name", value: "amount" } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<IngredientElement_FragmentFragment, unknown>;
export const IngredientListing_FragmentFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "IngredientListing_Fragment" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "Ingredients" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "servings" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "list" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "IngredientElement_Fragment" },
                },
              ],
            },
          },
        ],
      },
    },
    ...IngredientElement_FragmentFragmentDoc.definitions,
  ],
} as unknown as DocumentNode<IngredientListing_FragmentFragment, unknown>;
export const VideoComponent_FragmentFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "VideoComponent_Fragment" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "Video" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "thumbnailUrl" } },
          { kind: "Field", name: { kind: "Name", value: "source" } },
          { kind: "Field", name: { kind: "Name", value: "type" } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<VideoComponent_FragmentFragment, unknown>;
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
                {
                  kind: "Field",
                  name: { kind: "Name", value: "video" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "FragmentSpread",
                        name: {
                          kind: "Name",
                          value: "VideoComponent_Fragment",
                        },
                      },
                    ],
                  },
                },
                {
                  kind: "FragmentSpread",
                  name: {
                    kind: "Name",
                    value: "DescriptionComponent_Fragment",
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "ingredients" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "FragmentSpread",
                        name: {
                          kind: "Name",
                          value: "IngredientListing_Fragment",
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    ...VideoComponent_FragmentFragmentDoc.definitions,
    ...DescriptionComponent_FragmentFragmentDoc.definitions,
    ...IngredientListing_FragmentFragmentDoc.definitions,
  ],
} as unknown as DocumentNode<GetRecipeQuery, GetRecipeQueryVariables>;
