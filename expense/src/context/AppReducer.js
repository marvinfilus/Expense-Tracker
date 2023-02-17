export default (state , action ) => {
    switch(action.type){
        case "Add_Transaction":
            return {...state,
                transactions: [...state.transactions, action.info]
            }
            case "Delete_Transaction":
                return {...state,
                    transactions: state.transactions.filter(trans => trans.id !== action.info)
                }
        default:
        return state;        
    }
}