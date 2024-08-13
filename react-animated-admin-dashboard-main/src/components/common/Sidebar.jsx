import DashboardCustomizeOutlinedIcon from '@mui/icons-material/DashboardCustomizeOutlined';
import { Box, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Paper, Typography, colors } from '@mui/material';
import { images } from "../../assets";
import Animate from "./Animate";
import { AddSharp, EventAvailableRounded, Logout, ManageAccounts, Report, ViewCarousel } from '@mui/icons-material';
import { Link, useLocation } from 'react-router-dom';
const menus = [
  {
    title: "Manage Users",
    icon: <ManageAccounts />,
    state: "manage",
    path:"/manage-users"
  },
  {
    title: "Overview",
    icon: <DashboardCustomizeOutlinedIcon />,
    state: "overview",
    path:"/dashboard"
  },
  {
    title: "Available Jobs",
    icon: <EventAvailableRounded />,
    state: "Available Jobs",
    path:"/available-jobs"
  },
  {
    title: "Add a Job",
    icon: <AddSharp />,
    state: "addajob",
    path: "/add-a-job" // Ensure this path is correct
  },
  {
    title: "View Applications",
    icon: <ViewCarousel />,
    state: "view-applications",
    path: "/job-applications" // Ensure this path is correct
  },
  {
    title: "Generate the Report",
    icon: <Report />,
    state: "Generate the Report",
    path: "/generate" // Ensure this path is correct
  },
  {
    title: "Logout",
    icon: <Logout />,
    state: "logout",
    path: "/logout"
  },
];

const Sidebar = ({ sidebarWidth }) => {
  const location = useLocation();
  const activeState = location.pathname.substring(1); // Get active path

  const MenuItem = (props) => {
    const { item, isActive } = props;
    return (
      <ListItem key={props.index} disableGutters disablePadding sx={{ py: 0.5 }}>
        <ListItemButton
          component={Link}
          to={item.path}
          sx={{
            borderRadius: "10px",
            bgcolor: isActive ? colors.green[600] : "",
            color: isActive ? colors.common.white : "",
            "&:hover": {
              bgcolor: isActive ? colors.green[600] : "",
              color: isActive ? colors.common.white : "",
            }
          }}
        >
          <ListItemIcon
            sx={{
              minWidth: "40px",
              color: isActive ? colors.common.white : ""
            }}
          >
            {item.icon}
          </ListItemIcon>
          <ListItemText primary={
            <Typography fontWeight={600}>
              {item.title}
            </Typography>
          } />
        </ListItemButton>
      </ListItem>
    );
  };

  const drawer = (
    <Box
      padding={3}
      paddingBottom={0}
      display="flex"
      flexDirection="column"
      height="100vh"
      sx={{
        "::-webkit-scrollbar": {
          display: "none"
        }
      }}
    >
      {/* logo */}
      <Box sx={{ textAlign: "center", mb: 2 }}>
        <Animate type="fade" delay={0}>
          <img src={images.logo} alt="logo" height={60} />
        </Animate>
      </Box>
      {/* logo */}

      <Animate sx={{ flexGrow: 1 }}>
        <Paper
          elevation={0}
          square
          sx={{
            borderTopRightRadius: "10px",
            borderTopLeftRadius: "10px",
            p: 2,
            height: "100%",
            boxShadow: "rgba(145, 158, 171, 0.2) 0px 0px 2px 0px, rgba(145, 158, 171, 0.12) 0px 12px 24px -4px"
          }}
        >
          {/* menu group 1 */}
          <List>
            {menus.map((item, index) => (
              <MenuItem
                key={index}
                item={item}
                isActive={item.path === location.pathname}
              />
            ))}
          </List>
          {/* menu group 1 */}
        </Paper>
      </Animate>
    </Box>
  );

  return (
    <Box
      component="nav"
      sx={{
        width: { md: sidebarWidth },
        flexShrink: { md: 0 }
      }}
    >
      {/* large screen */}
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", sm: "none", md: "block" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: sidebarWidth,
            borderWidth: 0,
            bgcolor: "transparent",
            "::-webkit-scrollbar": {
              display: "none"
            }
          }
        }}
        open
      >
        {drawer}
      </Drawer>
      {/* large screen */}
    </Box>
  );
};

export default Sidebar;
