import React, { useContext, useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { CountriesContext } from '../Project/Countries';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};
const CountryDetails = ({ setName, open, setOpen }) => {
    // const [loader, setLoader] = useState(false)
    // const [selectedCountry, setSelectedCountry] = useState({})
    const handleClose = () => {
        setOpen(false)
        setName('')
    };
   

    const context = useContext(CountriesContext)


   
    const selectedCountry = context?.country.find(c => c?.name.common === context?.name)


    return (
        <>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        this is abl
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Capital: {selectedCountry?.capital[0]}
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Continents:  {selectedCountry?.continents[0]}
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        {selectedCountry?.currencies?.EUR.name}
                    </Typography>
                </Box>
            </Modal>
        </>

    );
};

export default CountryDetails;