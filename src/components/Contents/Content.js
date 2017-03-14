import React from 'react';
import ContentCreate from './ContentCreate';
import ContentDetail from './ContentDetail';
import ContentList from './ContentList';



class Content extends React.Component{
    constructor(props){
      super(props);

    }

    render(){
      return(
        <div>
          <h1>내용</h1>
          <ContentCreate/>
          <ContentDetail/>
          <ContentList/>
        </div>
      )
    }

}

export default Content;
