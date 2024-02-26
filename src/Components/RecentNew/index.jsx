import news1 from "./Images/news1.png";
import news2 from "./Images/news2.png";

function Recentnews() {
  return (
    <>
      <div className="container-fluid">
        <h1 className="h1 text-center pt-5 mb-4 font-weight-bold">
          Recent News
        </h1>
        <div className="row">
         
          <div className="col-md-7">
            <div className="row">
              
              
              <div className="col-md-7 ">
                <h1 className="p-4 display-5 fw-bolder">
                  Exploring Cultural Identity Through AI Art
                </h1>
                <p className="ml-5 pt-2 text-muted">
                  Arts | Channel | 5 Minutes Road
                </p>
                <p className="ml-5 pt-2 lh-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Veniam ipsa repudiandae aliquid inventore iure perspiciatis
                  quasi ullam. Porro earum, reprehenderit autem magnam dicta
                  ipsum ullam, mollitia praesentium natus nulla eos!
                </p>
                <span className="ml-5 pt-2 text-decoration-underline">
                  Read More
                </span>
              </div>


              <div className="col-md-5">
                <img src={news1} className="img-fluid h-100" alt="News 1" />
              </div>
            </div>
          </div>
         
         



          <div className="col-md-5 ">
         

            <div className="row">
            {/* style={{height:"100px",width:"100%",gap:"50px"}} */}
              <div className="col-md-3 " >
                <img src={news2} className="img-fluid h-75  " alt="News 2" />
              </div>
              <div className="col-md-8">
                <p className="text-muted">Arts | Channel | 5 Minutes Road</p>
                <h1 className="h5 fw-bolder">
                  Sustainable Development Trends in City Planning
                </h1>
                <span className="pt-1 text-decoration-underline">Read More</span>
              </div>
            </div>

            <div className="row">
            
            <div className="col-md-3 " >
              <img src={news2} className="img-fluid h-75  " alt="News 2"  />
            </div>

            <div className="col-md-8">
              <p className="text-muted">Arts | Channel | 5 Minutes Road</p>
              <h1 className="h5 fw-bolder">
                Sustainable Development Trends in City Planning
              </h1>
              <span className="pt-1 text-decoration-underline">Read More</span>
            </div>

          </div>

          <div className="row">
            
            <div className="col-md-3" >
              <img src={news2} className="img-fluid h-75" alt="News 2"  />
            </div>
            <div className="col-md-8">
              <p className="text-muted">Arts | Channel | 5 Minutes Road</p>
              <h1 className="h5 fw-bolder">
                Sustainable Development Trends in City Planning
              </h1>
              <span className="pt-1 text-decoration-underline">Read More</span>
            </div>
          </div>

            
         
          </div>
          
        </div>
      </div>
    </>
  );
}

export default Recentnews;