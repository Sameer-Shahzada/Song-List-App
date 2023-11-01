import React from 'react'
import { Box, Typography, } from '@mui/material'


const SongList = () => {
    return (
        <Box>
            <Box sx={{
                height: '100vh',
                width: '256px',
                backgroundColor: 'gold',
                // border:1

            }}>
                <Box sx={{
                    border: 1,
                }}>
                    <Typography variant='body1' sx={{
                        color: '#552583',
                        fontSize: '36px', display: 'flex', justifyContent: 'center'
                    }}>
                        Logo
                    </Typography>

                </Box>

            </Box>
        </Box>
    )
}

export default SongList