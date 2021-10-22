import React from 'react'

export default function CartScreen(props) {
    const productId=props.match.params.id
    //La méthode search() éxecute une recherche dans une chaine de caractères grâce à une expression
    //La méthode split() divise une chaîne de caractères en une liste ordonnée de sous-chaînes, place ces sous-chaînes dans un tableau et retourne le tableau
    const qty=props.location.search?Number(props.location.search.split('=')[1])
    :1;
    return (
        <div>
           <h1>cart screen</h1>
           <p>add to cart:ProductId:{productId} Qty:{qty}</p>
        </div>
    )
}
