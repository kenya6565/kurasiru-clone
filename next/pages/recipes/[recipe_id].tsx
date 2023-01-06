import { ApolloError } from "@apollo/client";
import { GetServerSideProps } from "next";
import { ParsedUrlQuery } from "querystring";
import { FooterContainerLower } from "../../components/footer/FooterContainerLower";
import { FooterContainerUpper } from "../../components/footer/FooterContainerUpper";
import { Header } from "../../components/header/Header";
import { client } from "../../libs/apolloClient";
import { graphql } from "../../libs/gql/gql";
import { GetRecipeQuery } from "../../libs/gql/graphql";

const GET_RECIPE = graphql(`
  query GetRecipe($recipeId: ID) {
    recipe(id: $recipeId) {
      id
      title 
      subTitle
    }
  }
`);

const notFoundError = (error: any): boolean => {
  return (
    error instanceof ApolloError &&
    error.graphQLErrors.find((gqlError) =>
      gqlError.message.includes("not found")
    ) !== undefined
  );
};

interface RecipeIdParams extends ParsedUrlQuery {
  recipe_id: string;
}

export const getServerSideProps: GetServerSideProps<
  GetRecipeQuery,
  RecipeIdParams
> = async (context) => {
  console.log("getServerSideProps from [recipe_id].tsx");

  if (!context.params) {
    throw Error("Could not get query parameters from URL");
  }

  try {
    const { data } = await client.query({
      query: GET_RECIPE,
      variables: {
        recipeId: context.params.recipe_id,
      },
    });
    return { props: { ...data } };
  } catch (error) {
    if (notFoundError(error)) {
      return {
        notFound: true,
      };
    } else if (error instanceof ApolloError) {
      console.log("---------------------------------");
      console.log(GET_RECIPE);
      console.log(error.clientErrors);
      console.log(error.networkError);
      console.log(error.graphQLErrors);
      throw Error("internal server error");
    } else {
      console.log("---------------------------------");
      console.log(error);
      throw Error("internal server error");
    }
  }
};

type RecipePageProps = GetRecipeQuery;

const RecipePage = ({ recipe }: RecipePageProps) => {
  return recipe ? (
    <>
      <Header />
      <div>{recipe.id}</div>
      <div>{recipe.title}</div>
      <div>{recipe.subTitle}</div>
      <FooterContainerUpper />
      <FooterContainerLower />
    </>
  ) : (
    <></>
  );
};

export default RecipePage;
