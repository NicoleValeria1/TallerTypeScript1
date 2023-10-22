import { Serie } from "./serie.js";
import { dataSeries } from "./dataSeries.js"

const seriesTbody: HTMLElement = document.getElementById('series')!;

function renderSeriesInTable(series: Serie[]): void {
  series.forEach(c => {
    let trElement = document.createElement("tr");
    trElement.innerHTML = `<td class="bg-light">${c.id}</td>
                           <td class="bg-light">${c.name}</td>
                           <td class="bg-light">${c.channel}</td>
                           <td class="bg-light">${c.seasons}</td>`;
    seriesTbody.appendChild(trElement);
  });
}


function getAverageSeasons(series: Serie[]): number {
  let averageSeasons: number = 0;
  let totalSeasons: number = 0;
  let counter: number = 0;
  series.forEach(serie => {
    totalSeasons = totalSeasons + serie.seasons;
    counter = counter + 1;
  });
  averageSeasons = totalSeasons / counter;
  return averageSeasons;
}

function renderAverageSeasons(): void {
  let average : number = getAverageSeasons(dataSeries);
  let trElement = document.createElement("tr");
    trElement.innerHTML = `Seasons average: ${average}`;
    seriesTbody.appendChild(trElement);
}

renderSeriesInTable(dataSeries);
renderAverageSeasons();