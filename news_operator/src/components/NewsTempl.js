import React, {Component} from 'react';
import  {connect} from 'react-redux'
import NewsPage from "./NewsPage";
import gql from "graphql-tag";
import {Query} from "@apollo/react-components";

const NewsTempl = (props,client) =>{
    console.log(props.params.id)
    return(
        <Query query={gql`{
        post(id: ${props.params.id}){
            image
            header
            content
            date
            }
    }`}>

    {({loading,data,error})=>{
        console.log(data)
        if (loading) return null
        if (error) return null

        let post = data.post
       return <NewsPage
    text ={post.content}
    id = {post.id}
    header={post.header}
    img ={post.image}
    date = {post.date}
    />}}
        </Query>
    );
}
function mapStateToProps(state,ownProps) {
    console.log(state.addNews)
    return {
        qw: state.addNews.find(t=>t.id === Number(ownProps.params.id))
    }
}
export default connect(mapStateToProps)(NewsTempl);
