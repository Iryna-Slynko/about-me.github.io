/* eslint-disable react/prop-types */
import React from 'react';

export default function About(props) {
  const name = props?.data?.name;
  const profilepic = 'images/' + props?.data?.image;
  const bio = props?.data?.bio;
  const street = props?.data?.address.street;
  const city = props?.data?.address.city;
  const state = props?.data?.address.state;
  const phone = props?.data?.phone;
  const email = props?.data?.email;
  const resumeDownload = props?.data?.resumedownload;

  return (
    <section id="about">
      <div className="row">
        <div className="three columns">
          <img className="profile-pic" src={profilepic} alt="Iryna Slynko" />
        </div>
        <div className="nine columns main-col">
          <h2>About Me</h2>

          <p>{bio}</p>
          <div className="row">
            <div className="columns contact-details">
              <h2>Contact Details</h2>
              <p className="address">
                <span>{name}</span><br />
                <span>{street}<br />
                  {city} {state}
                </span><br />
                <span>{phone}</span><br />
                <span><a href={`mailto:${email}`}>{email}</a></span>
              </p>
            </div>
            <div className="columns download">
              <p>
                <a href={resumeDownload} className="button" target="_blank" rel="noreferrer"><i className="fa fa-download"></i>Download Resume</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

