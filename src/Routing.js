import { render } from '@testing-library/react';
import { BrowserRouter, Route, Routes, Redirect } from 'react-router-dom';
import App from './App'
import News from './News'
// import Login from './Login'


render(
    <BrowserRouter>
        <Routes >
            <Route path="/" component={<App />} />
            <Route path="/news" component={<News />} />
            {/* <Route path="/login" exact component={<Login />} /> */}
        </Routes >
    </BrowserRouter>
)
