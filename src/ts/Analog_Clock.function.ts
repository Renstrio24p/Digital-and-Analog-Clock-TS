import styles from '../sass/modules/app.module.scss'

export const Analog_Clock_Function = () => {

    // Clock Work
    const ClockWork = document.getElementById('clockwork') as HTMLDivElement | null;
    const romanNumerals = ['','I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII'];

    for (let i = 1; i < romanNumerals.length; i++) {
        const Label = document.createElement('label') as HTMLLabelElement;
        Label.style.setProperty('--i', i.toString()); 
        const span = document.createElement('span') as HTMLSpanElement;
        span.textContent = romanNumerals[i];

        Label.appendChild(span);

        if (ClockWork) {
            ClockWork.appendChild(Label);
        }
    }

    for (let j = 1; j <= 60; j++) {
        const Label2 = document.createElement('label') as HTMLLabelElement;
        Label2.style.setProperty('--l', j.toString()); 
        Label2.classList.add(`${styles.lines}`);
        const span = document.createElement('span') as HTMLSpanElement;
        span.textContent = '';
        

        if (ClockWork) {
            ClockWork.appendChild(Label2);
        }
    }

    // Hand Indicators

    const IndicatorDiv = document.createElement('div') as HTMLDivElement | null;
    const HourHand = document.createElement('div') as HTMLDivElement | null;
    const MinuteHand = document.createElement('div') as HTMLDivElement | null;
    const SecondHand = document.createElement('div') as HTMLDivElement | null;

    IndicatorDiv?.classList.add(styles.indicators)
    HourHand?.classList.add(styles.hand,styles.hour)
    MinuteHand?.classList.add(styles.hand,styles.min)
    SecondHand?.classList.add(styles.hand,styles.sec)

    {HourHand && IndicatorDiv?.appendChild(HourHand)}
    {MinuteHand && IndicatorDiv?.appendChild(MinuteHand)}
    {SecondHand && IndicatorDiv?.appendChild(SecondHand)}
    {IndicatorDiv && ClockWork?.appendChild(IndicatorDiv)}

    // Hand Indicator functions

    const body = document.querySelector('body') as HTMLBodyElement | null,
          hourHand = document.querySelector(`.${styles.hour}`) as HTMLDivElement | null,
          minHand = document.querySelector(`.${styles.min}`) as HTMLDivElement | null,
          secHand = document.querySelector(`.${styles.sec}`) as HTMLDivElement | null,
          modeSwitch = document.querySelector(`.${styles['mode-switch']}`);

          const UpdateTime = () => {
            let date = new Date(),
                secToDeg = (date.getSeconds() / 60) * 360,
                minToDeg = (date.getMinutes() / 60) * 360,
                hourToDeg = (date.getHours() / 12) * 360;
        
            if(secHand) secHand.style.transform = `rotate(${secToDeg}deg)`; 
            if(minHand) minHand.style.transform = `rotate(${minToDeg}deg)`;
            if(hourHand) hourHand.style.transform = `rotate(${hourToDeg}deg)`; 
        };
        
        setInterval(UpdateTime, 1000);

    // Digital Clock 

    const DigitalClock = document.createElement('div') as HTMLDivElement;
    const ClockDiv = document.getElementById('container') as HTMLDivElement | null;
    DigitalClock.classList.add(styles.fonts, styles['digital-clock']);

const DigitalUpdateTime = () => {
    let date = new Date(),
        sec = date.getSeconds(),
        min = date.getMinutes(),
        hours24 = date.getHours(), // Get hours in 24-hour format

        // Convert hours to 12-hour format
        hours12 = hours24 % 12 || 12,
        
        // Determine if it's AM or PM
        ampm = hours24 < 12 ? 'AM' : 'PM';

    DigitalClock.innerHTML = `${hours12}:${min}:${sec} ${ampm}`;
}

setInterval(DigitalUpdateTime, 1000);

if (ClockDiv !== null) {
    ClockDiv.appendChild(DigitalClock);
}

    // Mode Switch

    const ModeSwitch = document.createElement('div') as HTMLDivElement | null;

    if (ModeSwitch !== null) {
        ModeSwitch.classList.add(styles['mode-switch']);
        ModeSwitch.textContent = 'Darkmode';

        if(ClockDiv !== null){
            ClockDiv.appendChild(ModeSwitch);
        }
    }

    if(ModeSwitch !== null && body !== null) {
        ModeSwitch.addEventListener('click',()=>{
            body.classList.toggle(styles.dark);
        })
    }
}
