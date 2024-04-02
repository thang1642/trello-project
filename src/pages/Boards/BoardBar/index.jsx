import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import DashboardIcon from '@mui/icons-material/Dashboard'
import VpnLockIcon from '@mui/icons-material/VpnLock'
import AddToDriveIcon from '@mui/icons-material/AddToDrive'
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt'
import FilterListIcon from '@mui/icons-material/FilterList'
import Avatar from '@mui/material/Avatar'
import AvatarGroup from '@mui/material/AvatarGroup'
import { Tooltip } from '@mui/material'
const MENU_STYLE = {
  color: 'primary.main',
  bgcolor:'white',
  paddingX:'5px',
  border: 'none',
  borderRadius: '4px',
  '& .MuiSvgIcon-root':{
    color: 'primary.main'
  },
  '&:hover':{
    bgcolor: 'primary.50'
  }
}
function BoardBar() {
  return (
    <Box sx={{
      backgroundColor: 'primary.dark',
      width: '100%',
      height: (theme) => theme.trello.boardBarHeight,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 2,
      overflowX: 'auto',
      paddingX: 2
    }}>
      <Box sx={{ display:'flex', alignItems : 'center', gap : 2 }}>
        <Chip
          sx={MENU_STYLE}
          icon={<DashboardIcon />}
          label="Thang 1642 MERN STACK"
          clickable
        />
        <Chip
          sx={MENU_STYLE}
          icon={<VpnLockIcon />}
          label="Public/Private Workspaces"
          clickable
        />
        <Chip
          sx={MENU_STYLE}
          icon={<AddToDriveIcon />}
          label="Add To Google Drive"
          clickable
        />
        <Chip
          sx={MENU_STYLE}
          icon={<ElectricBoltIcon />}
          label="Automation"
          clickable
        />
        <Chip
          sx={MENU_STYLE}
          icon={<FilterListIcon />}
          label="Filter"
          clickable
        />
      </Box>
      <Box sx={{ display:'flex', alignItems : 'center', gap : 2 }}>
        <AvatarGroup max={4}
          sx={{
            '& .MuiAvatar-root':{
              width : 34,
              height : 34,
              fontSize : 16
            }
          }}
        >
          <Tooltip title="Thang1642">
            <Avatar alt="Remy Sharp" src="https://yt3.ggpht.com/yti/ANjgQV_X2zuhd8cIt5J5Suzuq2PWxT7vkQk7YivghH2UQQ=s88-c-k-c0x00ffffff-no-rj" />
          </Tooltip>
          <Tooltip title="Thang1642">
            <Avatar alt="Remy Sharp" src="https://scontent.fvca1-3.fna.fbcdn.net/v/t39.30808-1/338187211_3474766826184377_3104314684232956731_n.jpg?stp=cp6_dst-jpg_p40x40&_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=Kxg82JEZDmsAX_0Doxe&_nc_ht=scontent.fvca1-3.fna&oh=00_AfDzR3WofKmevKdcv04icEJrUm55JT5iV2bi5uk1iPsPAw&oe=6611EF87" />
          </Tooltip>
          <Tooltip title="Thang1642">
            <Avatar alt="Remy Sharp" src="https://scontent.fvca1-3.fna.fbcdn.net/v/t39.30808-1/426490810_1631611964244714_3929350560586496872_n.jpg?stp=dst-jpg_p200x200&_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=s8GP0kxdI2gAX8qOFnB&_nc_oc=Adg_txTyD7Gs1-b5YBUuCyJTq_DNi7HYs40EI6AF-7XHsvmfJ3kSxUC6rrZGRJw6rdAf4guzdWkFV_P19iykYxbH&_nc_ht=scontent.fvca1-3.fna&oh=00_AfBQqDYWAfFCtrtUFrQpvmBEBMEymDL_DjURcI0SWqznxA&oe=6611ECD9" />
          </Tooltip>
          <Tooltip title="Thang1642">
            <Avatar alt="Remy Sharp" src="https://scontent.fvca1-1.fna.fbcdn.net/v/t39.30808-1/358622856_825640255592554_8857504027307656852_n.jpg?stp=c0.0.40.40a_cp0_dst-jpg_p40x40&_nc_cat=1&ccb=1-7&_nc_sid=5f2048&_nc_ohc=YQzd7HwBFmkAX-8oRJH&_nc_ht=scontent.fvca1-1.fna&oh=00_AfCGlSjuQdNrx0bmvbA8zzYp88LHEuTESoXq5nYlWUOYtw&oe=6611E065" />
          </Tooltip>
          <Tooltip title="Thang1642">
            <Avatar alt="Remy Sharp" src="https://yt3.ggpht.com/yti/ANjgQV_X2zuhd8cIt5J5Suzuq2PWxT7vkQk7YivghH2UQQ=s88-c-k-c0x00ffffff-no-rj" />
          </Tooltip>
        </AvatarGroup>
      </Box>
    </Box>
  )
}

export default BoardBar
