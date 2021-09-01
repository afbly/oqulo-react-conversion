import React from 'react';
import '../scss/BarGraph.scss';
import '../../App.scss';


function BarGraph() {
    return (
        <div>
            <div className='bar-graph'>
                <div className='graph-labels'>
                    <ul>
                        <li>
                            <span class="hot-desks label-bar"></span>
                            <h5>Hot Desks&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h5>
                        </li>
                        <li>
                            <span class="private-offices label-bar"></span>
                            <h5>Private Offices</h5>
                        </li>
                        <li>
                            <span class="virtual-offices label-bar"></span>
                            <h5>Virtual Offices</h5>
                        </li>
                        <li>
                            <span class="meeting-rooms label-bar"></span>
                            <h5>Meeting Rooms</h5>
                        </li>
                    </ul>
                </div>
                <div className='graph-content'>
                    <div className='graph-axis'>
                        <ul>
                            <li>140,00</li>
                            <li>120,00</li>
                            <li>100,00</li>
                            <li>80,00</li>
                            <li>60,00</li>
                            <li>40,00</li>
                            <li>20,00</li>
                            <li>0</li>
                        </ul>
                    </div>
                    <div className='graph-image'>
                        <img src="/99images/bar-graph.png" alt="BarGraph" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BarGraph;
