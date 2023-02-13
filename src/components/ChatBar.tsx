import * as React from "react";
import Box from '@mui/material/Box';
import TextField from "@mui/material/TextField";
import InputBase from "@mui/material/InputBase";
import { makeStyles } from 'tss-react/mui';
import { createTheme, borderColor } from "@mui/system";

const theme = createTheme({
    palette: {
        primary: {
            light: '#e0e0e0',
            main: '#414141',
            dark: '#53e1a9',
            contrastText: '#ff00d9',

        },
    },
});

const useStyles = makeStyles()({
    inputBase: {
        border: '2px solid #414141',
        borderRadius: theme.shape.borderRadius,
        padding: theme.spacing(1),
        margin: '.5em 1em',
        width: '42vw',
        [theme.breakpoints.down('xl')]: {
            width: '62vw',
        },
        [theme.breakpoints.down(821)]: {
            width: '85vw',
        },
        [theme.breakpoints.down(400)]: {
            width: '82vw',
        },
    },
    
    hover: {
        borderColor: '#414141',
    }
});


export default function ChatBar() {
    const { classes } = useStyles();

    return (
        // <Box 
        //     component="form"
        //     sx={{
        //         '& .MuiTextField-root': { s: 8, width: '100%' },
        //     }}
        //     noValidate
        //     autoComplete='off'
        // >
            <div>
                <InputBase 
                    id='outlined-multiline-flexinle'
                    placeholder='Enter message here'
                    multiline
                    maxRows={4}
                    className={classes.inputBase}
                />
            </div>
        // </Box>
    )
}