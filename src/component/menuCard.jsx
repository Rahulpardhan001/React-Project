
function Card(props){
    // console.log("pr[ps is",props)
     return (
    <>
    <div className="container">
           <div className="card" >
        <img src={props.image} className="card-img-top" alt="..."/>
       <div className="card-body">
        <p className="card-text">{props.name}</p>
      </div>
       </div>
    </div>
    </>
)}

export default Card