import React from "react";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import web from "./Images/shaik.jpg"

const Home = () => {
  return (
    <>
      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="bg-clr">
                <div className="row">
                  <div class="col-lg-6 pt-1 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column ">
                    <div className="m-5">
                      <h1 className="text-white">
                        Easy credit ab ke click mein
                      </h1>
                      <h2 className="my-3">
                        Lorem Ipsum is simply dummy text of the printing
                      </h2>
                      <div className="mt-5 text-white">
                        <button className="flex btn  mr-2 my-btn">
                          Get started
                        </button>
                        <button className="btn text-white">
                          <PlayCircleOutlineIcon className="mb-1"/> Wacth Now
                        </button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="col-lg-6 order-lg-1  order-1 header-img">
                      <img src={web} className="img-fluid m-5" alt="biz" />
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Home;
