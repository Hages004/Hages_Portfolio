import './Hero.css';
import Resume from '/public/Resume.pdf'
function Hero() {
  return (
    <>
    <div id="Home" className='hcontainer'>
      <div className='box'>
    <div className='imgcontainer'>
      <img className='himg' src="./hages.jpeg" alt="" />
    </div>
    </div>
    <div className='hcontent'>
        
        <p className='name'>Hello I am </p>
        <p className='heading'>Data Scientist</p>
        <p className='content'>Aspiring Data Scientist skilled in <strong>Python, Machine Learning, Neural Networks, and Data Visualization</strong>. I build predictive models and extract actionable insights to solve real-world problems, with a passion for data-driven innovation.</p>
        <br></br>
        
        <div className='icons'>
          <a href={Resume} download >
            <button className='resume' > Resume </button>
          </a>
        
        <a className='linkedini' href='https://www.linkedin.com/in/hages-s-p-9b384137b/'>
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
