import { AccountBox, DarkMode, Home, PagesTwoTone, Person, Settings } from '@mui/icons-material'
import { Box, List, Stack } from '@mui/material'
import React from 'react'
import ItemList from './sidebar_components/ItemList'

const Sidebar = () => {
    return (
        <Box flex={1} p={2} sx={{ display: { xs: 'none', sm: 'block' } }}>
            {/* <Box position='fixed' minWidth='5rem'>
                <List sx={{ margin: 0 }}>
                    <ItemList title="Home" icon={<Home />} />
                    <ItemList title="Pages" icon={<PagesTwoTone />} />
                    <ItemList title="Friends" icon={<Person />} />
                    <ItemList title="Settings" icon={<Settings />} />
                    <ItemList title="Profile" icon={<AccountBox />} />
                    <ItemList isSwitch='true' icon={<DarkMode />} />
                </List>
            </Box> */}

            <Stack position='fixed' direction='column' height={'100vh'}>
                <List>
                    <Stack direction='column' justifyContent='space-between' alignItems='center'>
                        <Stack>
                            <ItemList title="Home" icon={<Home />} />
                            <ItemList title="Pages" icon={<PagesTwoTone />} />
                            <ItemList title="Friends" icon={<Person />} />
                            <ItemList title="Settings" icon={<Settings />} />
                            <ItemList title="Profile" icon={<AccountBox />} />

                        </Stack>
                        <Stack>
                            <ItemList isSwitch='true' icon={<DarkMode />} />
                        </Stack>
                    </Stack>
                </List>
            </Stack>

        </Box>
    )
}

export default Sidebar