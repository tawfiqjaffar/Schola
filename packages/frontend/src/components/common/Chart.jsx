import React from 'react';
import { Radar } from 'react-chartjs-2';

function Chart() {
  let data = {
    labels: ['French', 'History', 'Science', 'Maths', 'Sport', 'English'],
    datasets: [
      {
        label: 'Mes notes',
        fillColor: '#ff00ff',
        strokeColor: 'rgba(0, 172, 255, 1)',
        pointColor: 'rgba(0, 172, 255, 1)',
        pointStrokeColor: '#ff00ff',
        pointHighlightFill: '#ff00ff',
        pointHighlightStroke: 'red',
        data: [1, 5, 13, 15, 17, 20],
      },
    ],
  };

  return (
    <div style={{ margin: '10px' }}>
      <Radar
        data={data}
        height="100%"
        width="100%"
        option={{
          scaleShowLine: true,
          angleShowLineOut: true,
          scaleShowLabels: false,
          scaleBeginAtZero: true,
          angleLineColor: 'rgba(0,0,0,.1)',
          angleLineWidth: 1,
          angleLineInterval: 1,
          pointLabelFontFamily: "'Arial'",
          pointLabelFontStyle: 'normal',
          pointLabelFontSize: 10,
          pointLabelFontColor: '#666',
          pointDot: true,
          pointDotRadius: 3,
          pointDotStrokeWidth: 1,
          pointHitDetectionRadius: 20,
          datasetStroke: true,
          datasetStrokeWidth: 2,
          datasetFill: true,
          responsive: true,
          maintainAspectRatio: false,
        }}
      />
    </div>
  );
}

export default Chart;
