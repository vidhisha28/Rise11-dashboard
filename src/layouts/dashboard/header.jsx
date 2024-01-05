import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import MessageIcon from '@mui/icons-material/Message';
import UploadIcon from '@mui/icons-material/Upload';
import ShowChartIcon from '@mui/icons-material/ShowChart';

import { useResponsive } from 'src/hooks/use-responsive';

import { bgBlur } from 'src/theme/css';

import Iconify from 'src/components/iconify';

import Searchbar from './common/searchbar';
import AccountPopover from './common/account-popover';
import NotificationsPopover from './common/notifications-popover';

import { NAV, HEADER } from './config-layout';

// ----------------------------------------------------------------------

export default function Header({ onOpenNav }) {
  const theme = useTheme();

  const lgUp = useResponsive('up', 'lg');

  const renderContent = (
    <>
      {!lgUp && (
        <IconButton onClick={onOpenNav} sx={{ mr: 1 }}>
          <Iconify icon="eva:menu-2-fill" />
        </IconButton>
      )}

      <Searchbar />

      <Box sx={{ flexGrow: 1 }} />

      <Stack direction="row" alignItems="center" spacing={1}>
  {/* New Upload Button (non-clickable) */}
  <Button sx={{ backgroundColor: 'orange', cursor: 'default' }}>
  <UploadIcon sx={{ width: '24px', height: '24px', color: 'white' }} />
  New Upload
</Button>

  {/* Message Icon */}
  <IconButton /* Add onClick if needed */>
  <MessageIcon />
</IconButton>

  {/* Statistics Icon */}
  <IconButton /* Add onClick if needed */>
  <ShowChartIcon />
</IconButton>
  
  <NotificationsPopover />
  <AccountPopover />
</Stack>
    </>
  );

  return (
    <AppBar
      sx={{
        boxShadow: 'none',
        height: HEADER.H_MOBILE,
        zIndex: theme.zIndex.appBar + 1,
        ...bgBlur({
          color: theme.palette.background.default,
        }),
        transition: theme.transitions.create(['height'], {
          duration: theme.transitions.duration.shorter,
        }),
        ...(lgUp && {
          width: `calc(100% - ${NAV.WIDTH + 1}px)`,
          height: HEADER.H_DESKTOP,
        }),
      }}
    >
      <Toolbar
        sx={{
          height: 1,
          px: { lg: 5 },
        }}
      >
        {renderContent}
      </Toolbar>
    </AppBar>
  );
}

Header.propTypes = {
  onOpenNav: PropTypes.func,
};
