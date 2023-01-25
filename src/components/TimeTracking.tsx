import React, { useEffect, useState } from "react";

import Data from "../../data.json";

import ProfileImage from "../assets/images/image-jeremy.png";
import MoreInfoImage from "../assets/images/icon-ellipsis.svg";
import WorkImage from "../assets/images/icon-work.svg";
import PlayImage from "../assets/images/icon-play.svg";
import StudyImage from "../assets/images/icon-study.svg";
import ExerciseImage from "../assets/images/icon-exercise.svg";
import SocialImage from "../assets/images/icon-social.svg";
import SelfCareImage from "../assets/images/icon-self-care.svg";

type dataProps = {
  title: string;
  timeframes: {
    daily: {
      current: number;
      previous: number;
    };
    weekly: {
      current: number;
      previous: number;
    };
    monthly: {
      current: number;
      previous: number;
    };
  };
};

const TimeTracking: React.FC = () => {
  const [data, setData] = useState<dataProps[]>([]);
  const [timeframe, setTimeFrame] = useState<string>("daily");

  useEffect(() => {
    setData(Data);
  }, [data]);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
    const value = event.currentTarget.value;
    setTimeFrame(value);
  };

  return (
    <div className=" my-16 mx-4 grid grid-cols-1 sm:grid-cols-[auto_1fr] sm:mx-8 md:mx-16 gap-4 sm:max-w-6xl xl:mx-auto">
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
          <ul className=" flex justify-between sm:flex-col gap-4 ">
            <li
              className={`${
                timeframe === "daily" ? "text-white" : "text-paleBlue"
              } hover:text-white  font-400`}
            >
              <button onClick={handleClick} value={"daily"}>
                Daily
              </button>
            </li>
            <li
              className={`${
                timeframe === "weekly" ? "text-white" : "text-paleBlue"
              } hover:text-white  font-400`}
            >
              <button onClick={handleClick} value={"weekly"}>
                Weekly
              </button>
            </li>
            <li
              className={`${
                timeframe === "monthly" ? "text-white" : "text-paleBlue"
              } hover:text-white  font-400`}
            >
              <button onClick={handleClick} value={"monthly"}>
                Monthly
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div className=" grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Item
          key="work"
          title="Work"
          bgColor="bg-lightOrange"
          bgImage={WorkImage}
          timeframe={timeframe}
          dataObj={data.find(
            (item) => item.title.toLocaleLowerCase() === "work"
          )}
        />
        <Item
          key="play"
          title="Play"
          bgColor="bg-softBlue"
          bgImage={PlayImage}
          timeframe={timeframe}
          dataObj={data.find(
            (item) => item.title.toLocaleLowerCase() === "play"
          )}
        />
        <Item
          key="study"
          title="Study"
          bgColor="bg-lightRed"
          bgImage={StudyImage}
          timeframe={timeframe}
          dataObj={data.find(
            (item) => item.title.toLocaleLowerCase() === "study"
          )}
        />
        <Item
          key="exercise"
          title="Exercise"
          bgColor="bg-limeGreen"
          bgImage={ExerciseImage}
          timeframe={timeframe}
          dataObj={data.find(
            (item) => item.title.toLocaleLowerCase() === "exercise"
          )}
        />
        <Item
          key="social"
          title="Social"
          bgColor="bg-violet"
          bgImage={SocialImage}
          timeframe={timeframe}
          dataObj={data.find(
            (item) => item.title.toLocaleLowerCase() === "social"
          )}
        />
        <Item
          key="self"
          title="Self Care"
          bgColor="bg-softOrange"
          bgImage={SelfCareImage}
          timeframe={timeframe}
          dataObj={data.find(
            (item) => item.title.toLocaleLowerCase() === "self care"
          )}
        />
      </div>
    </div>
  );
};

type ItemProps = {
  title: string;
  bgColor: string;
  bgImage: string;
  timeframe: string;
  dataObj?: dataProps;
};

const Item = ({ title, bgColor, bgImage, dataObj, timeframe }: ItemProps) => (
  <div
    className={` ${bgColor} pt-8 w-full max-w-xs sm:w-full mx-auto rounded-lg flex flex-col`}
    style={{
      backgroundImage: `url(${bgImage})`,
      backgroundRepeat: "no-repeat",
      backgroundPositionX: "right",
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
        <p className=" text-cardTitleFontSize text-white sm:text-[32px]">
          {
            dataObj?.timeframes[timeframe as keyof typeof dataObj.timeframes]
              .current
          }
          hrs
        </p>
        <p className=" text-paleBlue font-300">
          Last Week -{" "}
          {
            dataObj?.timeframes[timeframe as keyof typeof dataObj.timeframes]
              .previous
          }
          hrs
        </p>
      </div>
    </div>
  </div>
);

export default TimeTracking;
