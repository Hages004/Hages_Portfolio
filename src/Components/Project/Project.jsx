import Projectcard from "./Projectcard/Projectcard"
import "./Project.css"
import vass from "F:\\HAGES\\Portfolio\\Portfolio\\public\\Desktop assistant.png"
import fifa from "F:\\HAGES\\Portfolio\\Portfolio\\public\\fifa.avif"
import bike from "F:\\HAGES\\Portfolio\\Portfolio\\public\\bike.avif"
import rice from "F:\\HAGES\\Portfolio\\Portfolio\\public\\rice.avif"
import sign from "F:\\HAGES\\Portfolio\\Portfolio\\public\\sign.webp"
import air from "F:\\HAGES\\Portfolio\\Portfolio\\public\\air.jpg"
import x_ray from "F:\\HAGES\\Portfolio\\Portfolio\\public\\x-ray.jpg"
function Project() {
    return (
        <section id="Project" className="p-container">
            <h5 className="p-title">Projects</h5>
            <div className="p-content">
               
                    <Projectcard
                        imgurl={vass}
                        link="https://github.com/Hages004/TODO-List"
                        h4="Virtual Desktop Assistant"
                        date="feb. 2024"
                        domain="Python"
                    />
                    <Projectcard
                        imgurl={fifa}
                        link="https://github.com/Hages004/FIFA2020_Clustering"
                        h4="FIFA 20 Player Clustering"
                        date="June 2025"
                        domain="Machine Learning"
                    />
                    <Projectcard
                        imgurl={bike}
                        link="https://github.com/Hages004/BikeRental_TimeSeries"
                        h4="Bike rental Price Forecasting"
                        date="June 2025"
                        domain="Time series forecasting"
                    />
                    <Projectcard
                        imgurl={rice}
                        link="https://github.com/Hages004/RiceLeaf_Classification-CNN-"
                        h4="Rice leaf Disease Detection"
                        date="Sep. 2025"
                        domain="Deep Learning (CNN)"
                    />
                    <Projectcard
                        imgurl={sign}
                        link="https://github.com/Hages004/TrafficSignDectection_CNN"
                        h4="Traffic Sign Detection"
                        date="Sep. 2025"
                        domain="Deep Learning (CNN)"
                    />
                    <Projectcard
                        imgurl={air}
                        link="https://github.com/Hages004/SurfaceAirTemp_RNN"
                        h4="Surface Air Temperature"
                        date="Oct. 2025"
                        domain="Deep Learning (RNN-LSTM)"
                    />
                    <Projectcard
                        imgurl={x_ray}
                        link="https://github.com/Hages004/Pneumonia_x-ray_Classification_CNN"
                        h4="x-ray Classification"
                        date="Oct. 2025"
                        domain="Deep Learning (CNN)"
                    />
            </div>
        </section>
    )
}

export default Project
