import Box from '@mui/material/Box'
import ModeSelect from '~/components/ModeSelect'
import AppsIcon from '@mui/icons-material/Apps'
import { ReactComponent as TrelloIcon } from '~/assets/mdi--trello.svg'
import SvgIcon from '@mui/material/SvgIcon'
import { TextField, Tooltip, Typography } from '@mui/material'
import Recent from './Menus/Recent'
import Workspaces from './Menus/Workspaces'
import Starred from './Menus/Starred'
import Templates from './Menus/Templates'
import Profiles from './Menus/Profiles'
import Button from '@mui/material/Button'
import CreateIcon from '@mui/icons-material/Create'
import Badge from '@mui/material/Badge'
import NotificationNonIcon from '@mui/icons-material/Notifications'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline'

function AppBar() {
  return (
    <Box px={2} sx={{
      width: '100%',
      height: (theme) => theme.trello.appBarBarHeight,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }}>
      <Box sx={{ display:'flex', alignItems : 'center', gap : 2 }}>
        <AppsIcon sx={{ color: 'primary.main' }} />
        <Box sx={{ display:'flex', alignItems : 'center', gap: 0.5 }}>
          <SvgIcon component={TrelloIcon} inheritViewBox sx={{ color:'primary.main' }}/>
          <Typography varian="span" sx={{ fontSize : '1.2rem', fontWeight: 'bold', color: 'primary.main' }}
          >Trello</Typography>
        </Box>
        <Workspaces />
        <Recent />
        <Starred />
        <Templates />
        <Button textTransiton="none" variant="outlined" endIcon={<CreateIcon />}>Create</Button>
      </Box>
      <Box sx={{ display:'flex', alignItems : 'center', gap: 2 }}>
        <TextField id="outlined-search" label="Search..." type="search" size="small" />

        <ModeSelect />
        <Tooltip title="Notification">
          <Badge color="secondary" variant="dot" sx={{ cursor:'pointer' }}>
            <NotificationNonIcon />
          </Badge>
        </Tooltip>
        <Tooltip title="Help!">
          <Badge color="secondary" variant="dot" sx={{ cursor:'pointer' }}>
            <HelpOutlineIcon />
          </Badge>
        </Tooltip>
        <Profiles />
      </Box>
    </Box>
  )
}

export default AppBar
