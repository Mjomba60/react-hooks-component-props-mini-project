import React from "react";
import Article from "./Article";

function ArticleList({postsArray}){

    const post = postsArray.map((post) => {
        return <Article 
        key={post.id}
        title = {post.title}
        date = {post.date}
        preview = {post.preview}
        />
    })

    return (
        <main>
            {post}
        </main>
    )
}

export default ArticleList