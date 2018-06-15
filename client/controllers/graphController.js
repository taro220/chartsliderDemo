app.controller('graphController', ['$scope', 'dateService', function($scope,dateService) {
  $scope.dateService = dateService;
  $scope.labels = [];

  for(var i =0; i<=24; i++) {
    $scope.labels.push(i);
  }
  $scope.series = ['Series A'];
  $scope.data = [[]];
  for(var i =0; i<=24; i++) {
    $scope.data[0].push({x:i, y:Math.random(40)+40})
  }


  $scope.datasetOverride = [{ yAxisID: 'y-axis-1' }, { yAxisID: 'y-axis-2' }];
  $scope.options = {
    scales: {
      yAxes: [
        {
          id: 'y-axis-1',
          type: 'linear',
          display: true,
          position: 'left'
        },
        {
          id: 'y-axis-2',
          type: 'linear',
          display: true,
          position: 'right'
        }
      ],
      xAxes: [
        {
          id: 'x-axis-1',
          type: 'linear',
          display: true,
          position: "bottom",
          ticks: {
            max: 24,
            min: 0,
            stepSize: 1,
            callback: function(value, index, values) {
              return index;
              // return $scope.labels[Math.trunc(index)];
            }
          }
        }
      ]
    },
    animation: false,
    annotation: {
      drawTime: "afterDraw",
      annotations: [{
        drawTime: 'afterDatasetsDraw',
        type: "line",
        mode: "vertical",
        scaleID: "x-axis-1",
        value: 12,
        borderColor: "red",
        label: {
          content: "Time",
          enabled: true,
          position: "top"
        }
      }]
    }
  };

  $scope.$watch('dateService.val', function() {
    $scope.options.annotation.annotations[0].value = dateService.val;
  });


}]);
