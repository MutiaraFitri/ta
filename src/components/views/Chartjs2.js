import React, { Component } from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';

class Chartjs2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chartData: {
                labels: ['s', 's', 'r', 'k', 'j', 's', 'm'],
                datasets: [
                    {
                        label: 'finish',
                        data: [
                            10,
                            7,
                            5,
                            3,
                            1,
                            3,
                            4,
                        ],
                        backgroundColor: [
                            "#555567",
                            "#444444",
                            "#134444",
                            "#123455",
                            "#956789",
                            "#966111",
                            "#966635"

                        ]
                    }
                ]
            }
        }
    }
    render() {
        return (
            <div className="chart">
                <Bar
                    data={this.props.data}
                    options={
                        {
                            legend: {
                                display: true,
                                position: "top"
                            },
                            maintainAspectRatio: false,
                            scales: {
                                yAxes: [{
                                    ticks: {
                                        beginAtZero: true,
                                        stepSize: 5
                                    }
                                }]
                            }
                        }
                    }
                />
            </div>
        )
    }
}
export default Chartjs2;