import React, { useEffect } from 'react';
import s from './AboutMe.module.scss';
import 'air-datepicker/air-datepicker.css';
import AirDatepicker from 'air-datepicker';

const AboutMe = () => {
    useEffect(() => {
        const dateInput = document.getElementById('js-choose-date-news');
        const calendarIcon = document.getElementById('js-choose-date-icon-calendar-news');

        let datepicker = new AirDatepicker(dateInput, {
            autoClose: true,
            dateFormat: 'yyyy/MM/dd',
            multipleDates: false,
            position: 'bottom left',
            navTitles: {
                days: 'MMMM <i>yyyy</i>',
                years: '<strong>yyyy</strong>',
            },
            buttons: [
                {
                    content: 'Сбросить',
                    className: 'show-button',
                },
            ],
        });

        calendarIcon.addEventListener('click', () => {
            datepicker.show();
        });

    }, []);

    return (
        <div className={s.abouteWrapper}>
            <div className={s.container}>
                <div className={s.img}></div>
                <div className={s.title}>
                    <div className={s.sectionTitle}>A STORY ABOUT ME</div>
                </div>
                <p className={s.aboutP}>
                    I'm a responsible and motivated developer with experience in creating SPA, Vue, Nuxt, Pinia, React, Next, Redux, JS(TS), leading-page using CSS and SASS. Now I am improving my skills in this direction and expanding them with the help of new technologies. I spend my leisure time studying books, as well as improving my English. I will adapt to any requirements of the company.
                </p>
            </div>
            <label className="choose-date js-choose-date choose-date-news">
                <input
                    type="text"
                    className="choose-date__input js-choose-date-news"
                    id="js-choose-date-news"
                    style={{ display: 'none' }}
                />
                <span className="choose-date__text" id="js-choose-date-icon-calendar-news">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g opacity="0.5">
                            <path
                                d="M15.8333 3.33301H4.16624C3.24573 3.33301 2.49951 4.07923 2.49951 4.99973V16.6668C2.49951 17.5873 3.24573 18.3335 4.16624 18.3335H15.8333C16.7538 18.3335 17.5 17.5873 17.5 16.6668V4.99973C17.5 4.07923 16.7538 3.33301 15.8333 3.33301Z"
                                stroke="#1C1C1C"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path d="M13.3315 1.66602V4.99946" stroke="#1C1C1C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M6.66357 1.66602V4.99946" stroke="#1C1C1C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M2.49951 8.33301H17.5" stroke="#1C1C1C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </g>
                    </svg>
                </span>
            </label>
        </div>
    );
};

export default AboutMe;
