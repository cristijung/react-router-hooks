import { useState } from "react";

interface ListItem {
    item: string;
}

type UseListHook = [ListItem[], (produto: ListItem) => void];

function UseList(): UseListHook {
    const [list, setList] = useState<ListItem[]>([
        { item: 'Feijão' },
        { item: 'Batata' },
        { item: 'Tomate' },
        { item: 'Ovos' },
    ]);

    function addProdutos(produto: ListItem) {
        setList([...list, produto]);
    }

    return [list, addProdutos];

}

export default UseList;
