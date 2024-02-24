/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import hero from '../assets/hero.png';
const About = () => {

    return (
        <>
            <div className="about-container bl">
                <div className="about-text">
                    <h1 style={{ fontSize: '75px', fontWeight: '400', lineHeight: '87px' }}>What is <br /> Mental Health?</h1>
                    <p style={{ fontSize: '24px', fontWeight: '400', lineHeight: '45px', textAlign: 'justify', marginTop: '20px' }}>
                        Mental health encompasses the overall well-being of an individual's emotional and psychological state. In South Africa, mental health disorders are prevalent, with the South African Stress and Health (SASH) study reporting that around 30% of the population will experience a mental disorder in their lifetime.
                    </p>
                </div>
                <img src={hero.src} alt="Hero" className="hero-image" />
            </div>
            <div className="about-parag bl">
                <p style={{ fontSize: '24px', fontWeight: '400', lineHeight: '45px', textAlign: 'justify', marginTop: '20px',marginLeft:'20px' }}>
                    Additionally, the South African Depression and Anxiety Group (SADAG) estimates that approximately 1 in 6 South Africans suffer from anxiety, depression, or substance abuse disorders. The suicide rate in South Africa, according to the World Health Organization (WHO) data for 2016, was approximately 13.8 per 100,000 population. Unfortunately, mental health stigma persists, as highlighted by a study conducted by the Human Sciences Research Council (HSRC) in 2008, revealing that 78% of South Africans believe individuals with mental health problems are unfit for work. Access to mental health services remains a challenge, with the SASH study indicating that only 15% of South Africans with a mental health disorder received treatment in the year preceding the study. Socioeconomic factors such as financial stress and unemployment significantly contribute to mental health problems in the country, according to the South African Depression and Anxiety Group (SADAG).
                </p>
            </div>
            <div className="about-container gn" style={{display:'block'}}>
                <div>
                <h2 style={{ fontSize: '45px', fontWeight: '400', lineHeight: '53px',marginLeft:'30px',marginTop:'50px',paddingTop:'30px'  }}>Handling Mental Health</h2><br/>
                </div>
                <div style={{display:'flex' ,marginLeft:'20px' }}>
                    <img src={hero.src} alt="Hero" className="hero-image" />

                    <div className="about-text" style={{marginLeft:'100px',fontSize: '24px', fontWeight: '400', lineHeight: '45px', textAlign: 'justify', marginTop: '20px',marginBottom:'20px'}}>
                        <span>How can I help myself?</span>
                        <ul>
                            <ol>i. Try to be active and exercise. </ol>
                            <ol>ii. Break large tasks into small ones. </ol>
                            <ol>iv. Spend time with friends and family. </ol>
                            <ol>iii. Set priorities. </ol>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="about-container bl">
                <div className="about-text" style={{marginTop:'50px',paddingTop:'30px',marginBottom:'20px' }}>
                    <h2 style={{ fontSize: '45px', fontWeight: '400', lineHeight: '53px' }}>How can I help others?</h2>
                    <ul style={{marginLeft:'100px',fontSize: '24px', fontWeight: '400', lineHeight: '45px', textAlign: 'justify', marginTop: '20px'}}>
                        <ol>i. Offer support and patience. </ol>
                        <ol>ii. Invite him/her to outdoor activities e.g. walks.</ol>
                        <ol>iii. Remind him about his medication frequently.</ol>
                        <ol>iv. Encourage them that with time and treatment, depression will lift.</ol>
                    </ul>
                </div>
                <img src={hero.src} alt="Hero" className="hero-image" />
            </div>
        </>
    );
};

export default About;
