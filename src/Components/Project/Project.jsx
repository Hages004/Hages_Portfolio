import Projectcard from "./Projectcard/Projectcard"
import "./Project.css"
import vass from "F:\\HAGES\\Portfolio\\Portfolio\\public\\Desktop assistant.png"
import EBbill from "F:\\HAGES\\Portfolio\\Portfolio\\public\\EB-bill.jpeg"
import todolist from "F:\\HAGES\\Portfolio\\Portfolio\\public\\Todolist.jpg"
import result from "F:\\HAGES\\Portfolio\\Portfolio\\public\\Result finder.jpg"

function Project() {
    return (
        <section id="Project" className="p-container">
            <h5 className="p-title">Projects</h5>
            <div className="p-content">
               
                    <Projectcard
                        imgurl={todolist}
                        link="https://github.com/Hages004/TODO-List"
                        h4="Todolist"
                        date="May 2024 (2 days)"
                        domain="React"
                    />
                    <Projectcard
                        imgurl={EBbill}
                        link="https://github.com/Hages004/EB-BILL_CALCULATOR"
                        h4="EB Bill"
                        date="June 2024"
                        domain="Java Script"
                    />
                    <Projectcard
                        imgurl={vass}
                        link="https://github.com/Hages004/Desktop-virtual-assistant"
                        h4="Desktop Assistant"
                        date="Jan 2024 - Feb 2024"
                        domain="Python"
                    />
                    <Projectcard
                        imgurl={result}
                        link="https://github.com/Hages004/Exam-result-finder"
                        h4="Result Finder"
                        date="February 2024"
                        domain="React"
                    />
            </div>
        </section>
    )
}

export default Project
