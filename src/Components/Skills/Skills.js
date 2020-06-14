import React from 'react';
import './Skills.css';

export default function Skills() {
  return (
    <div className='skills-container'>
      <h3>Skills</h3>
      {/* <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>Redux</li>
        <li>Express</li>
        <li>Holder</li>
        <li>Holder</li>
        <li>Holder</li>
        <li>Holder</li>
      </ul> */}

      <div className='skills-wrapper'>
        <ul class='tree-view'>
          <li>Table of Contents</li>
          <li>What is web development?</li>
          <li>
            CSS
            <ul>
              <li>Selectors</li>
              <li>Specificity</li>
              <li>Properties</li>
            </ul>
          </li>
          <li>
            <details open>
              <summary>JavaScript</summary>
              <ul>
                <li>Avoid at all costs</li>
                <li>
                  <details>
                    <summary>Unless</summary>
                    <ul>
                      <li>Avoid</li>
                      <li>
                        <details>
                          <summary>At</summary>
                          <ul>
                            <li>Avoid</li>
                            <li>At</li>
                            <li>All</li>
                            <li>Cost</li>
                          </ul>
                        </details>
                      </li>
                      <li>All</li>
                      <li>Cost</li>
                    </ul>
                  </details>
                </li>
              </ul>
            </details>
          </li>
          <li>HTML</li>
          <li>Special Thanks</li>
        </ul>
      </div>
    </div>
  );
}
