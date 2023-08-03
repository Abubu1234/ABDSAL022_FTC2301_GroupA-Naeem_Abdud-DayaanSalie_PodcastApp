
import { Typography, AppBar,  CssBaseline,  Toolbar, Box} from "@mui/material"



const NavBar = () => {
    return(
        <div>
        
         <CssBaseline />
         <AppBar position="relative">
            <Toolbar>
                <Box 
                component="img"
                sx={
                    {
                        height:"auto" ,
                        width:{
                            xs: 45, //0
                            sm: 45, //600
                            md: 45, //900
                            lg: 45, //1200
                            xl: 45, //1536
                        }
            
                    }
                }
                src="../peas.png"  
                alt="nav-img" 
                />
                {/* <PhotoCamera /> */}
                <Typography variant="h6">
                   Peas in a Pod
                </Typography>
            </Toolbar>
            </AppBar>   
      
      </div>
    )
}

export default NavBar