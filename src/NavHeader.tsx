import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';

export interface ProjectPage{
    ProjectName: string
    ProjectSite: string
}

const projectPages: ProjectPage [] = [
    {ProjectName: 'Movie Trivia',
    ProjectSite: 'https://movietrivia.ryantatecodes.com/'}
]


export const NavHeader: React.FC = () => {
  


  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            ryantatecodes
          </Typography>

          
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {projectPages.map((page) => (
              <Button
                key={page.ProjectName}
                onClick={()=> window.open(page.ProjectSite,'_blank')}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page.ProjectName}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
