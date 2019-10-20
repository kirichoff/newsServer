let base = [
    {name:"All",Query: true},
    {name:"gay",Query: true},
    {name:"valera",Query: true},
    {name:"spin",Query: true},
    {name:"youtube",Query: false},
    {name:"hi-tech",Query: false}];

const Tags = (state =[...base] ,action)=>{
    switch (action.type) {
        case 'SWITCH' :
            state.find( t=> action.name == t.name).Query = !state.find( t=> action.name == t.name).Query
            return[...state];
        default:
            return [...state]
    }
};
export default Tags