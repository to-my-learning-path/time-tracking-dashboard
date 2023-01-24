import React from "react";

import ProfileImage from "../assets/images/image-jeremy.png";

const TimeTracking = () => {
  return (
    <div className=" my-16">
      <div className=" bg-darkBlue rounded-lg max-w-xs mx-auto">
        <div className=" bg-blue rounded-lg px-8 py-6 grid grid-cols-[1fr_2fr] items-center gap-4">
          <img
            className=" border-4 border-white rounded-full"
            src={ProfileImage}
            alt="Profile Image"
          />
          <div className=" flex flex-col">
            <p className=" text-paleBlue">Report for</p>
            <p className=" text-white font-300 text-cardTitleFontSize">
              Jeremy Robson
            </p>
          </div>
        </div>
        <div className=" px-8 py-6">
          <ul className=" flex justify-between text-paleBlue">
            <li className=" hover:text-white">
              <button>Daily</button>
            </li>
            <li className=" hover:text-white">
              <button>Weekly</button>
            </li>
            <li className=" hover:text-white">
              <button>Monthly</button>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <div className=" ">
          <h1 className=" "></h1>
          <h1 className=""></h1>
          <Item title="Work" />
          <Item title="Play" />
          <Item title="Study" />
          <Item title="Exercise" />
          <Item title="Social" />
          <Item title="Self Care" />
        </div>
      </div>
    </div>
  );
};

type ItemProps = {
  title: string;
  current?: string;
  previous?: string;
};

const Item = ({ title, current, previous }: ItemProps) => (
  <div>
    <div>
      <p>{title}</p>
      <img src="" alt="" />
    </div>
    <p>{current}hrs</p>
    <p>Last Week - {previous}hrs</p>
  </div>
);

export default TimeTracking;
