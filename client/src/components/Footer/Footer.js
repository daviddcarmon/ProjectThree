import React from "react";
import "./Footer.css"

const Footer = () => {
  return (
    <div class="card footer">
      <div class="card-header">Footer</div>
      <div class="card-body">
        <blockquote class="blockquote mb-0">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            posuere erat a ante.
          </p>
          <footer class="blockquote-footer">
            Someone famous in <cite title="Source Title">Source Title</cite>
          </footer>
        </blockquote>
      </div>
    </div>
  );
};

export default Footer;
