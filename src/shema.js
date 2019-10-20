const _ = require('lodash');
// Authors и Posts получают данные в виде
// JSON массивов с соответствующих файлов
const Authors = require('./data/authors');
const Posts = require('./data/posts');
const Users = require('./data/users');
const model = require('./postgresRequest')
const {GraphQLBoolean} = require("graphql/type/scalars");
const {GraphQLInt} = require("graphql/type/scalars");



var {
    // Здесь базовые типы GraphQL, которые нужны в этом уроке
    GraphQLString,
    GraphQLList,
    GraphQLObjectType,
    /* Это необходимо для создания требований
       к полям и аргументам */
    GraphQLNonNull,
    // Этот класс нам нужен для создания схемы
    GraphQLSchema,

} = require('graphql');


const PostType = new GraphQLObjectType({
    name: "s",
    description: "This represent a s",
    fields: () => ({
        id: {type: new GraphQLNonNull(GraphQLString)},
        title: {type: new GraphQLNonNull(GraphQLString)},
        body: {type: GraphQLString},
        author: {
            type: AuthorType,
            resolve: function(post) {
                return _.find(Authors, a => a.id == post.author_id);
            }
        }
    })
});


const User = new GraphQLObjectType({
    name: 'user',
    description: 'user name',
    fields: ()=> ({
        user_login: { type: new GraphQLNonNull(GraphQLString)},
    })
});

const Tag = new GraphQLObjectType(({
    name: 'Tag',
    description: 'tag of post',
    fields: ()=>({
        tag_id: {type: new GraphQLNonNull(GraphQLInt)},
        tag_name: {type: new GraphQLNonNull(GraphQLString)}
    })
}))



const content = new GraphQLObjectType({
    name: 'content',
    fields: ()=> ({
        content:  {type:  GraphQLString}
    })
})

const Post = new GraphQLObjectType({
    name: 'Post',
    fields: ()=> ({
        header: { type:  GraphQLString},
        image:  { type:  GraphQLString},
        content_id: {
            type: new GraphQLNonNull(GraphQLInt)
        },
        content: {
            type: GraphQLString ,
            description: 'content',
            resolve: async (root,params)=>{
                let a = await model.getPostContent(root.content_id);
                return a[0].content
            }
        },
        post_id: {type: new GraphQLNonNull(GraphQLInt)},
        date: {type: new GraphQLNonNull(GraphQLString)},
        tags: {
            type: new GraphQLList(Tag),
            description: 'tags for post',
            resolve:async (root,params)=> await model.getTagsForPost(root.post_id)
        },
    })
})







const BlogQueryRootType = new GraphQLObjectType({
    name: "BlogAppSchema",
    description: "Blog Application Schema Query Root",
    fields: () => ({
        users:{
          type: new GraphQLList(User),
            description: "ALL users",
            resolve: function () {
              return model.getAllUsers()
          }
        },
        authorisation: {
            type: Request,
            description: "authorisation user",
            args:{
                name: {
                    name: 'name',
                    type:  new GraphQLNonNull(GraphQLString)
                },
                password: {
                    name: 'password',
                    type:  new GraphQLNonNull(GraphQLString)
                },
            },
            resolve: function (root,params) {
             return model.authorisation(params.name,params.password)
            }
        },
        posts: {
            type: new GraphQLList(Post),
            description: "List of all Posts",
            resolve: function() {
              return model.getPostAll()
            }
        },
        post: {
            args:{
                id: {
                    name: 'id',
                    type: GraphQLInt
                }
            },
            type: Post,
            description: "Post",
            resolve: function (root,params) {
                return model.getPost(params.id)
            }
        }
        ,
        tags: {
            type: new GraphQLList(Tag),
            description: "All available Tags",
            resolve: function () {
                return model.getAllTags()
            }
        }
    })
});




const addUser = {
    type: User,
    args: {
        password: {
            name: 'password',
            type: new GraphQLNonNull(GraphQLString)
        },
        user_login: {
            name: 'user_login',
            type: new GraphQLNonNull(GraphQLString)
        }
    },
    resolve: async function(root,params){
         let res =  await model.registerUser(params.user_login,params.password)
        if(res){
            return res
        }
        else {
            console.log(res)
        }
    }
}


const Request = new GraphQLObjectType({

    name: 'Request',
    fields: ()=> ({
        request: {type: GraphQLString}
    })


})



const addPost ={
    type: Request,
    args: {
        header: {
            name: 'header',
            type:  GraphQLString
        },
        image:  {
            name: 'image',
            type:  GraphQLString
        },
        date: {
            name: 'date',
            type: GraphQLString
        },
        tag: {
            type: new GraphQLList(GraphQLString),
            name: 'tag'
        },
        content:  {
            name: 'content',
            type:  GraphQLString
        },
    },
    resolve: async function(root,params){
        let res = await model.addPost(params)
        if(res){
            return res
        }
        else {
            // console.log(res)
        }
    }
}


const Mutations = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        addUser:  addUser,
        addPost: addPost
    }
})



// BlogMutationRootType = new


const BlogAppSchema = new GraphQLSchema({
    query: BlogQueryRootType,
    mutation: Mutations
    /* Если вам понадобиться создать или
       обновить данные, вы должны использовать
       мутации.
       Мутации не будут изучены в этом посте.
       mutation: BlogMutationRootType
    */
});

module.exports = BlogAppSchema;
