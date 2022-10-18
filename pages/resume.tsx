import React from "react";
import { Carousel } from "react-carousel3";

const ResumePage = () => {
  return (
    <div>
      <div className="spin flex justify-center p-3 ">
        <Carousel
          height={460}
          width={980}
          yOrigin={42}
          yRadius={48}
          autoPlay={true}
        >
          <div className="flex flex-col  items-center justify-center">
            <section className=" flex flex-col items-center justify-center">
              <img
                src="/images/frontend.jpg"
                alt="frontend"
                className=" w-40 h-40 rounded-full"
              />
              <h1 className=" text-primary font-bold">FRONTEND DEVELOPMENT</h1>
            </section>
          </div>

          <div className="item">
            <section className=" flex flex-col items-center justify-center">
              <img
                src="/images/server.png"
                alt="frontend"
                className=" w-40 h-40 rounded-full"
              />
              <h1 className=" text-primary font-bold">BACKEND DEVELOPMENT</h1>
            </section>
          </div>
          <div className="item">
            <section className=" flex flex-col items-center justify-center">
              <img
                src="/images/appdesign.jpg"
                alt="frontend"
                className=" w-40 h-40 rounded-full"
              />
              <h1 className=" text-primary font-bold">
                MOBILE APP DEVELOPMENT
              </h1>
            </section>
          </div>
          <div className="item">
            <section className=" flex flex-col items-center justify-center">
              <img
                src="/images/blockchain.jpg"
                alt="frontend"
                className=" w-40 h-40 rounded-full"
              />
              <h1 className=" text-primary font-bold">
                BLOCKCHAIN DEVELOPMENT
              </h1>
            </section>
          </div>
          <div className="item">
            <section className=" flex flex-col items-center justify-center">
              <img
                src="/images/design.png"
                alt="frontend"
                className=" w-40 h-40 rounded-full"
              />
            </section>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default ResumePage;
