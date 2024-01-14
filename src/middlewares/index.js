export const logger = (store) => (next) => (action) => {
    console.log(action)
    next(action)
}

// export const featuring = (store) => (next) => (actionInfo) => {
//     const featured = [{name: 'eddi'}, ...actionInfo.action.payload]
//     const updateActions = {...actionInfo,
//         action: {...actionInfo.action, payload: featured},
//     };
//     next(updateActions)
// }

// export const prefix = (store) => (next) => (action) => {
//     const prefixed = action.action.payload.map( pokemons => ({
//         ...pokemons,
//         name: 'Poke: ' + pokemons.name
//     }))

//     const updateActions = {
//         ...action,
//         action: {...action.action, payload: prefixed}
//     }
//     next(updateActions)
// }