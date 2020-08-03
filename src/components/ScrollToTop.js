import React, { useEffect, useState } from "react";
import {useWindowScroll} from "react-use";

import "./ScrollToTop.css";

export default function ScrollToTop() {
  const { y: pageYoffset } = useWindowScroll();
  const [visible, setVisible] = useState(false);
  useEffect(()=>
    {
    if(pageYoffset > 400){
      setVisible(true);
    }else{
      setVisible(false);
    }   
  }, [pageYoffset])

  const scrollToTop = () => window.scrollTo({top: 0, behavior: "smooth"} );
  if(!visible){
    return false;
  }

  return (
    <div className="scroll-to-top cursor-pointer text-center " onClick={scrollToTop}>
      <i className="fa fa-arrow-up"></i>
    </div>
  );
}