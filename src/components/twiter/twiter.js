
import React, { useState, useEffect } from "react"
import like from "../../img/like.jpg"
import dislike from "../../img/dislike.png"

import { db ,getDocs,addDoc,collection} from "../../routes/firebase";
import SignIn from "../Sign-In";





function Twiter() {
    const [tweet, setTweet] = useState("");
    const [mytweet, setMytweet] = useState([]);
    
    const [likes, setlikes] = useState(0);
    const [colorlike, setcolorlike] = useState("white")
    const [dislikes, setdislikes] = useState(0);
    const [colordislike, setColordislike] = useState("white");

   
  



    useEffect(async () => {
        let gettweet = collection(db, 'text');
       
        let alltweet = await getDocs(gettweet);
        alltweet.forEach((doc) => {
            // console.log( doc.data());
            let mytweetClone = mytweet.slice(0);
            mytweetClone.push(doc.data());
            setMytweet(mytweetClone);

            
        });
    }, [])
     


    const liked = () => {
        setlikes(likes + 1)

        if (likes == 1) {
            setlikes(likes - 1);


        }
    }
    const disliked = () => {
        setdislikes(dislikes + 1)

        if (dislikes == 1) {
            setdislikes(dislikes - 1);


        }
    }



    useEffect(() => {


        let black = dislikes % 2 === 1;
        if (black) {
            setColordislike("black")
        }
        let white = dislikes % 2 === 0;
        if (white) {
            setColordislike("white")



        }

    })
    useEffect(() => {


        let black = likes % 2 === 1;
        if (black) {
            setcolorlike("black")
        }
        let white = likes % 2 === 0;
        if (white) {
            setcolorlike("white")
        }

    })


    const addtweet=async()=>{
        let obj={
            tweet
        }
        console.log(obj)
        setTweet("");
        let twiter_text=collection(db,"text");
        await addDoc(twiter_text,obj)

    }


    
            return (
                <div>
                    
                <div >
    <h1 style={{ textAlign: "center", color: "#1DA1F2" }}>welcome in twiter</h1>
    <input className="input-box" type="text" placeholder="What Is On Your Mind" value={tweet} onChange={(e) => { setTweet(e.target.value) }}></input>
    <button className="sing-btn"  onClick={addtweet }>AddTweet</button>


</div>
                
                
                
                <div>
                    
                    


                {mytweet.map((tweet,index)=>{
                  return(
                    
                   
         <div className="input-box">
                   <h5 id={tweet.index}>{tweet.tweet}</h5>
                   <div className="likedislikediv">
                         <div>
                            <h4 style={{ color: colorlike }} className="likecount">{likes}</h4>
                            <img onClick={liked} className="like" src={like}></img>
                         </div>
                         <div>
                             <h4 style={{ color: colordislike }} className="dislikecount">{dislikes}</h4>
                             <img onClick={disliked} className="dislike" src={dislike}></img>
                        </div>
                      </div>
                 </div>
                )
                })}
            </div>
            </div>

        )}



    
export default Twiter;