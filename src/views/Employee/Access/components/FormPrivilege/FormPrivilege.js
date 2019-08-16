import React from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import BoxBordered from '../../../../../components/BoxBordered';
import FormControlSwitch from '../../../../../components/FormControlSwitch';
import { makeStyles } from '@material-ui/styles';
import routesBO from '../../../../../routes';

const useStyles = makeStyles(theme => ({
  headerText: {
    display: 'inline-flex',
    marginRight: theme.spacing(1),
    ...theme.typography.h5
  }
}));

const FormPrivilege = props => {
  const classes = useStyles();

  return (
    <BoxBordered>
      <Box py={3} px={4}>
        <span className={classes.headerText}>Create Privilege</span>
      </Box>
      <Divider />
      <form action="">
        <Box py={3} px={4}>
          <Grid container direction="column" spacing={2}>
            <Grid item>
              <TextField
                required
                fullWidth
                label="Role name"
                variant="outlined"
              />
            </Grid>
            <Grid item>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Box fontSize="12px" lineHeight="48px" color="text.secondary">
                    App Permissions
                  </Box>
                  <Box>
                    <FormControlSwitch
                      control={
                        <Checkbox
                          value="checkedB"
                          color="primary"
                          style={{ marginLeft: -12 }}
                        />
                      }
                      label="Dashboard"
                      bordered={false}
                      noPadding
                    />
                  </Box>
                  <Box>
                    <FormControlSwitch
                      control={
                        <Checkbox
                          value="checkedB"
                          color="primary"
                          style={{ marginLeft: -12 }}
                        />
                      }
                      label="Sales"
                      bordered={false}
                      noPadding
                    />
                  </Box>
                  <Box>
                    <FormControlSwitch
                      control={
                        <Checkbox
                          value="checkedB"
                          color="primary"
                          style={{ marginLeft: -12 }}
                        />
                      }
                      label="Report"
                      bordered={false}
                      noPadding
                    />
                  </Box>
                  <Box>
                    <FormControlSwitch
                      control={
                        <Checkbox
                          value="checkedB"
                          color="primary"
                          style={{ marginLeft: -12 }}
                        />
                      }
                      label="Settings"
                      bordered={false}
                      noPadding
                    />
                  </Box>
                </Grid>
                <Grid item xs={6}>
                  <Box fontSize="12px" lineHeight="48px" color="text.secondary">
                    Backoffice Permissions
                  </Box>
                  {routesBO.map((route, key) => (
                    <Box key={key}>
                      <FormControlSwitch
                        control={
                          <Checkbox
                            value="checkedB"
                            color="primary"
                            style={{ marginLeft: -12 }}
                          />
                        }
                        label={route.name}
                        bordered={false}
                        noPadding
                      />
                      {route.children && (
                        <Box ml={2}>
                          {route.children.map((route, key) => (
                            <Box key={key}>
                              <FormControlSwitch
                                control={
                                  <Checkbox
                                    value="checkedB"
                                    color="primary"
                                    style={{ marginLeft: -12 }}
                                  />
                                }
                                label={route.name}
                                bordered={false}
                                noPadding
                              />
                            </Box>
                          ))}
                        </Box>
                      )}
                    </Box>
                  ))}
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
        <Divider />
        <Box
          py={3}
          px={4}
          display="flex"
          flexDirection="column"
          alignItems="flex-start"
        >
          <Button color="primary" variant="contained">
            SAVE
          </Button>
        </Box>
      </form>
    </BoxBordered>
  );
};

FormPrivilege.propTypes = {};

export default FormPrivilege;
