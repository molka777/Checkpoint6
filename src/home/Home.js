import React from "react"
import Menu from "../Navbar/Menu"
import ActivityList from "./Activity/ActivityList"
import Intro from "./Intro"
import ListTeam2 from "./Team/ListTeam2"
import Video from "./Video"


const Home = () => {
    return (<>
        <Menu />
        <Video></Video>
        <Intro></Intro>
        <ActivityList></ActivityList>
        <ListTeam2 />

    </>);
};
export default Home; 