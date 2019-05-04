import React from "react";

import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
import noDataToDisplay from "highcharts/modules/no-data-to-display";

noDataToDisplay(Highcharts);

class Chart extends React.Component {
  getDefaultOptions() {
    return {
      credits: {
        enabled: false
      },
      noData: {
        position: {
          x: 0,
          y: 0,
          align: "center",
          verticalAlign: "middle"
        }
      }
    };
  }
  render() {
    const options = {
      ...this.getDefaultOptions(),
      ...this.props.options
    };
    return <HighchartsReact highcharts={Highcharts} options={options} />;
  }
}

export default Chart;
