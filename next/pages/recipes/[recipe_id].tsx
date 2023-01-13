import { ApolloError } from "@apollo/client";
import { GetServerSideProps } from "next";
import { ParsedUrlQuery } from "querystring";
import { FooterContainerLower } from "../../components/footer/FooterContainerLower";
import { FooterContainerUpper } from "../../components/footer/FooterContainerUpper";
import { Header } from "../../components/header/Header";
import { client } from "../../libs/apolloClient";
import { graphql } from "../../libs/gql/gql";
import { GetRecipeQuery } from "../../libs/gql/graphql";
import { css } from "@emotion/react";

const GET_RECIPE = graphql(`
  query GetRecipe($recipeId: ID) {
    recipe(id: $recipeId) {
      id
      title
      subTitle
      introduction
      video {
        thumbnailUrl
        source
      }
      ingredients {
        servings
        list {
          item
          amount
        }
      }
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
interface IngredientElementPros {
  item: string | null | undefined;
  amount: string | null | undefined;
}

const IngredientElement = ({ item, amount }: IngredientElementPros) => {
  return (
    <div
      css={css`
        display: flex;
        justify-content: space-between;
        padding: 10px 0px;
        border-bottom: solid 1px #f4f2f0;
      `}
    >
      <div>{item}</div>
      <div>{amount}</div>
    </div>
  );
};

const RecipePage = ({ recipe }: RecipePageProps) => {
  if (!recipe || !recipe.ingredients || !recipe.ingredients.list) {
    return <></>;
  } else {
    return (
      <>
        <Header />
        <main
          css={css`
            display: grid;
            justify-content: center;
            grid-template-columns: 680px 300px;
            column-gap: 40px;
            background-color: white;
          `}
        >
          <section
            css={css`
              grid-column: 1 / 2;
            `}
          >
            <div
              css={css`
                display: flex;
                flex-direction: column;
                gap: 20px;
              `}
            >
              <video
                width="560"
                height="560"
                preload="auto"
                poster={recipe.video.thumbnailUrl}
                controls="controls"
                controlslist="nodownload"
                muted="muted"
                class="native"
                data-v-2932eb4e=""
              >
                <source
                  src={recipe.video.source}
                  type="video/mp4"
                  data-v-049f9628=""
                />
                <p data-v-049f9628="">
                  動画を再生するには、videoタグをサポートしたブラウザが必要です。
                </p>
              </video>

              <div
                css={css`
                  margin-bottom: 20px;
                `}
              >
                <div
                  css={css`
                    font-size: 22px;
                    font-weight: 700;
                  `}
                >
                  {recipe.title}レシピ・作り方
                </div>
                <div
                  css={css`
                    font-size: 12px;
                    margin-bottom: 20px;
                    color: #635f5a;
                  `}
                >
                  {recipe.subTitle}
                </div>
                <div
                  css={css`
                    margin-bottom: 20px;
                  `}
                >
                  {recipe.introduction}
                </div>
                <div>調理時間：30分</div>
                <div>費用目安：500円前後</div>
                <button
                  css={css`
                    width: 300px;
                    height: 50px;
                    font-size: 14px;
                    font-weight: 700;
                    background-color: f0efef;
                    border: none;
                    border-radius: 25px;
                  `}
                >
                  保存する
                </button>
              </div>
              <div>
                <div>
                  <span>材料</span>
                  <span>{recipe.ingredients?.servings}</span>
                </div>

                <IngredientElement
                  item={recipe.ingredients.list[0]?.item}
                  amount={recipe.ingredients.list[0]?.amount}
                />
                <IngredientElement
                  item={recipe.ingredients.list[1]?.item}
                  amount={recipe.ingredients.list[1]?.amount}
                />
                <IngredientElement
                  item={recipe.ingredients.list[2]?.item}
                  amount={recipe.ingredients.list[2]?.amount}
                />
                <IngredientElement
                  item={recipe.ingredients.list[3]?.item}
                  amount={recipe.ingredients.list[3]?.amount}
                />
                <IngredientElement
                  item={recipe.ingredients.list[4]?.item}
                  amount={recipe.ingredients.list[4]?.amount}
                />
                <IngredientElement
                  item={recipe.ingredients.list[5]?.item}
                  amount={recipe.ingredients.list[5]?.amount}
                />
                <IngredientElement
                  item={recipe.ingredients.list[6]?.item}
                  amount={recipe.ingredients.list[6]?.amount}
                />
                <IngredientElement
                  item={recipe.ingredients.list[7]?.item}
                  amount={recipe.ingredients.list[7]?.amount}
                />
                <IngredientElement
                  item={recipe.ingredients.list[8]?.item}
                  amount={recipe.ingredients.list[8]?.amount}
                />
                <IngredientElement
                  item={recipe.ingredients.list[9]?.item}
                  amount={recipe.ingredients.list[9]?.amount}
                />
                <IngredientElement
                  item={recipe.ingredients.list[10]?.item}
                  amount={recipe.ingredients.list[10]?.amount}
                />
                <IngredientElement
                  item={recipe.ingredients.list[11]?.item}
                  amount={recipe.ingredients.list[11]?.amount}
                />
                <IngredientElement
                  item={recipe.ingredients.list[12]?.item}
                  amount={recipe.ingredients.list[12]?.amount}
                />
                <IngredientElement
                  item={recipe.ingredients.list[13]?.item}
                  amount={recipe.ingredients.list[13]?.amount}
                />
                <IngredientElement
                  item={recipe.ingredients.list[14]?.item}
                  amount={recipe.ingredients.list[14]?.amount}
                />
                <IngredientElement
                  item={recipe.ingredients.list[15]?.item}
                  amount={recipe.ingredients.list[15]?.amount}
                />
              </div>
            </div>
          </section>
        </main>
        <FooterContainerUpper />
        <FooterContainerLower />
      </>
    );
  }
};

export default RecipePage;
