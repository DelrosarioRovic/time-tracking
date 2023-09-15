import {BsThreeDotsVertical} from "react-icons/bs";
import orangeImg from "../assets/images/icon-work.svg";
import cyanImg from "../assets/images/icon-play.svg";
import studyImg from "../assets/images/icon-study.svg";
import runningImg from "../assets/images/icon-exercise.svg";
import social from "../assets/images/icon-social.svg";
import socialCareImg from "../assets/images/icon-self-care.svg";

export const firstRow = [{
    color: "bg-orange-400",
    subject: "Work",
    hour: "32hrs",
    lastWeekHours: "36hrs",
    BsThreeDotsVertical: <BsThreeDotsVertical />,
    img: orangeImg
}, {
    color: "bg-cyan-300",
    subject: "Play",
    hour: "10hrs",
    lastWeekHours: "8hrs",
    BsThreeDotsVertical: <BsThreeDotsVertical />,
    img: cyanImg
    
}, {
    color: "bg-red-300",
    subject: "Study",
    hour: "4hrs",
    lastWeekHours: "7hrs",
    BsThreeDotsVertical: <BsThreeDotsVertical />,
    img: studyImg
}, {
    color: "bg-green-400",
    subject: "Exercise",
    hour: "4hrs",
    lastWeekHours: "5hrs",
    BsThreeDotsVertical: <BsThreeDotsVertical />,
    img: runningImg
}, {
    color: "bg-violet-300",
    subject: "Social",
    hour: "5hrs",
    lastWeekHours: "10hrs",
    BsThreeDotsVertical: <BsThreeDotsVertical />,
    img: social
    
}, {
    color: "bg-yellow-300",
    subject: "Self Care",
    hour: "2hrs",
    lastWeekHours: "2hrs",
    BsThreeDotsVertical: <BsThreeDotsVertical />,
    img: socialCareImg
}]

