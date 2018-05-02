import React from 'react';
import PropTypes from 'prop-types';

export default function historyList(props) {
    const historyItemsToShow = props.suggestItemToShow.slice(0, 5);

    const createHistoryItem = historyItemsToShow.map((historyItem) => {
        return (
            <li
                key={`_${historyItem.id}${Math.random()}`}
                className="history__item"
                onMouseDown={() => props.searchByHistory(historyItem)}
                role="menuitem"
            >
                <span>
                    { historyItem }
                </span>
            </li>
        );
    });

    return (
        <div className="history">
            <ul className="history__list">
                { createHistoryItem }
            </ul>
        </div>
    );
}

historyList.propTypes = {
    suggestItemToShow: PropTypes.array.isRequired,
    searchByHistory: PropTypes.func.isRequired
};
