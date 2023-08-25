import styles from './sass/modules/app.module.scss';
import Render from "./render/render";
import { Analog_Clock_Function } from "./ts/Analog_Clock.function";


export default function Start(start: HTMLDivElement): void {
    start.innerHTML = (
        `
            <div id='container' class='${styles.container}'>
                <div class='${styles.clock}'>
                    <div id='clockwork'></div>       
                </div>
            </div>
        `
    )

    Render();
    Analog_Clock_Function();
  }
  
