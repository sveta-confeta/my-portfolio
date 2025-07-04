import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import s from './Modal.module.scss';
import {Button, IconButton} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';


const style = {   //это общие стили для модалки
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    bgcolor: '#c4c4c4',
    border: '',
    borderRadius: '8px',
    boxShadow: 24,
    p: 4,
    pl:5,
    color: 'black',

};


export const BasicModal = ({
                               title,
                               viewProgect,
                               isOpenModal,
                               setIsOpenModal,
                               children,
                               viewCode,

                           }) => {
    const handleClose = (e) => {
        setIsOpenModal(false);
        e.stopPropagation();
    }


    return (
        <Modal
            open={isOpenModal}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            viewProgect={viewProgect}
            viewCode={viewCode}
        >

            <Box sx={style} className={s.box}>
                <div className={s.wrap}>
                    <div className={s.title}>
                        {title}
                    </div>
                    <IconButton className={s.close} onClick={handleClose}>
                        <CloseIcon/>
                    </IconButton>
                </div>

                {children}
                <div className={s.buttonsBlock}>
                    <Button className={`${s.btn} ${s.one}`} target={'_blank'} href={viewProgect} color="secondary"
                            variant="contained">view
                        the
                        project</Button>
                    <Button target={'_blank'} href={viewCode}
                            className={s.btn} color="secondary" variant="contained">view the
                        source
                        code</Button>
                </div>
            </Box>
        </Modal>
    );
};
