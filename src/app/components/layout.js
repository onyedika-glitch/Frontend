// components/Layout.js
import styled from 'styled-components';
import { useRouter } from 'next/router';

const Sidebar = styled.div`
  width: 250px;
  background-color: #f4f4f4;
  padding: 20px;
  height: 100vh;
`;

const MainContent = styled.div`
  flex: 1;
  padding: 20px;
`;

const Container = styled.div`
  display: flex;
`;

const Layout = ({ children }) => {
  const router = useRouter();

  const handleNavigation = (path) => {
    router.push(path);
  };

  return (
    <Container>
      <Sidebar>
        <ul>
          <li onClick={() => handleNavigation('/')}>Home</li>
          <li onClick={() => handleNavigation('/recent')}>Recent</li>
          <li onClick={() => handleNavigation('/pinned')}>Pinned</li>
          <li onClick={() => handleNavigation('/my-work')}>My Work</li>
          <li onClick={() => handleNavigation('/agent-skill')}>Agent Skill</li>
        </ul>
      </Sidebar>
      <MainContent>{children}</MainContent>
    </Container>
  );
};

export default Layout;