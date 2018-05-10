import React from 'react';
import { connect } from 'react-redux';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import AccountListFiters from '../AccountListFilters';
import { startReportAccounts } from '../../actions/report';
import selectVisitor from '../../selectors/report';
import ReportTable from './ReportTable';

const data = [
];

export class Report extends React.Component {
    componentDidMount() {
        this.props.startReportAccounts();
    }
    render() {
        console.log(this.props.visitor);
        return (
            <div className="dana-visitor-list-container">
                <h2 className="dana-table-title">Statistics</h2>
                <div className="pt-card pt-elevation-2">
                    <AccountListFiters />
                    {
                        this.props.visitor.length > 0 ?
                            (
                                <div className="dana-chart">
                                    <div className="dana-main-table">
                                        <table className="pt-html-table pt-html-table-striped pt-html-table-bordered dana-table">
                                            <thead>
                                                <tr>
                                                    <th>Date</th>
                                                    <th>Total Visitor</th>
                                                </tr>
                                            </thead>
                                            {this.props.visitor.map((v, vIndex) => {
                                                return <ReportTable key={vIndex} {...v} />
                                            })}
                                        </table>
                                    </div>
                                    <div>
                                        <div className="dana-report-number">
                                            <h1>65</h1>
                                            <div className="dana-report-number-sub">
                                                <h4>10 Vendors</h4>
                                                <h4>5 Appointment</h4>
                                                <h4>30 Interviews</h4>
                                                <hr />
                                                <h4>20 Others</h4>
                                            </div>
                                        </div>
                                        <LineChart width={600} height={300} data={this.props.visitor}
                                            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                                            <XAxis dataKey="name" />
                                            <YAxis />
                                            <CartesianGrid strokeDasharray="3 3" />
                                            <Tooltip />
                                            <Legend />
                                            <Line type="monotone" dataKey="visitor" stroke="#8884d8" activeDot={{ r: 8 }} />
                                        </LineChart>
                                    </div>
                                </div>
                            ) : (
                                <div className="dana-nochart"><h1>No Data Available</h1></div>
                            )
                    }
                </div>
            </div>
        );
    }
};

const mapStateToProps = (state) => {
    return {
        visitor: selectVisitor(state.reports, state.filters)
    };
};

const mapDispatchToProps = (dispatch) => ({
    startReportAccounts: () => dispatch(startReportAccounts())
});

export default connect(mapStateToProps, mapDispatchToProps)(Report);