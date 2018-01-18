import React from 'react';
import PropTypes from 'prop-types';
import './List.css'

class List extends React.Component{
    getName = () => {
        alert(this.props.list.name);
    }
    render(){
        const {list}=this.props;
        return (
            <div>
                <div className='box'>
                    <div className='content'>
                        <div className='header'>
                            <img className='image' src='http://placekitten.com/g/64/64' alt='图片' />
                        </div>
                        <div className='header'>
                            <div className='box-text header-font' onClick={this.getName}>{list.name}</div>
                            <div className='box-text'>{list.time}</div>
                        </div>
                    </div>
                    <div className='content content-main'>
                        {list.content}
                    </div>
                </div>  
            </div>
        );
    }
}

List.propTypes = {
    list: PropTypes.object,
};

export default List;