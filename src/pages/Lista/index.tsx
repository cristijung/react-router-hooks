import UseList from "../../hooks/UseList";

interface Product {
item: string;
}

function Lista() {
const [prods, addProdutos] = UseList();
return(
    <>
    <ul>
        {prods.map((prod: Product) => (
            <li>{prod.item}</li>
        ))}
    </ul>
    <button onClick={() => addProdutos({item:"Arroz"})}>
        Adicione mais um produto
    </button>
    
    </>
);
}

export default Lista;
