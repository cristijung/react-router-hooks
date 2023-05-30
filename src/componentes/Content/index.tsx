import { Box, Button } from "@mui/material";
import styles from './Content.module.scss';


function Content() {
    return (       
            <Box
                className={styles.content}
                sx={{
                    backgroundColor: "primary.dark",
                    "&:hover": {
                        backgroundColor: "primary.main",
                        opacity: [0.9, 0.8, 0.7],
                    },
                    color: '#fff',
                    borderRadius: '4px',
                    padding: '2%',
                }}
            > 

            Textinho de Boas Vindas    
            </Box>
    );
}

export default Content;
