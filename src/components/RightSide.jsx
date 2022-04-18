import { Avatar, AvatarGroup, Box, ImageList, ImageListItem, Typography } from '@mui/material'
import React from 'react'
import { avatar, gallery } from '../Data'

const RightSide = () => {
    return (
        <Box flex={2} p={2} sx={{ display: { xs: 'none', sm: 'block' } }}>
            <Box position='fixed'>

                <Typography variant='h6' fontWeight='100'>Online Friends</Typography>

                <AvatarGroup max={7}>
                    {
                        avatar.map((value, index) =>
                            <Avatar key={index} alt={value.alt} src={value.src} />
                        )
                    }

                </AvatarGroup>

                <Typography variant='h6' fontWeight='300' my={2}>
                    Latest Photos
                </Typography>

                <ImageList cols={3}>

                    {
                        gallery.map((value, index) => (
                            <ImageListItem key={index} >
                                <img src={value.img} alt={value.title} />
                            </ImageListItem>
                        ))
                    }

                </ImageList>

            </Box>
        </Box>
    )
}

export default RightSide