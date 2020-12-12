import React from 'react';
// Animation
import { motion } from 'framer-motion';
import { pageAnimation, titleAnim, lineAnim } from '../animation';
import styled from 'styled-components';


const ContactUs = () => {
    return (
        <ContactStyle exit="exit" variants={pageAnimation} initial="hidden" animate="show">
            <Title>
                <Hide>
                    <motion.h2 variants={titleAnim}>Get in touch.</motion.h2>
                </Hide>
            </Title>
            <div>
                <Hide>
                    <Social variants={titleAnim}>
                    <Circle />
                        <h2>Send us a Message</h2>
                </Social>
                </Hide>
                <Hide>
                    <Social variants={titleAnim}>
                    <Circle />
                        <h2>Send us an Email</h2>
                </Social>
                </Hide>
                <Hide>
                    <Social variants={titleAnim}>
                    <Circle />
                        <h2>Social Media</h2>
                </Social>
                </Hide>
            </div>
        </ContactStyle>
    )
}

const ContactStyle = styled(motion.div)`
    padding: 5rem 10rem;
    color: #ffffff;
    min-height: 90vh;
`
const Title = styled.div`
    margin-bottom: 4rem;
    color: #ffffff
`
const Hide = styled.div`
    overflow: hidden;
`
const Circle = styled.div`
border-radius: 50%;
width: 3rem;
height: 3rem;
background: #e9e9e9
`
const Social = styled(motion.div)`
display: flex;
align-items: center;
h2{
    margin: 2rem;
}
`

export default ContactUs;