export const add = (txt,id,header,src = "../shadowlll.jpg",tag,date)=>
    ({
        type: 'ADD',
        text: txt,
        id: id,
        header: header,
        src: src,
        tags: tag,
        date: date
});
