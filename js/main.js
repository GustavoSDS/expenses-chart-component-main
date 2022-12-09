'use strict';
import data from '../data.json' assert{type: 'json'}

let chartBarsContainer = document.querySelector('.chart__bars-container');

let values = [];

data.forEach(elemet => {
    values.push(elemet.amount);
    chartBarsContainer.innerHTML +=
        `   <div class="chart__bar">
    <div class="chart__bar--label">$${elemet.amount}</div>
    <div class="chart__bar--day">${elemet.day}</div>
    </div> 
    `;
});

let maxValue = Math.max(...values);
let alturaMaxBar = 200;

let bars = document.querySelectorAll('.chart__bar');
bars = [...bars];

bars.forEach(bar => {
    let nuevoValor = parseFloat(bar.childNodes[1].innerText.slice(1));
    let alturaActual = (nuevoValor * alturaMaxBar) / maxValue;
    bar.style.height = `${alturaActual}px`;

    // Pintar la bara mas alta
    if (nuevoValor == maxValue) {
        bar.style.backgroundColor = 'hsl(186, 34%, 60%)';
    }

    bar.addEventListener('mouseover', (event) => {
        if (event.target.childNodes[1] !== undefined) {
            let labelElement = event.target.childNodes[1];
            labelElement.style.display = 'block';
        }
    });
    bar.addEventListener('mouseout', (event) => {
        if (event.target.className === 'chart__bar') {
            let labelElement = event.target.childNodes[1];
            labelElement.style.display = 'none';
        }
    });
});
