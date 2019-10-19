import React, { Component } from 'react';
import './loading.css';
import { css } from '@emotion/core';
import logo from './assets/img/logo_komatsu.png';
import { PulseLoader } from 'react-spinners';

export default class loading extends Component {
    constructor(props) {
        super(props);
        this.state = {
          loading: true
        }
      }
    render() {
        const override = css`
            display: block;
            margin: 0 auto;
            border-color: red;
        `;
        return (
            <div className='loading sweet-loading'>
                <img src={logo} alt="komatsu"/>
                <PulseLoader
                    css={override}
                    sizeUnit={"px"}
                    size={15}
                    color={'#0050A1'}
                    loading={this.state.loading}
                />
            </div>
        )
    }
}
