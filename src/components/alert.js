import React, { alert, useState, useEffect } from "react";
import ReactNotification from 'react-notifications-component';
import { store } from 'react-notifications-component';
import { Animated } from "react-animated-css"
import 'react-notifications-component/dist/theme.css'


function AddAlert() {
    return (
        <div className='container notiBox'>
            <ReactNotification />
            <Home />
        </div>
    )
}


function Home() {

    useEffect(() => {
        setTimeout(() => {
            store.addNotification({
                title: 'If nothing is showing...',
                message: `Don't forget to add a movie title to the search bar!`,
                type: 'danger',
                container: 'top-center',
                insert: 'top',
                animationIn: ['animate__animated', 'animate__fadeIn'],
                animationOut: ['animate__animated', 'animate__slideInDown'],
                width: 800,
                dismiss: {
                    duration: 5000,
                    showIcon: true,
                    onScreen: true
                }
            })
        }, [3500])

    }, [])

    return (
        null
    )
}



export default AddAlert;

