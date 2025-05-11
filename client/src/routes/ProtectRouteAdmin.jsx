import React, { useState, useEffect } from 'react'
import useAppStore from '../store/AppStore'
import { currentAdmin } from '../api/auth'
import LoadingToRedirect from './LoadingToRedirect'


const ProtectRouteAdmin = ({ element }) => {
    const [ok, setOk] = useState(false)
    const user = useAppStore((state) => state.user)
    const token = useAppStore((state) => state.token)

    useEffect(() => {
        if (user && token) {
            // send to back
            currentAdmin(token)
                .then(() => setOk(true))
                .catch(() => setOk(false))
        }
    }, [])

    return ok ? element : <LoadingToRedirect />
}

export default ProtectRouteAdmin
