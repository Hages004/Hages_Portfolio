import "./Projectcard.css"
function Projectcard({date,domain,imgurl,link,h4}) {
  return (
    <div className="pd-container">
        <a href={link} target="blank">
          <h4> {h4} </h4>
          <div className="datedomain">
            <p>{date}</p>
            <p>{domain}</p>
          </div>
          <img className="images" src={imgurl} alt="image" />

        </a>
        
    </div>
  )
}

export default Projectcard
