import { ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from '@mui/material';
import React from 'react';

const ItemList = (props) => {

    return (
        props.isSwitch === 'true' ?
            <ListItem disablePadding>
                
                    <ListItemIcon>
                        {props.icon}
                    </ListItemIcon>
                    <Switch  />
                
            </ListItem>
            :
            <ListItem disablePadding>
                <ListItemButton>
                    <ListItemIcon>
                        {props.icon}
                    </ListItemIcon>
                    <ListItemText primary={props.title} />
                </ListItemButton>
            </ListItem>
    )
}

export default ItemList;