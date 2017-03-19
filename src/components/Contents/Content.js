import React from 'react';
import ContentCreate from './ContentCreate';
import ContentDetail from './ContentDetail';
import ContentList from './ContentList';

import update from 'react-addons-update'; //내용 update 용


class Content extends React.Component{
        constructor(props){
            super(props);
            this.state = {
                contentData:[{
                        title : 'juntae',
                        contentText : '1 첫 내용'
                    },{
                        title : 'kim',
                        contentText : '2 두번째 내용'
                    }
                ]
            }

            this.handleCreate = this.handleCreate.bind(this);  //contentCreate 에서 데이터 올려보내는 용
        }


        handleCreate(content){
            //console.log("content -> handleCreate 시작");
            console.log(content.title + content.contentText);
            let newState = update(this.state, {
                contentData :{
                    $push:[{"title": content.title, "contentText" : content.contentText}]
                }
            })


            this.setState(newState);
            console.log("handleCreate" + content.title + this.state.contentData);
        }

        render(){
            const mapToComponents = (data) => {
                  return data.map((content, i) => {
            //              console.log(" mapToComponents content : " + content.title + i)
                          return (<ContentList content = {content} key={i} /> )

                  })

            }
            return(
                <div>
                      <h1>내용</h1>
                      <button onClick = {this.sayHello}></button>
                      <ContentCreate onCreate = {this.handleCreate}/> // onCreate props로 해당 컴포넌트에서 상위 메소드 실행
                      <ContentDetail/>

                      <div>{mapToComponents(this.state.contentData)} </div>
                </div>
            );
        }

}

export default Content;
