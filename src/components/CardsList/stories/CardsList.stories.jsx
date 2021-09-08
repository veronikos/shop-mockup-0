import CardsListBase from "../CardsList";
import { defaultData } from './dataMock'

export function CardsListNoData () {
    return <CardsListBase />
}

export function CardsListData () {
    return <CardsListBase data={defaultData} />
}

export default {
    title: "components/CardsList",
}