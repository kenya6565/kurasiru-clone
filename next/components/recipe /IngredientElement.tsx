import React from "react";
import { css } from "@emotion/react";

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

export default IngredientElement;
