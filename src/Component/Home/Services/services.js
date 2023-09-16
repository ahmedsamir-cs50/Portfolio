import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowCircleDown,
  faEnvelope,
  faHeadset,
  faIdCard,
} from "@fortawesome/free-solid-svg-icons";
import"./services.css"
import ServicesCard from "./servicesCard";
import { Data } from "./Data";


export const Services = () => {
  return (
   <div className="Services" id="Services">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12">
            <div className="serviceText">
            <h2> Our Services</h2>
            <p className="servicesp">
              We’re a full-service digital marketing and web design agency that
              will meet your challenges head-on with creative solutions and a
              realistic approach to get you results. We love the work we do, and
              we think you will too.
            </p>
            </div>
          </div>
        </div>
        <div className=" row d-flex  justify-content-around ">
         
          {
            Data.Services.map((service,index)=>{
                return(<ServicesCard service={service} key={index}/>)
            })
          } 
          </div>
        </div>
        </div>
      
  
  );
};
