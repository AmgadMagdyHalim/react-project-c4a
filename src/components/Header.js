import React from "react";

const Header = () => {
  return (
    <>
      <header className="hide-when-mobile">
        <h1>
          <a href="/">Courses 4 Arab</a>
        </h1>
        <ul className="flex">
          <li className="main-list">
            <a className="main-link" href="/html">
              HTML
            </a>
            <ul className="sub-ul">
              <li>
                <a href="/html">Full Course</a>
              </li>
              <li>
                <a href="/html">Crash Course</a>
              </li>
              <li>
                <a href="/html">learn in 1h</a>
              </li>
            </ul>
          </li>
          <li className="main-list">
            <a className="main-link" href="/css">
              CSS
            </a>
            <ul className="sub-ul">
              <li>
                <a href="/css">Full Course</a>
              </li>
              <li>
                <a href="/css">CSS Examples</a>
              </li>
              <li className="mini-projects">
                <a href="/css">mini projects&nbsp; + </a>
                <ul className="sub-sub-ul">
                  <li>
                    <a href="/css">project 1</a>
                  </li>
                  <li>
                    <a href="/css">project 2</a>
                  </li>
                  <li>
                    <a href="/css">project 3</a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li className="main-list">
            <a className="main-link" href="/js">
              JavaScript
            </a>
            <ul className="sub-ul sub-of-js">
              <li>
                <a href="/js">coming soon🔥</a>
              </li>
            </ul>
          </li>
        </ul>
      </header>
      <header style={{ backgroundColor: "red" }} className="show-when-mobile">
        <h1>Courses 4 Arab</h1>
        <label className="absolute" htmlFor="burger">
          <i className="fas fa-bars" />
        </label>
        <input id="burger" type="checkbox" />
        <div className="show-on-click">
          <div className="main-div">
            <label htmlFor="html">
              HTML <i className="fas fa-plus" />
            </label>
            <input id="html" type="checkbox" />
            <ul className="sub-div">
              <li>
                <a href="/html">Full Course</a>
              </li>
              <li>
                <a href="/html">Crash Course</a>
              </li>
              <li>
                <a href="/html">learn in 1h</a>
              </li>
            </ul>
          </div>
          <div className="main-div">
            <label htmlFor="css">
              CSS <i className="fas fa-plus" />
            </label>
            <input id="css" type="checkbox" />
            <ul className="sub-div">
              <li>
                <a href="/css">Full Course</a>
              </li>
              <li>
                <a href="/css">CSS Examples</a>
              </li>
              <li>
                <label className="mini-projects" htmlFor="mini">
                  mini projects <i className="fas fa-plus" />
                </label>
                <input id="mini" type="checkbox" />
                <ul className="sub-sub-div">
                  <li>
                    <a href="/css">project 1</a>
                  </li>
                  <li>
                    <a href="/css">project 2</a>
                  </li>
                  <li>
                    <a href="/css">project 3</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="main-div">
            <label htmlFor="js">
              JavaScript <i className="fas fa-plus" />
            </label>
            <input id="js" type="checkbox" />
            <ul className="sub-div">
              <li>
                <a href="/js">coming soon🔥</a>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
