export const initialState = {
    basket: [],
    user: null,
};

export const getBasketTotal = (basket) => {

    let sum = 0;

    for (let i = 0; i < basket.length; i++) {

        sum += basket[i].price;
    }
    return sum;

}


function reducer(state, action) {

    // console.log(action);

    switch (action.type) {
        case 'ADD_TO_BASKET':
            //Logic for adding item to basket

            return {
                ...state,
                basket: [...state.basket, action.item]
            };

        case 'REMOVE_FROM_BASKET':
            //Logic for Removing item from the basket


            //we cloned the basket
            let newBasket = [...state.basket];


            const index = state.basket.findIndex((basketItem) => basketItem.id === action.id);

            if (index >= 0) {
                //item exits in basket, remove it   
                newBasket.splice(index, 1);

            }
            else {
                console.warn(
                    `Cant remove product (id: ${action.id}) as its not in basket`
                );
            }

            return {
                ...state,
                basket: newBasket
            };

        default:

            return state;
    }
}

export default reducer;


