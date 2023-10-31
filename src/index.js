import React, {Component, Suspense} from 'react';
import ReactDOM from 'react-dom';


import './main.scss';

import {BrowserRouter, Route, Routes} from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import Load from "./components/Load";

const SkillList = React.lazy(() => import("./pages/skill/SkillList"));
const QuestionList = React.lazy(() => import("./pages/skill/QuestionList"));
const AnswerList = React.lazy(() => import("./pages/skill/AnswerList"));
const QuizList = React.lazy(() => import("./pages/skill/QuizList"));

class Root extends Component {
    render() {
        return (
            <BrowserRouter basename={'/'}>
                <Suspense fallback={<Load/>}>
                    <Routes>
                        <Route path={`/skills`} element={<SkillList/>}/>
                        <Route path={`/questions`} element={<QuestionList/>}/>
                        <Route path={`/answers`} element={<AnswerList/>}/>
                        <Route path={`/quizzes`} element={<QuizList/>}/>

                    </Routes>
                </Suspense>
            </BrowserRouter>
        )
    }
}

ReactDOM.render(<Root/>, document.getElementById('root'));
serviceWorker.register();