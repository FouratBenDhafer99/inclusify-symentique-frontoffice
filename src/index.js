import React, {Component, Suspense} from 'react';
import ReactDOM from 'react-dom';


import './main.scss';

import {BrowserRouter, Route, Routes} from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import Load from "./components/Load";
import ProductList from './pages/product/ProductList';

const SkillList = React.lazy(() => import("./pages/skill/SkillList"));
const JobList = React.lazy(() => import("./pages/Job"));
const QuestionList = React.lazy(() => import("./pages/skill/QuestionList"));
const AnswerList = React.lazy(() => import("./pages/skill/AnswerList"));

class Root extends Component {
    render() {
        return (
            <BrowserRouter basename={'/'}>
                <Suspense fallback={<Load/>}>
                    <Routes>
                        <Route path={`/skills`} element={<SkillList/>}/>
                        <Route path={`/jobs`} element={<JobList/>}/>
                        <Route path={`/questions`} element={<QuestionList/>}/>
                        <Route path={`/answers`} element={<AnswerList />} />
                        <Route path={`/products`} element={<ProductList />} />

                    </Routes>
                </Suspense>
            </BrowserRouter>
        )
    }
}

ReactDOM.render(<Root/>, document.getElementById('root'));
serviceWorker.register();