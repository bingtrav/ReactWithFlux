"use strict";

var React = require('react'); //Imports React

var About = React.createClass({
    statics: {
        willTransitionTo: function(transition, params, query, callback) {
            if (!confirm('Are you sure you want to read a boring page?')) {
                transition.about();
            } else {
                callback();
            }
        },
        willTransitionFrom: function(transition, component) {
            if (!confirm('Are you sure you want to leave an amazing page?')) {
                transition.about();
            }
        }
    },
    render: function() {
        return (
            <div>
                <h1>About</h1>
                <p>
                    This application uses the following technologies:
                    <ul>
                        <li>React</li>
                        <li>React Router</li>
                        <li>Flux</li>
                        <li>Node</li>
                    </ul>
                </p>
            </div>
        );
    }
});

module.exports = About;