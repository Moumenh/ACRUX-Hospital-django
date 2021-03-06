import React from 'react'
import './header.css'
import { connect } from "react-redux"
import { Link } from 'react-router-dom'
import RegisterDialog from "./RegisterDialog"
import { Button, Avatar, Typography } from '@material-ui/core'
import { setCurrentUser, setUserRole, setUserImage, setMessageContacts, setLastTextObject, setContactTitle, setFetchId, setDoctorId } from '../../../Redux/User/userActions'

const Header = ({ currentUser, setLastTextObject, setCurrentUser, setUserRole, image, setUserImage, setMessageContacts, setContactTitle, setFetchId, setDoctorId }) => {
    // console.log(currentUser)
    return (

        <div className='header'>
            <Link to='/'>
                <img className='header__logo' src='https://acruxlatam.com/images/logo-acrux-md.png' alt='logo' />
            </Link>

            <div className='header__contents'>
                <Link to='/doctors' style={{ textDecoration: "none" }}><h4 className='header__taps'> Doctors </h4></Link>
                <Link to='/departments' style={{ textDecoration: "none" }}><h4 className='header__taps'> Departments </h4></Link>
                <Link to='/about' style={{ textDecoration: "none" }}><h4 className='header__taps'> About Us </h4></Link>
                <Link to='/bloodbank' style={{ textDecoration: "none" }}><h4 className='header__taps'> BloodBank </h4></Link>
                {
                    currentUser ?
                        <div className='header__contents'>
                            <Link to='/profile'>
                                <Avatar style={{ marginRight: '20px' }} alt={currentUser} src={image} />
                            </Link>
                           

                            <Button variant="outlined" color="primary" onClick={() => {
                                localStorage.removeItem('Authorization')
                                setCurrentUser({
                                    currentUser: null,
                                    email: null,
                                    id: null
                                })
                                setUserRole('user')
                                setUserImage('https://i.imgur.com/I80W1Q0.png')
                                setMessageContacts([])
                                setContactTitle('')
                                setFetchId(null)
                                setLastTextObject({})
                                setDoctorId(null)
                            }}> LogOut </Button>

                        </div>
                        :
                        <RegisterDialog />
                }
            </div>
        </div>
    )
}

const mapStateToProps = ({ user: { currentUser, image } }) => {
    return {
        currentUser,
        image
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setCurrentUser: user => dispatch(setCurrentUser(user)),
        setUserRole: role => dispatch(setUserRole(role)),
        setUserImage: image => dispatch(setUserImage(image)),
        setMessageContacts: array => dispatch(setMessageContacts(array)),
        setContactTitle: name => dispatch(setContactTitle(name)),
        setFetchId: id => dispatch(setFetchId(id)),
        setLastTextObject: obj => dispatch(setLastTextObject(obj)),
        setDoctorId: id => dispatch(setDoctorId(id))


    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Header);
