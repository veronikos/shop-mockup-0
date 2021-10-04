import React from "react";
import { Root } from "./ShopGoodsList.ui";
import CardsList from "../../components/CardsList";

function ShopGoodsList({ dataMock }) {
  const finalDataSource = dataMock;
  return (
    <Root>
      <CardsList data={finalDataSource} title="Mocked Keyboards" />
    </Root>
  );
}

export default ShopGoodsList;
