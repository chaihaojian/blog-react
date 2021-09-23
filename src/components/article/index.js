import { tsConstructorType } from '@babel/types'
import React from 'react'
import "./index.css"

class Article extends React.Component{
    constructor(props) {
        this.state={
            articleDetail: {
                article_id:'',
                article_type:1,
                article_author:'',
                article_title:'',
                article_theme:'',
                article_create_time:'',
                article_updata_time:'',
                article_views:1,
            }
        }
    }
    render(){
        return
    }
}

export default Article