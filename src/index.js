import React, { Component, Suspense } from "react";
import ReactDOM from "react-dom";

import './main.scss';

import {BrowserRouter, Route, Routes} from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import Load from "./components/Load";
import ProductList from './pages/product/ProductList';
import Postview from "./components/Postview";

const SkillList = React.lazy(() => import("./pages/skill/SkillList"));
const EventList = React.lazy(() => import("./pages/event/EventList"));
const JobList = React.lazy(() => import("./pages/Job"));
const QuestionList = React.lazy(() => import("./pages/skill/QuestionList"));
const AnswerList = React.lazy(() => import("./pages/skill/AnswerList"));
const UserList = React.lazy(() => import("./pages/UserList"));
const QuizList = React.lazy(() => import("./pages/skill/QuizList"));
const UserList = React.lazy(() => import("./pages/user/UserList"));
const Home = React.lazy(() => import("./pages/Home"));

class Root extends Component {
    render() {
        return (
            <BrowserRouter basename={'/'}>
                <Suspense fallback={<Load/>}>
                    <Routes>
                        <Route path={`/skills`} element={<SkillList/>}/>
                        <Route path={`/events`} element={<EventList/>}/>
                        <Route path={`/jobs`} element={<JobList/>}/>
                        <Route path={`/questions`} element={<QuestionList/>}/>
                        <Route path={`/products`} element={<ProductList />} />
                        <Route path={`/answers`} element={<AnswerList/>}/>
                        <Route path={`/users`} element={<UserList/>}/>

                        <Route path={`/quizzes`} element={<QuizList/>}/>
                        <Route path={`/users`} element={<UserList/>}/>
                        <Route path={`/posts`} element={<Home />} />
                    </Routes>
                </Suspense>
            </BrowserRouter>
        )
    }
}

ReactDOM.render(<Root />, document.getElementById("root"));
serviceWorker.register();
