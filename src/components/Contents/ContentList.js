import React from 'react';


class ContentList extends React.Component{
    constructor(props){
        super(props);

    }

    render(){
        return(
            <div onClick = {this.props.onClick}>
                <h3>{this.props.content.title}</h3>
                <h4>{this.props.content.contentText}</h4>
            </div>
        )
    }

}

export default ContentList;
