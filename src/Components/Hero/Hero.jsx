import './Hero.css';
import Resume from '/public/Resume.pdf'
function Hero() {
  return (
    <>
    <div id="Home" className='hcontainer'>
      <div className='box'>
    <div className='imgcontainer'>
      <img className='himg' src="./Pic.JPG" alt="" />
    </div>
    </div>
    <div className='hcontent'>
        
        <p className='name'>Hello I m </p>
        <p className='heading'>I m a budding React developer.</p>
        <p className='content'>I excel at crafting elegant digital experiences and I am proficient in various programming languages and technologies. </p>
        <br></br>
        
        <div className='icons'>
          <a href={Resume} download >
            <button className='resume' > Resume </button>
          </a>
        
        <a className='linkedini' href='https://www.linkedin.com/in/hages-s-p-51a66127b/'>
        <i className="fa-brands fa-linkedin-in fa-lg"></i>
        </a>
        <a className='githubi' href='https://github.com/Hages004?tab=overview&from=2024-06-01&to=2024-06-16'>
        <i className="fa-brands fa-github fa-lg"></i>
        </a></div>
        
    </div>
    </div>
    {/*<div className='footer'> 
      <div className='fpro'>
    <span className='no'>6</span>
      <div className='projects'>  Projects Completed</div>
      </div>
      <div className='fts'>
      <span className='no'>12</span>
      <div className='technologies'>  Technical skills </div>
      </div>
    </div>*/}
    </>
  )
}

export default Hero
