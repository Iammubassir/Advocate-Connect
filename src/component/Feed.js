import React, {  useEffect, useState} from 'react';
import '../css/Feed.css';
import QueryBox from './QueryBox';
import Post from "./Post";
import db from '../firebase';


function Feed() {

    const [posts,setPosts] = useState([])

    useEffect(() => {
        db.collection("questions")
          .orderBy("timestamp", "desc")
          .onSnapshot((snapshot) =>
            setPosts(
              snapshot.docs.map((doc) => ({
                id: doc.id,
                questions: doc.data(),
                category:doc.selection,         //changed here for specifications
              }))
            )
          );
      }, []);
return (
        <div className = 'feed'>
            <QueryBox />
            {
                posts.map(({ id, questions})=>(
                    <Post 
                        key = {id}
                        Id = {id}
                        question= {questions.question}
                        timestamp= {questions.timestamp}
                        queryUser = {questions.user}
                        category = {questions.category} //changed here for specifications
                    />
                
                ))
            }
            
        </div>
    )
}

export default Feed
