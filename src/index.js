import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
// Componentes

import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () =>{
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail 
                author= "Edgar" 
                timeAgo = "Today at 6:00pm" 
                text="Last Saying something wins"
                avatar={faker.image.avatar()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                author= "Suma" 
                timeAgo = "Today at 3:00pm" 
                text="No man alive say a word"
                avatar={faker.image.avatar()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                author= "Teller" 
                timeAgo = "Yesterday at 5:00pm" 
                text="Dead men dont tell stories" 
                avatar={faker.image.avatar()}
                />
            </ApprovalCard>
        </div>
    )
}

ReactDOM.render(
    <App/>,
    document.querySelector('#root')
)