import React, {Component, Suspense} from 'react';
import ReactDOM from 'react-dom';

import './main.scss';

import {BrowserRouter, Route, Routes} from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import Load from "./components/Load";

const SkillList = React.lazy(() => import("./pages/skill/SkillList"));
const EventList = React.lazy(() => import("./pages/event/EventList"));

class Root extends Component {
    render() {
        return (
            <BrowserRouter basename={'/'}>
                <Suspense fallback={<Load/>}>
                    <Routes>
                        <Route path={`/skills`} element={<SkillList/>}/>
                        <Route path={`/events`} element={<EventList/>}/>
                    </Routes>
                </Suspense>
            </BrowserRouter>
        )
    }
}

ReactDOM.render(<Root/>, document.getElementById('root'));
serviceWorker.register();