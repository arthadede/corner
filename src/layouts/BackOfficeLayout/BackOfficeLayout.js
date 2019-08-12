import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Drawer from '@material-ui/core/Drawer';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import withWidth from '@material-ui/core/withWidth';
import Divider from '@material-ui/core/Divider';
import {
  ListItemDropdown,
  ListItemDropdownText,
  ListItemDropdownChildren
} from './components';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import NotificationsIcon from '@material-ui/icons/NotificationsNone';
import PowerIcon from '@material-ui/icons/PowerSettingsNew';
import routesBO from '../../routes';

const drawerWidth = 280;

const useStyles = makeStyles(theme => ({
  root: {
    height: 'inherit',
    width: 'inherit'
  },
  drawerControl: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: theme.spacing(1)
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1
  },
  appBarShiftOpen: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  appBarShiftClose: {
    marginLeft: theme.spacing(9) + 1,
    width: `calc(100% - ${theme.spacing(9) + 1}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap'
  },
  drawerOpen: {
    width: drawerWidth,
    padding: '0 8px',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerClose: {
    width: theme.spacing(9) + 1,
    padding: '0 8px',
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  toolbar: {
    padding: '0 8px',
    ...theme.mixins.toolbar
  },
  menu: {
    '&:not(:last-child)': {
      marginBottom: theme.spacing(1)
    }
  },
  menuChildren: {
    '&:not(:last-child)': {
      marginBottom: theme.spacing(1) / 2
    }
  },
  menuIcon: {
    color: theme.palette.secondary.main
  },
  menuIconHidden: {
    display: 'inline-flex',
    minWidth: 56,
    flexShrink: 0
  },
  menuText: {
    color: theme.palette.secondary.main,
    ...theme.typography.subtitle2
  },
  menuTextChildren: {
    color: theme.palette.secondary.main,
    ...theme.typography.body2
  },
  content: {
    height: `calc(100% - 64px)`,
    marginTop: 64,
    marginLeft: drawerWidth,
    padding: theme.spacing(4),
    transition: theme.transitions.create(['margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  contentDrawerShift: {
    marginLeft: theme.spacing(9) + 1,
    transition: theme.transitions.create(['margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  profile: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(3)
  },
  show: {
    opacity: 1,
    transition: theme.transitions.create(['opacity'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  hide: {
    opacity: 0,
    transition: theme.transitions.create(['opacity'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  profileName: {
    marginBottom: theme.spacing(1) / 2
  },
  bigAvatar: {
    height: 100,
    width: 100,
    marginBottom: theme.spacing(2),
    transition: theme.transitions.create(['width', 'height', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  bigAvatarDrawerShift: {
    height: 56,
    width: 56,
    marginBottom: 0,
    transition: theme.transitions.create(['width', 'height', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  }
}));

const BackOfficeLayout = props => {
  const { name, width, onBreakpoint, children } = props;

  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  React.useEffect(() => {
    onBreakpoint(width);
  }, [width]);

  return (
    <div className={classes.root}>
      <AppBar
        color="default"
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShiftOpen]: open,
          [classes.appBarShiftClose]: !open
        })}
      >
        <Toolbar>
          <IconButton
            edge="start"
            aria-label="menu"
            color="secondary"
            className={classes.drawerControl}
            onClick={() => setOpen(!open)}
          >
            {!open ? <MenuIcon /> : <CloseIcon />}
          </IconButton>
          <Typography variant="h4" color="inherit" className={classes.title}>
            {name}
          </Typography>
          <IconButton
            aria-label="notification"
            aria-controls="menu-notification"
            aria-haspopup="true"
            color="secondary"
            onClick={() => console.log('NOTIFICATION')}
            className={classes.menuButton}
          >
            <NotificationsIcon />
          </IconButton>
          <IconButton
            aria-label="logout"
            aria-controls="menu-logout"
            aria-haspopup="true"
            color="secondary"
            onClick={() => console.log('LOGOUT')}
            className={classes.menuButton}
          >
            <PowerIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open
          })
        }}
        variant="permanent"
        open
      >
        <div className={classes.toolbar}></div>
        <Divider />
        <div className={classes.profile}>
          <Avatar
            className={clsx(classes.bigAvatar, {
              [classes.bigAvatarDrawerShift]: !open
            })}
          >
            AR
          </Avatar>
          <Typography
            variant="h5"
            color="textPrimary"
            className={clsx(classes.profileName, {
              [classes.show]: open,
              [classes.hide]: !open
            })}
          >
            Artha Dede
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            className={clsx({
              [classes.show]: open,
              [classes.hide]: !open
            })}
          >
            Administrator
          </Typography>
        </div>
        <Divider />
        <List>
          {routesBO.map((route, key) => {
            const RouteIcon = route.icon;

            if (route.children) {
              const items = route.children;

              return (
                <ListItemDropdown key={key} className={classes.menu}>
                  <ListItemDropdownText>
                    <ListItem button key={route.page}>
                      <ListItemIcon className={classes.menuIcon}>
                        <RouteIcon />
                      </ListItemIcon>
                      <ListItemText
                        primary={route.name}
                        classes={{ primary: classes.menuText }}
                      />
                    </ListItem>
                  </ListItemDropdownText>
                  <ListItemDropdownChildren>
                    {items.map(item => (
                      <ListItem
                        button
                        key={item.page}
                        className={classes.menuChildren}
                      >
                        <div className={classes.menuIconHidden}></div>
                        <ListItemText
                          primary={item.name}
                          classes={{ primary: classes.menuTextChildren }}
                        />
                      </ListItem>
                    ))}
                  </ListItemDropdownChildren>
                </ListItemDropdown>
              );
            } else {
              return (
                <ListItem button key={key} className={classes.menu}>
                  <ListItemIcon className={classes.menuIcon}>
                    <RouteIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary={route.name}
                    classes={{ primary: classes.menuText }}
                  />
                </ListItem>
              );
            }
          })}
        </List>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentDrawerShift]: !open
        })}
      >
        {children}
      </main>
    </div>
  );
};

BackOfficeLayout.displayName = 'BackOffice-Layout';
BackOfficeLayout.defaultProps = {
  onBreakpoint: () => {}
};
BackOfficeLayout.propTypes = {
  name: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  width: PropTypes.string,
  onBreakpoint: PropTypes.func
};

export default withWidth()(BackOfficeLayout);
