import React from "react";
import Interests from "./Interests.jsx"
import Projects from "./Projects.jsx"


export default function Home() {
  return (
    <div>
        {/* Introduction */}
        <div className="container">
            <div className="span4">
                <img src="./images/travel.jpg" className="circle-img"/>
            </div>
            <div className="span8">
                <h1 style = {{margin: "200px 5px 10px 150px"}}>
                    Erin Tanchip
                </h1>
                <h4 style = {{margin: "0px 0px 0px 150px"}}>
                    Web & iOS Developer
                </h4>
                <div>
                    <img src="./images/mail.png" className="icon-logo"/>
                    <span style = {{margin: "0px 10px 0px 5px"}}>cnltanch@uwaterloo.ca</span>
                </div>
                <div style={{margin: "0px 150px 0px 142px"}}>
                    <a href="https://github.com/mofnirUW" target="_blank">
                        <img src="./images/github.png" className="icon-logo1"/>
                    </a>
                    <a href="https://www.linkedin.com/in/erin-tanchip-aa2261163/" target="_blank">
                        <img src="images/linked.png" className="icon-logo1"/>
                    </a>
                </div>
            </div>
                   
        </div>
        {/* Introduction */}

        {/* Cards */}
        <div className="container">
            <div className="col">
                <div className="card-image">
                    <img src="./images/mokou1.jpg" className="card-image1"/>
                    <h6 style={{margin: "0 20px 8px 20px"},{fontFamily:"-apple-system, BlinkMacSystemFont, sans-serif"}}>I primarily practice and develop websites and iOS applications</h6>
                    <h7 style={{margin: "0 20px 0 20px"},{fontFamily:"-apple-system, BlinkMacSystemFont, sans-serif"}}>Continuing to learn through self-teaching and projects! &nbsp;</h7>      
                </div>
            </div>
            <div className="col">
                <div className="card-image2">
                    <img src="./images/mokou2.jpg" className="card-image1"/>
                    <h6 style={{margin: "0 20px 8px 20px"},{fontFamily:"-apple-system, BlinkMacSystemFont, sans-serif"}}>Mathematics and computing are subjects I study in university</h6>
                    <h7 style={{margin: "8px 20px 0 20px"},{fontFamily:"-apple-system, BlinkMacSystemFont, sans-serif"}}>Calculus, Linear Algebra, Optimization, Combinatorics, Statistics, Computer Science, and continuing on... &nbsp;</h7>      
                </div>
            </div>
        </div>
        {/* Cards */}   

        <hr></hr>

        {/* Skills  */}   
        <div className="container" style={{alignContent: "center"},{marginTop: "900px"}}>
            <div className="row">
                    <img src="./images/mokou3.jpg" className="circle-img1" />
            </div>

            <h2 className="languages">Languages</h2>
  
                <div className="row" style={{margin: "20px 400px 0 100px"}}>
                    <div className="col">
                        <img src="./images/javascript.png" className="circle-img2" style={{margin: "0 300px 0 200px"}}/>
                    </div>
                    <div className="col-xl" style={{margin: "20px auto"}}>
                        <div className="progress" style={{height:"25px"}}>
                            <div class="progress-bar progress-bar-striped bg-dark" role="progressbar" style={{width: "60%"}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">60%</div> 
                        </div>
                    </div>
                </div>


                <div className="row" style={{margin: "20px 400px 0 100px"}}>
                    <div className="col">
                        <img src="./images/html.jpg" className="circle-img2" style={{margin: "0 300px 0 200px"}}/>
                    </div>
                    <div className="col-xl" style={{margin: "20px auto"}}>
                        <div className="progress" style={{height:"25px"}}>
                            <div class="progress-bar progress-bar-striped bg-dark" role="progressbar" style={{width: "30%"}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">30%</div> 
                        </div>
                    </div>
                </div>

                <div className="row" style={{margin: "20px 400px 0 100px"}}>
                    <div className="col">
                        <img src="./images/css.jpg" className="circle-img2" style={{margin: "0 300px 0 200px"}}/>
                    </div>
                    <div className="col-xl" style={{margin: "20px auto"}}>
                        <div className="progress" style={{height:"25px"}}>
                            <div class="progress-bar progress-bar-striped bg-dark" role="progressbar" style={{width: "10%"}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">10%</div> 
                        </div>
                    </div>
                </div>

                <div className="row" style={{margin: "20px 400px 0 100px"}}>
                    <div className="col">
                        <img src="./images/swift.jpg" className="circle-img2" style={{margin: "0 300px 0 200px"}}/>
                    </div>
                    <div className="col-xl" style={{margin: "20px auto"}}>
                        <div className="progress" style={{height:"25px"}}>
                            <div class="progress-bar progress-bar-striped bg-dark" role="progressbar" style={{width: "40%"}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">40%</div> 
                        </div>
                    </div>
                </div>

                <div className="row" style={{margin: "20px 400px 0 100px"}}>
                    <div className="col">
                        <img src="./images/c.png" className="circle-img2" style={{margin: "0 300px 0 200px"}}/>
                    </div>
                    <div className="col-xl" style={{margin: "20px auto"}}>
                        <div className="progress" style={{height:"25px"}}>
                            <div class="progress-bar progress-bar-striped bg-dark" role="progressbar" style={{width: "60%"}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">60%</div> 
                        </div>
                    </div>
                </div>

                <div className="row" style={{margin: "20px 400px 0 100px"}}>
                    <div className="col">
                        <img src="./images/python.png" className="circle-img2" style={{margin: "0 300px 0 200px"}}/>
                    </div>
                    <div className="col-xl" style={{margin: "20px auto"}}>
                        <div className="progress" style={{height:"25px"}}>
                            <div class="progress-bar progress-bar-striped bg-dark" role="progressbar" style={{width: "40%"}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">40%</div> 
                        </div>
                    </div>
                </div>
        </div>
        {/* Skills  */} 
        <hr></hr>

        {/* Education */} 
        <div className="container" style={{alignContent: "center"},{marginTop: "100px"}}>
            <h2 style={{textAlign:"center"}}>Education</h2>
            <img src="./images/waterloo.png" className="circle-img3" />
            <h6 style={{margin: "200px 340px 0 340px"}}>Candidate for Bachelor of Mathematics (2017 - Present)</h6>

        </div>
        {/* Education */} 

        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
    </div>
  )
}