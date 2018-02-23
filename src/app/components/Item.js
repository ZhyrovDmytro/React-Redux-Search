import React, { Component } from 'react';
import ItemInfo from './ItemInfo';
import ModalWindow from './ModalWindow';

export default class Item extends Component {
    state = {
        isOpen: false
    };

    handleClick = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        const modal = this.state.isOpen ? (
            <ModalWindow image={this.props.image} />
        ) : null;
        return (
            <picture
                className="results__item"
                onClick={this.handleClick}
            >
                <img
                    className="results__image"
                    src={this.props.image.urls.small}
                    alt=""
                />
                { modal }
                <ItemInfo info={this.props.image} />
            </picture>
        );
    }
}
