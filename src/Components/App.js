import React from "react";
import StartPage from "./StartPage";
import Authorization from "./Authorization/Authorization";
import User from "./User/User";
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Partner from "./User/Partner/Partner";
import Message from "./Message/Message";
import Community from "./Community/Community";
import Event from "./Event/Event";
import TalentTree from "./talent tree/TalentTree";
import Techno from "./techno/Techno";
import It from "./it/It";
import Group from "./Message/Group";
import Profile from "./profile/Profile";
import FullStack from "./QA/FullStack";

function App (){

    return <div className='app'>
        <Routes>
                <Route path="/" element={<StartPage />} />
                <Route path='/profile' element={<Profile />} />
                <Route path='/fullstack' element={<FullStack />} />
                <Route path='/group' element={<Group />} />
                <Route path='/it' element={<It />} />
                <Route path='/techno' element={<Techno />} />
                <Route path='/talent_tree' element={<TalentTree />} />
                <Route path='/events' element={<Event />} />
                <Route path='/community' element={<Community />} />
                <Route path='/message' element={<Message />} />
                <Route path='/partner' element={<Partner />}/>
                <Route path="/user" element={<User />} />
                <Route path="/authorization" element={<Authorization />} />
            </Routes>
         </div>
}

export default App;