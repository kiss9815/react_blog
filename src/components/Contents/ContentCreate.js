import React from 'react';


class ContentCreate extends React.Component{
    constructor(props){
          super(props);
          this.state = {
            title : '기본',
            contentText : '내용'
          }
          this.handleClick = this.handleClick.bind(this); // data create
          this.handleChange = this.handleChange.bind(this);
          this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    handleChange(e){ // handleChange 를 input onChange 에 넣어야 사용 가능
          let nextState = {};
          nextState[e.target.name] = e.target.value;
          console.log("handleChange - > t.target.value : " + e.target.value + "t.target.name : " + e.target.name );
          this.setState(nextState);
    }
    handleClick(){
          const contact = {
            title : this.state.title,
            contentText : this.state.contentText
          }

          this.setState({
            title:contact.title,
            contentText:contact.contentText
          })
          alert("create result - > " + this.state.title + " : " + this.state.contentText);
          this.titleInput.focus(); //글쓰기 후 ref 를 이용해 titleInput 으로 포커스 이동
    }
    handleKeyPress(e){
          if(e.charCode === 13){
                this.handleClick();
          }
    }


    render(){
      return(
        <div>
          <h1>content Create</h1>
            <input type="text" value = {this.state.title} onChange = {this.handleChange}
                ref = { ref => this.titleInput = ref }
              name="title" placeholder = "이름" />
            <br/>
            <textarea rows="10" value= {this.state.contentText}  onChange = {this.handleChange}
                onKeyPress = {this.handleKeyPress}
              name="contentText" placeholder = "메모 내용"/>
            <button onClick={this.handleClick}>글쓰기</button>
        </div>
      )
    }

}

export default ContentCreate;
