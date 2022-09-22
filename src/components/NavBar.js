import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const anchors = links.map((link, index) => {
    console.log(link);
    return (
      <a href={`#${link}`} key={index}>
        {link}
      </a>
    );
  });

  return <nav>{anchors}</nav>;
}

export default NavBar;
