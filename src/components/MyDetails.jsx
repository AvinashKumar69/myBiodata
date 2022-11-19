import React from "react";
import TestImg from "../assets/testImage.jpeg";

const MyDetails = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-5 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-2 md:mb-0">
          <img
            className="object-cover object-center rounded-lg"
            src={TestImg}
          />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left">
          <h1 className="title-font text-center sm:text-4xl text-3xl mb-4 font-medium font-serif text-gray-900">
            Avinash Kumar
            <br className="lg:inline-block" />
            (अविनाश कुमार)
          </h1>
          <p className="mb-1 leading-relaxed font-medium">
            Date of Birth: 22nd February, 1994
          </p>
          <p className="mb-1 leading-relaxed font-medium">
            Place of Birth: Ara, Bhojpur
          </p>
          <p className="mb-1 leading-relaxed font-medium">
            Caste: Bhumihar, Sonbhadariya
          </p>
          <p className="mb-1 leading-relaxed font-medium">Gotra: Vats</p>
          <p className="mb-1 leading-relaxed font-medium">Height: 5"8'</p>
          <p className="mb-1 leading-relaxed font-medium">Complexion: Fair</p>
        </div>
      </div>
    </section>
  );
};

export default MyDetails;
