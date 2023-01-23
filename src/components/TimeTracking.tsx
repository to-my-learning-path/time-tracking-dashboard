import React from "react";

import ProfileImage from "../assets/images/image-jeremy.png";

const TimeTracking = () => {
  return (
    <div>
      <div>
        <div>
          <div>
            <img src={ProfileImage} alt="Profile Image" />
          </div>
          <p>Report for</p>
          <p>Jeremy Robson</p>
        </div>
        <div>
          <ul>
            <li>
              <button>Daily</button>
            </li>
            <li>
              <button>Weekly</button>
            </li>
            <li>
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
    <div className=" text-lg">
      <p>{title}</p>
      <img src="" alt="" />
    </div>
    <p>{current}hrs</p>
    <p>Last Week - {previous}hrs</p>
  </div>
);

export default TimeTracking;
