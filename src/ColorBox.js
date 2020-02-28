import React, { Component } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import './ColorBox.css';

export default class ColorBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            copied: false
        }
    }

    changeCopyState = () => {
        this.setState({ copied: true }, () => {
            setTimeout(() => {
                this.setState({ copied: false })
            }, 1500)
        })
    }

    render() {
        let { background, name } = this.props;
        let { copied } = this.state;
        return (
            <CopyToClipboard text={background} onCopy={this.changeCopyState}>
                <div className='ColorBox' style={{ background: background }}>
                    <div className={`copy-overlay ${copied && "show"}`} style={{ background: background }} />
                    <div className={`copy-msg ${copied && "show"}`}>
                        <h2>COPIED!</h2>
                        <p>{background}</p>
                    </div>
                    <div className='copy-container'>
                        <div className='box-content'>
                            <span>{name}</span>
                        </div>
                        <button className='copy-btn'>copy</button>
                    </div>
                    <span className='see-more'>More</span>
                </div>
            </CopyToClipboard >
        );
    }
}