import React, {useEffect,useState} from 'react'
import styles from './main.module.css'
import axios from 'axios'



const Mainbdy = () => {
    // const [data, setData] = useState([]);
    // const [loading, setLoading] = useState(true);
    // const [error, setError] = useState(null);
  
  return (
    <div className={styles.container}>
        <div className={styles.text}>
             Search
            <input    type="text" />
        </div>
        <div className={styles.movies__container}>
        
        <div className={styles.containerinner}>
        <div className={styles.category__name}>
            <h4>Category NAme</h4>
        </div>
        <div className={styles.movies}>
            
            <div className={styles.movie__cardcontainer}>
            <div className={styles.movie_card}>
                    <h4>{}</h4>
            </div>
            <div className={styles.movie_card}>
                    <h4>Legend Of the seeker</h4>
            </div>
            <div className={styles.movie_card}>
                    <h4>Legend Of the seeker</h4>
            </div>
            <div className={styles.movie_card}>
                    <h4>Legend Of the seeker</h4>
            </div>
            </div>
           
            
        </div>
        
        </div>

        {/* second movie list */}
        <div className={styles.containerinner}>
        <div className={styles.category__name}>
            <h4>Category NAme</h4>
        </div>
        <div className={styles.movies}>
            
            <div className={styles.movie__cardcontainer}>
            <div className={styles.movie_card}>
                    <h4>Legend Of the seeker</h4>
            </div>
            <div className={styles.movie_card}>
                    <h4>Legend Of the seeker</h4>
            </div>
            <div className={styles.movie_card}>
                    <h4>Legend Of the seeker</h4>
            </div>
            <div className={styles.movie_card}>
                    <h4>Legend Of the seeker</h4>
            </div>
            </div>
           
            
        </div>
        
        </div>
       
        </div>
    
    </div>
  )
}
// export async function getStaticProps() {
//     // Call an external API endpoint to get posts.
//     // You can use any data fetching library
//     const res = await fetch('https://www.omdbapi.com/?s=crime&apikey=dbc93165')
  
//     // By returning { props: { posts } }, the Blog component
//     // will receive `posts` as a prop at build time
//     return {
    
//       props: {
//        data:res
//       },
//     }
//   }
export default Mainbdy