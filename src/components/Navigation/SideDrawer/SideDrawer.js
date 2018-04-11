import React from "react";

import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import Backdrop from "../../UI/Backdrop/Backdrop";
import classes from "./SideDrawer.css";

const sideDrawer = props => {
    const attachedClasses = [classes.SideDrawer];
    attachedClasses.push(props.open ? classes.Open : classes.Close);
    return (
        <React.Fragment>
            <div className={attachedClasses.join(" ")}>
                <div className={classes.Logo}>
                    <Logo />
                </div>
                <nav>
                    <NavigationItems />
                </nav>
            </div>
            <Backdrop show={props.open} clicked={props.closed} />
        </React.Fragment>
    );
};

export default sideDrawer;
