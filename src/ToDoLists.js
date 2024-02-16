import React from 'react';

const ToDoLists = (props) => {
    const handleDelete = () => {
        props.onSelect(props.id);
    };

    const isTextValid = props.text.trim() !== '';

    if (!isTextValid) {
        return null;
    }

    return (
        <div className='remove'>
            <i className="delete-button" onClick={handleDelete}>❌</i>
            
            <ol>{props.text}</ol>
        </div>
    );
};

export default ToDoLists;
