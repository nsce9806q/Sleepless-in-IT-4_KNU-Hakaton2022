import Layout from "../components/Layout";
import styled from "styled-components";
import ActivityCard from "../components/ActivityCard";
import { Button, Navbar, Nav, Container } from 'react-bootstrap';
import {Routes, Route, Link, useNavigate, Outlet} from 'react-router-dom'


export default function Activity() {
  let navigate = useNavigate();

  return (
    <Layout title="활동 페이지" hasBackButton>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">활동</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{ navigate('/activity')}}>Outside</Nav.Link>
            <Nav.Link onClick={()=>{ navigate('/activity/inside')}}>Inside</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div class="container text-center">
        <div class="row row-cols-2 g-3" >
          {
              [1,2,3,4,5,6,7].map(()=>{
                return(
                  <>
                    <div class="col-sm"><ActivityCard/></div>
                  </>
                )
              })
          }
        </div>
      </div>
    </Layout>
  );
}

const Main = styled.div`
  padding: 3rem;
  font-size: 1.2rem;
`;
