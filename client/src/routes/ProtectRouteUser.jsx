import React, { useState, useEffect } from 'react'
import useAppStore from '../store/AppStore'
import { currentUser } from '../api/auth'
import LoadingToRedirect from './LoadingToRedirect'


const ProtectRouteUser = ({ element }) => {
    const [ok, setOk] = useState(true)
    const user = useAppStore((state) => state.user)
    const token = useAppStore((state) => state.token)

    useEffect(() => {
        if (user && token) {
            // send to back
            currentUser(token)
                .then(() => setOk(true))
                .catch(() => setOk(false))
        }
    }, [])

    return ok ? element : <LoadingToRedirect />
}

export default ProtectRouteUser