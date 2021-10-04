import ShopGoodsListBase from "./ShopGoodsList";
import { defaultData } from "../../components/CardsList/stories/dataMock";

export function ShopGoodsList () {
    return <ShopGoodsListBase dataMock={defaultData} />
}

export default {
    title: "containers/ShopGoodsList",
}