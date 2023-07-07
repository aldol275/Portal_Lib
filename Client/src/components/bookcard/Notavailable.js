import "../../Styles/bookcard.css";
import React, { useRef } from "react";
import { Link } from "react-router-dom";

function NotAvailable({ title, id, author, genre, summary, url }) {
 
  return (
    <div id="container">
    <div style={{"opacity":"0.5"}}>
      <div className="card">
        <img className="bookimg" src={url} alt="bookimg" />
        <span className="tag">{genre}</span>
        <div className="bookname">{title}</div>
        <p className="Summary">{summary}</p>
        <Link to={`/library/${genre}/${id}`}>
          <button className="readmore">
            Read More
          </button>
        </Link>
      </div>
      </div>
    </div>
  );
}

export default NotAvailable;