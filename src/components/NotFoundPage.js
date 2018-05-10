import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => (
    <p>404! - Page not found! : <Link to="/">Go home</Link></p>
);

export default NotFoundPage;