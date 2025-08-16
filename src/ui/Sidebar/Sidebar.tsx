"use client"
import { Drawer } from "@mui/material";

interface Props {
    children : React.ReactNode
    open:boolean
    setOpen : (open : boolean) => void
}

function Sidebar({children , open , setOpen} : {children : React.ReactNode , open:boolean , setOpen : (open : boolean) => void}) {
    return (
        <Drawer
            open={open}
            onClose={() => setOpen(false)}
            anchor="left"
        >
            {children}
        </Drawer>
    );
}

export default Sidebar;