"use strict";

var React = require('react'); //Imports React
var Router = require('react-router');
var Link = Router.Link;

var NotFoundPage = React.createClass({
    render: function() {
        return (
            <div>
                <h1>Page Not Found</h1>
                <p>Wooooops! Sorry, there is nothing to see here.</p>
                <Link to="app">Back to Home</Link>
            </div>
        );
    }
});

module.exports = NotFoundPage;