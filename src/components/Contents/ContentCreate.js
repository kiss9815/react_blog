import React from 'react';


class ContentCreate extends React.Component{
    constructor(props){
      super(props);

    }

    render(){
      return(
        <div>
          <h1>content Create</h1>
            <input type="text" placeholder = "이름"/>
            <br/>
            <textarea rows="10" placeholder = "메모 내용"/>
        </div>
      )
    }

}

export default ContentCreate;
