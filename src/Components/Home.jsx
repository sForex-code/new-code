import {React,useEffect,useState} from 'react'
import "./Home.scss"
import axios from 'axios'

const url="https://api.themoviedb.org/3"
const apikey="f5ade87c896c4b733e06a034dfdb2883"
const imgUrl="https://image.tmdb.org/t/p/original"
const Card = ({img})=>(
  <img className='card' src={img} alt="cover" />
)

const Row = ({title,arr=[]})=>(
  <div className="row">
    <h2>{title}</h2>
    <div>
      {
        arr.map((item,index)=>(
          <Card key={index} img={`${imgUrl}/${item.poster_path}`}/>
        ))
      }
    </div>
  </div>
)

const Home = () => {
const[upcomingMovie,setUpcomingMovie]=useState([])
const[topratedMovie,setTopratedMovie]=useState([])
const[populorMovie,setPopulorMovie]=useState([])
  useEffect(() => {
    const fetchUpcomig= async()=>{
      const {data:{results}} =await axios.get(`${url}/movie/upcoming?api_key=${apikey}`)
     setUpcomingMovie(results)
    }
    const fetchToprated= async()=>{
      const {data:{results}} =await axios.get(`${url}/movie/top_rated?api_key=${apikey}`)
      setTopratedMovie(results)
    }
    const fetchPopulor= async()=>{
      const {data:{results}} =await axios.get(`${url}/movie/popular?api_key=${apikey}`)
      console.log(results);
      setPopulorMovie(results)
    }
    fetchUpcomig()
    fetchToprated()
    fetchPopulor()
  }, [])
 
  

  return (<section className="home">
    <div className='banner'>
      
    </div>
    <Row title={"Up Coming"} arr={upcomingMovie}/>
    <Row title={"Top Rated"} arr={topratedMovie}/>
    <Row title={"Populor"} arr={populorMovie}/>
    </section>
  )
}

export default Home