import React from "react";
import { makeStyles } from "@mui/styles";
import Button from "@mui/material/Button";

const useStyles = makeStyles({
    root: {
        background: "#1876d1",
        marginLeft: "1rem",
    },
});

export default function CustomMui() {
    const classes = useStyles();
    return <Button className={classes.root}>Hook</Button>;
}
