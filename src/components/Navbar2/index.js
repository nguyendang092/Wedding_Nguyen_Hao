import React from "react";
import Header2 from '../Header2';

export default function Navbar2() {
  const [scroll, setScroll] = React.useState(0);
  const handleScroll = () => setScroll(document.documentElement.scrollTop);
  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const className = scroll > 80 ? "fixed-navbar animated fadeInDown active" : "fixed-navbar";
  return (
    <div className={className}>
        <Header2 />
    </div>
  ); 
}