import React from 'react'
import './resume.css'
const Resume = () => {
    return (
        <div className="resume">
            <div className="resume-h">
                <h1>MALLEBOINA MAHESH</h1>
                <div className="resume-d">
                    <p>Hyderabad</p>
                    <p>Telangana</p>
                    <p>+919014213518</p>
                    <p>mahi3mp@gmail.com</p>
                </div>
            </div>
            <div className="career">
                <h3>CAREER OBJECTIVE</h3>
                <p>Looking for an opportunity to work in an organization to enhance my skills and knowledge along with contributing to the growth of the organization.</p>
            </div>
            <div className="edu">
                <h2>EDUCATION</h2>
                <div className="edu-d">
                    <h3>Arora`s P.G College, Hyderabad (2023-2025)</h3>
                    <p>Master`s Degree in Computer Applications (8.00 CGPA)</p>
                    <h3>Vivekananda Degree College, Hyderabad (2020-2023)</h3>
                    <p>BSC Computer Science (8.99 CGPA)</p>
                    <h3>Sai Gouthamijr College, Suryapet (2018-2020)</h3>
                    <p>Intermediate MPC (9.32 CGPA)</p>
                    <h3>ZPHS Kasarlapahad, Kasarlapahad (2017-2018)</h3>
                    <p>Secondary School Of Certificate (7.8 CGPA)</p>
                </div>
            </div>
            <div className="skill">
                <h2>SKILLS</h2>
                <ul>
                    <li><strong> Python : </strong> Core Python, Advance Python</li>
                    <li><strong> Web Technologies : </strong> HTML, CSS, JS, Bootstrap</li>
                    <li><strong> Frame Work : </strong> react.js</li>
                    <li><strong> Database : </strong> Oracle(sql)</li>
                    <li><strong> Microsoft Office </strong> </li>
                </ul>
            </div>
            <div className="proj">
                <h2>PROJECTS</h2>
                <p>1. Multiple Diseases prediction based on the user symptoms using the machine learning algorithms</p>
                <p>2. Automated parking system using Django</p>
            </div>
            <div className="strength">
                <h2>STRENGTHS</h2>
                <p>Self Disciplined</p>
                <p>Organized</p>
                <p>Problem Solving</p>
            </div>
        </div>
    )
}
export default Resume