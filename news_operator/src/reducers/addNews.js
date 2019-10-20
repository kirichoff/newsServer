var base = [];

let cl = ()=>{
    return("q")
}

for (let i=0; i<=10;i++)
{
base = [...base,{
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, consectetur consequatur dolor " + "eaque eos mollitia nesciunt optio quibusdam repellendus vel. Amet consequuntur delectus dicta hic, in ipsa iure laudantium" + " libero necessitatibus, neque optio praesentium quidem quisquam sapiente vero voluptates voluptatum? Accusamus ad adipisci at " + "cupiditate delectus, deleniti eaque hic id illum in laborum magni maiores, minus molestiae nesciunt nihil nisi obcaecati odio omnis" + " optio praesentium quam quis ratione rem repellendus temporibus ullam. A adipisci alias atque commodi, consectetur, delectus eaque eum laborum molestiae numquam porro quae quasi " +
        "quibusdam quisquam repellat, saepe similique ullam voluptatibus. Illo ipsam nemo non recusandae ullam.",
    id:i,
    src: '../night.jpg',
    header: "Hellow"+i,
    tag:['valera','spin','gay'],
    date: "12.10.2025 on 19:33",
    onClick: cl
}];
}
base = [...base, {
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, consectetur consequatur dolor " + "eaque eos mollitia nesciunt optio quibusdam repellendus vel. Amet consequuntur delectus dicta hic, in ipsa iure laudantium" + " libero necessitatibus, neque optio praesentium quidem quisquam sapiente vero voluptates voluptatum? Accusamus ad adipisci at " + "cupiditate delectus, deleniti eaque hic id illum in laborum magni maiores, minus molestiae nesciunt nihil nisi obcaecati odio omnis" + " optio praesentium quam quis ratione rem repellendus temporibus ullam. A adipisci alias atque commodi, consectetur, delectus eaque eum laborum molestiae numquam porro quae quasi " +
        "quibusdam quisquam repellat, saepe similique ullam voluptatibus. Illo ipsam nemo non recusandae ullam.",
    id: 12,
    src: '../night.jpg',
    header: "Hellow" + 12,
    tag: [''],
    date: "12.10.2025 on 19:33",
    onClick: cl
}];


const addNews = (state =[...base] ,action)=>{
    switch (action.type) {
        case 'ADD':
            let obj ={};
            obj.text = action.text;
            obj.id = action.id;
            obj.src = action.src;
            obj.header = action.header;
            obj.tag = action.tags;
            obj.date = action.date
            return [...state,obj];
        default:
            return [...state]
    }
};

export default addNews