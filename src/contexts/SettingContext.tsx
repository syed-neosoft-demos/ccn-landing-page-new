'use client'

import { createContext, useReducer, Dispatch, useEffect, useState } from 'react'
import {
    defaultSettingsData,
    getSettingsData,
    setSettingsData,
} from '../services/localstorage/LocalSettings'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Alert, CircularProgress, Container } from '@mui/material'

export type SettingStateType = {
    themeMode: 'light' | 'dark'
    screen: 'desktop' | 'tab' | 'mobile'
    language: string
}
type SettingActionType = {
    type: 'themeMode' | 'screen'
    value: string | boolean
}

const initialState: SettingStateType = {
    themeMode: 'dark',
    screen: 'mobile',
    language: 'english',
}

function settingsReducer(
    state: SettingStateType,
    action: SettingActionType
): SettingStateType {
    const currentSettingsData = getSettingsData() || defaultSettingsData
    switch (action.type) {
        case 'themeMode':
            setSettingsData({
                ...currentSettingsData,
                themeMode: action.value as 'light' | 'dark',
            })
            return {
                ...state,
                themeMode: action.value as typeof state.themeMode,
            }
        case 'screen':
            return { ...state, screen: action.value as typeof state.screen }
        default:
            return state
    }
}

export const SettingContext = createContext({
    settings: initialState,
    changeSettings: (() => { }) as Dispatch<SettingActionType>,
    toggleTheme: () => { },
    toggleLoading: (status?: boolean) => { },
})

export default function SettingContextProvider(props: {
    children: React.ReactNode
}) {
    const [settings, changeSettings] = useReducer(settingsReducer, initialState)
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [internetStatus, setInternetStatus] = useState<boolean>(true)
    function checkSettings() {
        const settingData = getSettingsData()
        if (settingData) {
            changeSettings({ type: 'themeMode', value: settingData.themeMode })
        } else {
            setSettingsData(initialState)
        }
    }
    function getScreenType() {
        if (window) {
            if (window.innerWidth > 1100) return 'desktop'
            if (window.innerWidth > 768) return 'tab'
            if (window.innerWidth < 768) return 'mobile'
        }
        return 'desktop'
    }
    useEffect(() => {
        changeSettings({
            type: 'screen',
            value: getScreenType(),
        })
        if (!window.navigator.onLine) setInternetStatus(false)
        else setInternetStatus(true)
        window.addEventListener('online', () => setInternetStatus(true))
        window.addEventListener('offline', () => setInternetStatus(false))
        window.addEventListener('resize', () => {
            changeSettings({
                type: 'screen',
                value: getScreenType(),
            })
        })
        checkSettings()
    }, [])
    function toggleTheme() {
        const currentSettingsData = getSettingsData() || defaultSettingsData
        changeSettings({
            type: 'themeMode',
            value: settings.themeMode === 'light' ? 'dark' : 'light',
        })
        setSettingsData({
            ...currentSettingsData,
            themeMode: settings.themeMode === 'light' ? 'dark' : 'light',
        })
    }
    function toggleLoading(status: boolean = false) {
        setIsLoading(status)
    }
    return (
        <SettingContext.Provider
            value={{
                settings,
                changeSettings,
                toggleTheme,
                toggleLoading
            }}
        >

            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme={settings.themeMode === 'dark' ? 'dark' : 'colored'}
                style={{
                    fontSize: '10px',
                    zIndex: 99999999999,
                }}
            />
            {
                <InternetStatus
                    key={internetStatus ? '1' : '0'}
                    status={internetStatus}
                />
            }
            {
                isLoading && <GlobalLoader />
            }
            {props.children}
        </SettingContext.Provider>
    )
}

function InternetStatus({ status }: { status: boolean }) {
    const [isAlwaysShow, setIsAlwaysShow] = useState<boolean>(true)
    useEffect(() => {
        if (status) {
            setTimeout(() => {
                setIsAlwaysShow(false)
            }, 3000)
        } else {
            setIsAlwaysShow(true)
        }
    }, [status])
    if (!isAlwaysShow) return null
    return (
        <div
            style={{
                position: 'fixed',
                top: 0,
                right: 0,
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'column',
                zIndex: 99999999999999,
                width: 'max(20vw,200px)',
                height: '10vh',
            }}
        >
            <Container>
                {status ? (
                    <></>
                    // <Alert severity="success">You are online</Alert>
                ) : (
                    <Alert variant="filled" severity="error">
                        You are offline
                    </Alert>
                )}
            </Container>

        </div>
    )
}


export function GlobalLoader() {
    return (
        <div
            style={{
                position: 'fixed',
                top: 0,
                right: 0,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                zIndex: 99999999999999,
                width: '100vw',
                height: '100vh',
                backgroundColor: 'rgba(0,0,0,0.5)',
            }}
        >
            <CircularProgress color="secondary" />

        </div>
    )
}