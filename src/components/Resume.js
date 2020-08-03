import React from "react";

import "./Resume.css"; 

function Resume() {
  return (
    <div className="Container">
      <header className="App-header">
        <h1>
          Tenzin Dolma Gyalpo
            </h1>
      </header>
      <section className="App-section">
        <h2> EDUCATION </h2>
        <table className="">
          <tbody>
            <tr> 
              <td> <b>Middlebury college </b> </td>
              <td className="AlignRight"> Expected Grad: 2021</td>
            </tr>
            <tr>
              <td> Bachelor of Arts candidate, BA in Computer Science</td>
              <td className="AlignRight"> Major GPA: 3.4 GPA: 3.38</td>
            </tr>
          </tbody>
        </table>
        <table>
          <tbody>
            <tr>
              <td> <b> Language skills:</b> English, intermediate Tibetan,
                intermediate Hindi, beginner Mandarin.
              </td>
            </tr>
            <tr>
              <td> <b> Technical Skills: </b> Java, C, HTML5, Python, CSS, Bootstrap,
                ReactJS, Amazon Web Server (AWS) mobile, JavaScript, assembly language (x86),
                Logisim, CNN, Keras, NodeJS, Socket IO, github,
              </td>
            </tr>
            <tr>
              <td> <b> Relevant Courses:</b> Intro, Data Structure, Architecture, Theory of
                Computation, System Programming, Machine Learning, Calculus 2, Linear Algebra,
                Advanced Operating System, Computer Vision, Software Development.
              </td>
            </tr>
          </tbody>
        </table>
        <h2> EXPERIENCE </h2>
        <table className="">
          <tbody>
            <tr>
              <td> <b>MENTOR AND INTERN, </b> Team4Tech</td>
              <td className="AlignRight">June 2020 – Present</td>
            </tr>
            <tr>
              <td> Teaching Python for Data Science, and intro to Web Development to high school
              students. numpy, HTMl, and CSS. Mentoring high school students on their year end
              projects to create web app, and android apps.
                </td>

            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default Resume