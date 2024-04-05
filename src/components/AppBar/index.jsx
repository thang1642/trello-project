import { useState } from 'react'
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
import SearchIcon from '@mui/icons-material/Search'
import InputAdornment from '@mui/material/InputAdornment'
import CloseIcon from '@mui/icons-material/Close';

function AppBar() {
  const [searchValue,setSearchValue] = useState('')
  return (
    <Box sx={{
      width: '100%',
      height: (theme) => theme.trello.appBarHeight,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 2,
      paddingX: 2,
      overflowX: 'auto',
      backgroundColor: (theme) => (theme.palette.mode === 'dark' ? '#2c3e50' : '#1565c0')
    }}>
      <Box sx={{ display:'flex', alignItems : 'center', gap : 2 }}>

        <AppsIcon sx={{ color: 'white' }} />
        <Box sx={{ display:'flex', alignItems : 'center', gap: 0.5 }}>
          <SvgIcon component={TrelloIcon} inheritViewBox fontSize="small" sx={{ color:'white' }}/>
          <Typography varian="span" sx={{ fontSize : '1.2rem', fontWeight: 'bold', color: 'white' }}
          >Trello</Typography>
        </Box>
        <Box sx={{ display:{ xs:'none', md:'flex' }, gap :1 }}>
          <Workspaces />
          <Recent />
          <Starred />
          <Templates />
          <Button
            sx={{ color:'white' }}
            endIcon={<CreateIcon/>}>
              Create
          </Button>
        </Box>
      </Box>
      <Box sx={{ display:'flex', alignItems : 'center', gap: 2 }}>
        <TextField
          id="outlined-search"
          label="Search..."
          type="text"
          size="small"
          value= {searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon sx={{ color:'white' }} />
              </InputAdornment>
            ),
            endAdornment: (
              <CloseIcon 
                fontSize='small'
                sx={{ color:searchValue ? 'white':'transparent', curser: 'pointer' }}
                onClick={() => setSearchValue('')}
              />
            )
          }}
          sx={{
            minWidth:'120px',
            maxWidth: '180px',
            '& label ': { color:'white' },
            '& input' : { color:'white' },
            '& label.Mui-focused': { color:'white' },
            '& .MuiOutlinedInput-root': {
              '& fieldset': { borderColor: 'white' },
              '&:hover fieldset': { borderColor: 'white' },
              '&.Mui-focused fieldset': { borderColor: 'white' }
            }
          }}
        />

        <ModeSelect />

        <Tooltip title="Notifications">
          <Badge color="error" variant="dot" sx={{ cursor:'pointer' }}>
            <NotificationNonIcon sx={{ color: 'white' }} />
          </Badge>
        </Tooltip>

        <Tooltip title="Help!">
          <Badge variant="dot" sx={{ cursor:'pointer' }}>
            <HelpOutlineIcon sx={{ color: 'white' }}/>
          </Badge>
        </Tooltip>

        <Profiles />

      </Box>
    </Box>
  )
}

export default AppBar
