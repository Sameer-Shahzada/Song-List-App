import * as React from 'react';
//redux-store
// import {useDispatch, useSelector} from 'react-redux'
// import {setImage , deleteImage} from '../Redux/Slices/imageSlice'

// mui components
import {
    Button, Dialog, DialogTitle, DialogContent, DialogActions, IconButton,
    Typography, TextField, Box,
} from '@mui/material';
// mui icons
import CloseIcon from '@mui/icons-material/Close';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
// mui colors
import { grey } from '@mui/material/colors';
// mui grid system
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
// for styled component
import { styled } from '@mui/material/styles';

// styled input
const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
});

// styled dialogBox
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
    '& .MuiDialog-paper': {
        width: '50%', // Adjust the width as needed
        maxWidth: 'none', // This allows the dialog to grow beyond the screen width
    },
}));

export default function CustomizedDialogs() {
    const [open, setOpen] = React.useState(false);
   const [selectedImage, setSelectedImage] = React.useState(null);
    const [imageName, setImageName] = React.useState('');
    
    // const dispatch = useDispatch();
    // const selectedImage = useSelector((store)=> store.imageFile.selectedImage);
    // const imageName = useSelector((store) => store.imageFile.imageName);
    

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const handleFileChange = (event) => {
        
        const selectedFile = event.target.files[0];
        console.log('selectedfile - ', selectedFile)
        setSelectedImage(selectedFile);
        setImageName(selectedFile.name);

        // dispatch(setImage({selectedImage:selectedFile,imageName:selectedFile.name}))
    };

    const handleDeleteIcon = () => {
        setSelectedImage(null)
        setImageName('')
        // dispatch(deleteImage())

        // Reset the file input 
        const fileInput  = document.getElementById('fileInput')
        console.log(fileInput)
        if(fileInput) {
            fileInput.value = '';    // Reset 
        }
    }

    return (
        <>
            <Button variant="contained" size='small'
                sx={{
                    backgroundColor: "#FDB927",
                    color: "black",
                    "&:hover": { backgroundColor: "#FDB927", color: "white" },
                    textTransform: "capitalize",
                    fontSize: "14px",
                    boxShadow: "0px 2px 0px 0px rgba(0, 0, 0, 0.04)",
                }}
                onClick={handleClickOpen}
            >
                Add Songs
            </Button>
            <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}
                sx={{ border: 2, borderColor: 'red' }}
            >
                <DialogTitle sx={{ m: 0, p: 2, }} id="customized-dialog-title">
                    Add Song
                </DialogTitle>
                <IconButton
                    aria-label="close"
                    onClick={handleClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <CloseIcon />
                </IconButton>

                <DialogContent dividers>
                    <Grid container>
                        <Grid columns={12} md={12}>
                            <Grid sx={{ mb: 2, mt: 0.5 }}>
                                <Typography variant='body1' gutterBottom>
                                    Song Name
                                </Typography>
                                <TextField variant='outlined' size='small' type='text' fullWidth placeholder='Song Name' />
                            </Grid>
                            <Grid sx={{ mb: 2 }}>
                                <Typography variant='body1' gutterBottom>
                                    Song Link
                                </Typography>
                                <TextField variant='outlined' size='small' type='text' fullWidth placeholder='URL' />
                            </Grid>
                            <Grid sx={{ mb: 2 }}>
                                <Typography variant='body1' gutterBottom>
                                    Source Name
                                </Typography>
                                <TextField variant='outlined' size='small' type='text' fullWidth placeholder='Song Name' />
                            </Grid>

                            <Grid sx={{ mb: 2 }}>
                                <Button component="label" variant="outlined"
                                    startIcon={<FileUploadOutlinedIcon />}
                                    sx={{ textTransform: 'capitalize', color: 'black', borderColor: grey['A400'], 
                                        '&:hover':{
                                            borderColor:grey[900],
                                            backgroundColor:grey[50],
                                        } 
                                    }}>
                                    Click to Upload Profile Thumbnail
                                    <VisuallyHiddenInput  id="fileInput" type="file" onChange={handleFileChange} />
                                </Button>
                            </Grid>

                            <Grid sx={{
                                mb: 2, display: 'flex', justifyContent: 'space-between',
                                border: 1, p: 1, borderRadius: 1, borderColor: grey['A400'],
                                '&:hover': {
                                    borderColor: grey[900],
                                    
                                }
                            }}>
                                <Box sx={{display:'flex', }}>
                                <Box sx={{
                                    display: 'flex', justifyContent: 'center', alignItems: 'center',
                                    height: '48px', width: '48px',
                                }}>
                                {selectedImage && (
                                    <img src={URL.createObjectURL(selectedImage)} alt="Selected" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                 )}
                                </Box>
                                <Box sx={{display:'flex', alignItems:'center',px:0.5}}>
                                    <Typography variant='caption'>{imageName}</Typography>
                                </Box>
                                
                                </Box>
                               
                               
                                                               
                                <Box sx={{
                                    display: 'flex', justifyContent: 'center', alignItems: 'center',
                                    cursor:'pointer',
                                    color: grey['A400'], '&:hover': { color: grey['A700'] }
                                }}>
                                    <DeleteOutlinedIcon onClick={handleDeleteIcon} />
                                </Box>
                            </Grid>

                            <Grid>
                                <Typography variant='body2' sx={{ fontSize: '14px' }}>
                                    Image has to be of aspect ratio 1:1 with a size of 3000 pixels x 3000 pixels
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </DialogContent>

                <DialogActions>
                    <Button size='small' variant="outlined" sx={{ textTransform: 'capitalize' }} autoFocus onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button size='small' variant='contained' sx={{ textTransform: 'capitalize' }}>Add</Button>
                </DialogActions>
            </BootstrapDialog>
        </>
    );
}
