import React from "react";
import { Link } from "react-router-dom";
import LocaleContext from "./LocaleContext";

function EnglishNav({ toggleLocale }) {
  return (
    <nav className="nav">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
      <button onClick={toggleLocale}>Español</button>
    </nav>
  );
}

function SpanishNav({ toggleLocale }) {
  return (
    <nav className="nav">
      <ul>
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to="/about">Sobre Nosotros</Link>
        </li>
      </ul>
      <button onClick={toggleLocale}>English</button>
    </nav>
  );
}

export default function Nav() {
  return (
    <LocaleContext.Consumer>
      {({ locale, toggleLocale }) =>
        locale === "en" ? (
          <EnglishNav toggleLocale={toggleLocale} />
        ) : (
          <SpanishNav toggleLocale={toggleLocale} />
        )
      }
    </LocaleContext.Consumer>
  );
}
