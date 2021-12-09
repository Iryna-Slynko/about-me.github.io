import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Footer(props) {

    if (props.data) {
        var networks = props.data.social.map(function (network) {
            return <li key={network.name}><a href={network.url}  target="_blank"><FontAwesomeIcon icon={network.className} /></a></li>
        })
    }

    return (
        <footer>

            <div className="row">
                <div className="twelve columns">
                    <ul className="social-links">
                        {networks}
                    </ul>

                    <ul className="copyright">
                        <li>&copy; Copyright 2021 Iryna Slynko</li>
                        
                    </ul>

                </div>
                <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open"></i></a></div>
            </div>
        </footer>
    );
}

