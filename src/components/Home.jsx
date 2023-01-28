import React from 'react'
import vg from "../assests/2.webp"
import {AiFillGoogleCircle,AiFillAmazonCircle,AiFillYoutube,AiFillInstagram} from "react-icons/ai"
const Home = () => {
  return (
    <>
    <div className="home" id="home">
    <main>
       <h1>TechyStar</h1>
       <p>solution to all your problem</p>

    </main>
    
    
    </div>

    <div className="home2" id="about">
    <img src={vg} alt="Graphics" />

<div>
    <p>
     We are your one only solution to the tech problems
     you face
     every day. we are leading tech company whose aim is to increase the problem solving ability in children.


    </p>


</div>



    </div>

 <div className="home3" id="about">

<div>
    <h1>who we are ?</h1>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa molestias doloremque numquam autem suscipit modi impedit, corrupti sequi in, atque id accusamus neque nemo quam perferendis beatae dignissimos ex fugit!</p>
</div>


 </div>


 <div className="home4" id="brands">
        <div>
          <h1>Brands</h1>

          <article>
            <div
              style={{
                animationDelay: "0.3s",
              }}
            >
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>

            <div
              style={{
                animationDelay: "0.5s",
              }}
            >
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>

            <div
              style={{
                animationDelay: "0.7s",
              }}
            >
              <AiFillYoutube />
              <p>Youtube</p>
            </div>

            <div
              style={{
                animationDelay: "1s",
              }}
            >
              <AiFillInstagram />
              <p>Instagram</p>
            </div>
          </article>
        </div>
      </div>




    </>
  )
}

export default Home