import React from 'react';
import './App.css';
import { makeStyles } from "@material-ui/core/styles"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import { Drawer, List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core"
import Cadastro from './telas/Cadastro';
import Consulta from './telas/Consulta';
import AddIcon from '@material-ui/icons/Add';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
  drawerPaper: { width: 'inherit' },
  link: {
    textDecoration: 'none',
    color: theme.palette.text.primary
  }
}))

function App() {
  const classes = useStyles()
  return (
    <Router>
      <div style={{ display: 'flex' }}>
        <Drawer
          style={{ width: '220px' }}
          variant="persistent"
          anchor="left"
          open={true}
          classes={{ paper: classes.drawerPaper }}>
          <List>
            <Link to="/consulta" className= { classes.link }>
              <ListItem>
                <ListItemIcon button>
                  <SearchIcon/>
                </ListItemIcon>
                <ListItemText primary={ "Consulta" }></ListItemText>
              </ListItem>
            </Link>
            <Link to="/cadastro" className= { classes.link }>
              <ListItem>
                <ListItemIcon button>
                  <AddIcon/>
                </ListItemIcon>
                <ListItemText primary={ "Cadastro" }></ListItemText>
              </ListItem>
            </Link>
          </List>
        </Drawer>
        <Switch>
          <Route path="/consulta" component={ Consulta } />
          <Route path="/cadastro" component={ Cadastro } />
        </Switch>
      </div>
    </Router>
  );
}

export default App;