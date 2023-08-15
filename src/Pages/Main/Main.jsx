import React, { useRef, useState, useEffect } from 'react'
import { AiOutlineDownload } from 'react-icons/ai'
import Main1 from '../../assets/mainbackground.jpg'
import maintitle from '../../assets/Title.png'
import { useInView } from 'framer-motion'
import { motion } from 'framer-motion'
import ReactPlayer from 'react-player/youtube'

import './Main.css'

function Main() {
    const [windwosWidth, setWindowsWidth] = useState(window.innerWidth)

    const ref = useRef(null)
    const isInView = useInView(ref)

    useEffect(() => {
        function handleResize() {
            setWindowsWidth(window.innerWidth)
        }
        window.addEventListener('resize', handleResize)
    })

    return (
        <div
            className="Mainbackground"
            style={{
                backgroundImage: `url(${Main1})`,
                minHeight: '100vh',
                height: 'auto',
            }}
        >
            <motion.img
                ref={ref}
                src={maintitle}
                className="Maintitle"
                style={{
                    transform: isInView ? 'translateX(0)' : 'translateX(-200px)',
                    opacity: isInView ? 1 : 0,
                    transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
                    marginTop: '5%',
                }}
            ></motion.img>

            <motion.div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    marginRight: '5vw',
                    top: '3rem',
                    alignItems: 'flex-end',
                }}
            >
                <a
                    href="https://goo.gl/maps/yUavFiSYCd612aS37"
                    target="_blank"
                    style={{ color: '#fff', marginBottom: '3vh' }}
                >
                    <h3>台北市信義區松仁路9號(國泰金融會議中心)</h3>
                </a>
                <a href="https://mitw.dicom.org.tw/pdf/mitw2023_DM.pdf" target="_blank" style={{ color: '#fff' }}>
                    MITW-DM 宣傳單下載 <AiOutlineDownload />
                </a>
            </motion.div>

            <div
                style={{
                    width: '100%',
                    height: (windwosWidth / 16) * 8,
                }}
            >
                <ReactPlayer
                    url="https://youtu.be/fzyurYjOLn8"
                    width={window.innerWidth * 0.9}
                    height={((window.innerWidth * 0.9) / 16) * 8}
                    style={{ margin: '1rem 5% 0 5%' }}
                    playing={true}
                    loop={true}
                />
            </div>
        </div>
    )
}

export default Main
