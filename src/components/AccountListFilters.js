import React from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import { DateRangePicker} from 'react-dates';
import { setTextFilter, sortByDate, setStartDate, setEndDate } from '../actions/filters';
import { startReportAccounts } from '../actions/accounts';

class AccountListFiters extends React.Component {
    state = {
        calenderFocused: null
    };
    onDatesChange = ({ startDate, endDate }) => {
        this.props.setStartDate(startDate);
        this.props.setEndDate(endDate);
    };
    onFocusChange = (calenderFocused) => {
        this.setState(() => ({ calenderFocused }));
    };
    render() {
        return (
            <div className="content-container dana-filter-container">
                <div className="dana-filter">
                    <a onClick={() => this.onDatesChange({ startDate: moment.utc().subtract(1, 'year'), endDate: moment.utc() })}>Last Year</a> |&nbsp;
                    <a onClick={() => this.onDatesChange({ startDate: moment.utc().subtract(3, 'months'), endDate: moment.utc() })}>Last 3 Month</a> |&nbsp;
                    <a onClick={() => this.onDatesChange({ startDate: moment.utc().subtract(1, 'month'), endDate: moment.utc() })}>Last 30 Days</a> |&nbsp;
                    <a onClick={() => this.onDatesChange({ startDate: moment.utc().subtract(1, 'week'), endDate: moment.utc() })}>Last 7 Days</a>
                </div>
                <div className="input-group__item">
                    <DateRangePicker
                        startDate={this.props.filters.startDate}
                        endDate={this.props.filters.endDate}
                        onDatesChange={this.onDatesChange}
                        focusedInput={this.state.calenderFocused}
                        onFocusChange={this.onFocusChange}
                        showClearDates={true}
                        numberOfMonths={1}
                        isOutsideRange={() => false}
                    />
                </div>
            </div>
        );
    }
};

const mapStateToProps = (state) => {
    return{
        filters: state.filters
    };
};

const mapDispatchToProps = (dispatch) => ({
    setStartDate: (startDate) => dispatch(setStartDate(startDate)),
    setEndDate: (endDate) => dispatch(setEndDate(endDate))
});

export default connect(mapStateToProps, mapDispatchToProps)(AccountListFiters);