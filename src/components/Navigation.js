import React, {useState, useEffect} from "react";
import {useWindowScroll} from "react-use";
import {Navbar, Nav, NavItem, NavLink, Collapse, NavbarToggler} from 'reactstrap';

export default function Navigation({callback, position}) {
  const [isOpen, setIsOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  const { y: pageYoffset } = useWindowScroll();
  const toggle = () => setIsOpen(!isOpen);

  useEffect(()=>
    {
    if(pageYoffset > position - 1){
      setVisible(true);
    }else{
      setVisible(false);
    }   
  }, [pageYoffset])

  if(!visible){
    return false;
  }


  return(
    <div>
      <Navbar color="light" light expand="md" fixed="top" >
        <NavbarToggler onClick={toggle} />
        {/* <Collapse isOpen={isOpen} navbar> */}
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink onClick={()=>{callback("ed")}}> Education </NavLink>
            </NavItem>
            <NavItem>
            <NavLink onClick={()=>{callback("ex")}}> Experience </NavLink>
            </NavItem>
            <NavItem>
              <NavLink onClick={()=>{callback("pro")}}> Project </NavLink>
            </NavItem>
            <NavItem>
            <NavLink onClick={()=>{callback("res")}}> Resume </NavLink>
            </NavItem>
          </Nav>
        {/* </Collapse> */}
      </Navbar>
    </div>
  );
}