import Plotly from "react-plotly.js";

const MultiLineChart = ({ data, title, xName, yName }) => {
  const plotData = Object.keys(data).map((line, index) => ({
    x: Object.keys(data[line]),
    y: Object.values(data[line]),
    type: "scatter",
    mode: "lines+markers",
    name: line,
    visible: true,
  }));

  return (
    <Plotly
      data={plotData}
      style={{
        width: "90%",
        margin: "20px 20px",
      }}
      layout={{
        title: title,
        showlegend: true,
        legend: { orientation: "v" },
        updatemenus: [
          {
            type: "buttons",
            showactive: false,
            buttons: [
              {
                label: "Hide All",
                method: "restyle",
                args: ["visible", "legendonly"],
              },
              {
                label: "Show All",
                method: "restyle",
                args: ["visible", true],
              },
            ],
          },
        ],
        xaxis: {
          title: xName,
        },
        yaxis: {
          title: yName,
        },
      }}
    />
  );
};

export default MultiLineChart;
