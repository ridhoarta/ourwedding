import React from 'react'

import moment from 'moment'

import {deviceType} from 'react-device-detect'

const oneSecond = 1000
const oneMinute = 60 * oneSecond
const oneHour = 60 * oneMinute
const oneDay = 24 * oneHour

class App extends React.Component {
    dateTarget = moment('2020-06-20')

    state = {
        diffs: this.getDateDiffs(),
        isNowLaterThanDateTarget: false
    }

    componentDidMount() {
        this.updateDiffs()
    }

    render() {
        const {
            days,
            minutes,
            hours,
            seconds
        } = this.state.diffs

        return (
            <div
                style= {{
                    alignItems: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    height: '100vh'
                }}
            >
                
                <h1
                    style = {{
                        fontFamily: 'MontserratMedium',
                        fontSize: 16,
                        paddingBottom: 10,
                        margin: 0
                    }}
                >WE ARE GETTING MARRIED</h1>
                <div 
                    style= {{
                        display: 'flex',
                        flexDirection: deviceType === 'mobile' ? 'column' : 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <div
                        style = {{
                            display: 'flex',
                            flexDirection: 'column',
                            width: 200
                        }}
                    >
                        <h1
                            style = {{
                                fontFamily: 'DancingScriptBold',
                                fontSize: 60,
                                margin: 0,
                                textAlign: deviceType === 'mobile' ? 'center' : 'right'
                            }}
                        > Ridho</h1>
                        <p
                            style = {{
                                fontFamily: 'MontserratMedium',
                                fontSize: 12,
                                margin: 0,
                                textAlign: deviceType === 'mobile' ? 'center' : 'right'
                            }}
                        >Octanio Noya</p>
                    </div>
                    <div
                        style = {{
                            padding: 20,
                        }}
                    >
                        <img 
                            src={require('./Assets/profile.jpg')}
                            alt = "Our Profile"
                            style={{
                                width: 200,
                                height: 200,
                                objectFit: 'cover',
                                borderRadius: 100
                            }}
                        />
                    </div>
                    <div
                        style = {{
                            display: 'flex',
                            flexDirection: 'column',
                            width: 200
                        }}
                    >
                        <h1
                            style = {{
                                fontFamily: 'DancingScriptBold',
                                fontSize: 60,
                                margin: 0,
                                textAlign: deviceType === 'mobile' ? 'center' : 'left'
                            }}
                        >Arta</h1>
                        <p
                            style = {{
                                fontFamily: 'MontserratMedium',
                                fontSize: 12,
                                margin: 0,
                                textAlign: deviceType === 'mobile' ? 'center' : 'left'
                            }}
                        >Mevia Maharani</p>
                    </div>
                </div>
                
                <p
                    style = {{
                        fontFamily: 'MontserratMedium',
                        fontSize: 18,
                        paddingTop: deviceType === 'mobile' ? 30 : 10,
                        paddingBottom: 10,
                        margin: 0
                    }}
                >
                    Countdown To Wedding Day
                </p>

                {
                    this.state.isNowLaterThanDateTarget ?
                        <p>Let's Come To Our Wedding</p>
                        :
                        <div
                    style= {{
                        alignItems: 'center',
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center',
                    }}
                >
                    <div
                        style = {{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            width: 75
                        }}
                    >
                        <p
                            style = {{
                                fontFamily: 'MontserratMedium',
                                fontSize: 16,
                                margin: 0
                            }}
                        >
                            {days}
                        </p>
                        <p
                            style = {{
                                fontFamily: 'MontserratMedium',
                                fontSize: 14,
                                margin: 0
                            }}
                        >
                            Days
                        </p>
                    </div>
                    <div
                        style = {{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            width: 75
                        }}
                    >
                        <p
                            style = {{
                                fontFamily: 'MontserratMedium',
                                fontSize: 16,
                                margin: 0
                            }}
                        >
                            {hours}
                        </p>
                        <p
                            style = {{
                                fontFamily: 'MontserratMedium',
                                fontSize: 14,
                                margin: 0
                            }}
                        >
                            Hours
                        </p>
                    </div>
                    <div
                        style = {{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            width: 75
                        }}
                    >
                        <p
                            style = {{
                                fontFamily: 'MontserratMedium',
                                fontSize: 16,
                                margin: 0
                            }}
                        >
                            {minutes}
                        </p>
                        <p
                            style = {{
                                fontFamily: 'MontserratMedium',
                                fontSize: 14,
                                margin: 0
                            }}
                        >
                            Minutes
                        </p>
                    </div>
                    <div
                        style = {{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            width: 75
                        }}
                    >
                        <p
                            style = {{
                                fontFamily: 'MontserratMedium',
                                fontSize: 16,
                                margin: 0
                            }}
                        >
                            {seconds}
                        </p>
                        <p
                            style = {{
                                fontFamily: 'MontserratMedium',
                                fontSize: 14,
                                margin: 0
                            }}
                        >
                            Seconds
                        </p>
                    </div>
                </div>
                }
            </div>
        )
    }

    getDateDiffs() {
        const days = Math.round(Math.abs((this.dateTarget.toDate() - Date.now()) / oneDay))
        
        const tomorrow = new Date()

        tomorrow.setDate(tomorrow.getDate() + 1)
        tomorrow.setHours(0,0,0,0)

        const hours = Math.round(Math.abs((tomorrow - Date.now()) / oneHour))

        const nextHourDate = new Date()
        nextHourDate.setHours(nextHourDate.getHours() + 1)
        nextHourDate.setMinutes(0)

        const minutes = Math.round(Math.abs((nextHourDate - Date.now()) / oneMinute)) - 1

        const nextMinuteDate = new Date()
        nextMinuteDate.setMinutes(nextMinuteDate.getMinutes() + 1)
        nextMinuteDate.setSeconds(0)
        
        const seconds = Math.round(Math.abs((nextMinuteDate - Date.now()) / oneSecond))

        return {
            days,
            hours,
            minutes,
            seconds
        }
    }

    updateDiffs() {
        setTimeout(() => {
            this.setState({
                diffs: this.getDateDiffs(),
                isNowLaterThanDateTarget: this.dateTarget.toDate() < new Date()
            })

            this.updateDiffs()
        }, 250)
    }
}

export default App