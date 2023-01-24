import React from "react";

import ProfileImage from "../assets/images/image-jeremy.png";
import MoreInfoImage from "../assets/images/icon-ellipsis.svg";
import WorkImage from "../assets/images/icon-work.svg";
import PlayImage from "../assets/images/icon-play.svg";
import StudyImage from "../assets/images/icon-study.svg";
import ExerciseImage from "../assets/images/icon-exercise.svg";
import SocialImage from "../assets/images/icon-social.svg";
import SelfCareImage from "../assets/images/icon-self-care.svg";

const TimeTracking = () => {
  return (
    <div className=" my-16 mx-4 grid grid-cols-1 sm:grid-cols-[auto_1fr] sm:gap-4 sm:max-w-6xl sm:mx-auto">
      <div className=" bg-darkBlue rounded-lg max-w-xs mx-auto">
        <div className=" bg-blue rounded-lg px-8 py-6 grid grid-cols-[1fr_2fr] sm:grid-cols-1 items-center gap-4 sm:pb-16">
          <img
            className=" border-4 border-white rounded-full sm:w-20"
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
          <ul className=" flex justify-between sm:flex-col sm:gap-4 text-paleBlue">
            <li className=" hover:text-white font-300">
              <button>Daily</button>
            </li>
            <li className=" hover:text-white font-300">
              <button>Weekly</button>
            </li>
            <li className=" hover:text-white font-300">
              <button>Monthly</button>
            </li>
          </ul>
        </div>
      </div>
      <div className=" sm:grid sm:grid-cols-3 sm:gap-4">
        <Item
          key="work"
          title="Work"
          bgColor="light-orange"
          bgImage={WorkImage}
        />
        <Item key="play" title="Play" bgColor="softBlue" bgImage={PlayImage} />
        <Item
          key="study"
          title="Study"
          bgColor="lightRed"
          bgImage={StudyImage}
        />
        <Item
          key="exercise"
          title="Exercise"
          bgColor="limeGreen"
          bgImage={ExerciseImage}
        />
        <Item
          key="social"
          title="Social"
          bgColor="violet"
          bgImage={SocialImage}
        />
        <Item
          key="self"
          title="Self Care"
          bgColor="softOrange"
          bgImage={SelfCareImage}
        />
      </div>
    </div>
  );
};

type ItemProps = {
  title: string;
  current?: string;
  previous?: string;
  bgColor: string;
  bgImage?: string;
};

const Item = ({ title, current, previous, bgColor, bgImage }: ItemProps) => (
  <div
    // className="pt-8 max-w-xs mx-auto rounded-lg"
    className={` bg-${bgColor} pt-8 max-w-xs sm:w-full mx-auto rounded-lg flex flex-col`}
    style={{
      backgroundImage: `url(${bgImage})`,
      backgroundRepeat: "no-repeat",
      backgroundPositionX: "right",
      // backgroundColor: bgColor,
    }}
  >
    <div className=" bg-darkBlue rounded-lg p-6 mt-auto hover:brightness-150 ">
      <div className=" flex justify-between items-center">
        <p className=" text-cardTitleFontSize text-white">{title}</p>
        <button>
          <img
            className=" hover:brightness-200"
            src={MoreInfoImage}
            alt="More Information"
          />
        </button>
      </div>
      <div className=" flex justify-between items-center sm:flex-col sm:items-start mt-4">
        <p className=" text-cardTitleFontSize text-white">{current}hrs</p>
        <p className=" text-paleBlue font-300">Last Week - {previous}hrs</p>
      </div>
    </div>
  </div>
);

export default TimeTracking;
