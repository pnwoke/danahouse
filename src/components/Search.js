import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter, sortByDate, setStartDate, setEndDate } from '../actions/filters';

class AccountListFiters extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            search: '',
        };
    }
    onSearchChange = (e) => {
        const search = e.target.value;
        this.setState(() => ({ search }));

        this.props.setTextFilter(search);
    };
    render() {
        return (
            <input className="pt-input" 
                placeholder="Search visitor..." 
                type="text"
                value={this.state.search}
                onChange={this.onSearchChange} />
        );
    }
};

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    };
};

const mapDispatchToProps = (dispatch) => ({
    setTextFilter: (startDate) => dispatch(setTextFilter(startDate))
});

export default connect(mapStateToProps, mapDispatchToProps)(AccountListFiters);