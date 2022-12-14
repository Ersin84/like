import React, { useEffect, useState } from "react";
import { FaHome } from "react-icons/fa";
import { useParams } from "react-router-dom";
import Cars from "../CarListing/Cars/Cars";

const SingleDetails = () => {
  let { id } = useParams();
  const [details, setDetails] = useState([]);
  useEffect(() => {
    const url = "/FakeData/topPlaces.json";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setDetails(data.find((detail) => detail.id == id)));
  });
  return (
    <div>
      <div className="container mx-auto px-4 py-10">
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 my-4">
          <div>
            <div className="mt-10">
              <h1 className="text-5xl mb-4">{details.placeName}</h1>
              <span className="text-gray-500">
                {" "}
                <FaHome className="inline-block mr-2 text-xl" />
                {details.properties} properties
              </span>
              <img className="h-96 mt-4 rounded" src={details.img} alt="" />
            </div>
          </div>
          <div>
            <div>
              <img
                src="https://raw.githubusercontent.com/Ersin84/like/main/public/FakeData/imo/1fo13.png"
                alt=""
              />
            </div>
          </div>
        </div>
        <Cars />
      </div>
    </div>
  );
};

export default SingleDetails;
