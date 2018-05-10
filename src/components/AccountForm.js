import React from 'react';
import moment from 'moment';
import Webcam from 'react-webcam';
import { FormGroup } from '@blueprintjs/core';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

export default class AccountForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            fullName: props.account ? props.account.fullName : '',
            company: props.account ? props.account.company : '',
            address: props.account ? props.account.address : '',
            phone: props.account ? props.account.phone : '',
            carryObject: props.account ? props.account.carryObject : '',
            vehichle: props.account ? props.account.vehichle : '',
            driver: props.account ? props.account.driver : '',
            cardNo: props.account ? props.account.cardNo : '',
            imageUrl: props.account ? props.account.imageUrl : '',
            contact: props.account ? props.account.contact : '',
            contactDept: props.account ? props.account.contactDept : '',
            purpose: props.account ? props.account.purpose : '',
            error: ''
        };
    }
    onFullNameChange = (e) => {
        const fullName = e.target.value;
        this.setState(() => ({ fullName }));
    };
    onContactChange = (e) => {
        const contact = e.target.value;
        this.setState(() => ({ contact }));
    };
    onContactDeptChange = (e) => {
        const contactDept = e.target.value;
        this.setState(() => ({ contactDept }));
    };
    onPurposeChange = (e) => {
        const purpose = e.target.value;
        this.setState(() => ({ purpose }));
    };
    onCompanyChange = (e) => {
        const company = e.target.value;
        this.setState(() => ({ company }));
    };
    onAddressChange = (e) => {
        const address = e.target.value;
        this.setState(() => ({ address }));
    };
    onPhoneChange = (e) => {
        const phone = e.target.value;
        this.setState(() => ({ phone }));
    };
    onCarryObjectChange = (e) => {
        const carryObject = e.target.value;
        this.setState(() => ({ carryObject }));
    };
    onVehichleChange = (e) => {
        const vehichle = e.target.value;
        this.setState(() => ({ vehichle }));
    };
    onDriverChange = (e) => {
        const driver = e.target.value;
        this.setState(() => ({ driver }));
    };
    onCardNoChange = (e) => {
        const cardNo = e.target.value;
        this.setState(() => ({ cardNo }));
    };
    onFocusChange = ({ focused }) => {
        this.setState(() => ({ calenderFocused: focused }));
    };
    setRef = (webcam) => {
        this.webcam = webcam;
    };
    webcamButton = (e) => {
        e.preventDefault();

        if (!!this.state.imageUrl) {
            this.setState(() => ({ imageUrl: '' }));
        } else {
            const imageUrl = this.webcam.getScreenshot();;
            this.setState(() => ({ imageUrl }));
        }
    };
    onSubmit = (e) => {
        e.preventDefault(); 

        if (!this.state.fullName ||
            !this.state.address || 
            !this.state.phone ||
            !this.state.cardNo ||
            !this.state.contact ||
            !this.state.contactDept ||
            !this.state.purpose
        ){
            this.setState(() => ({ error: 'Please provide all useful information!' }));
        }else{
            this.setState(() => ({ error: '' }));
            this.props.onSubmit({
                fullName: this.state.fullName,
                company: this.state.company,
                address: this.state.address,
                phone: this.state.phone,
                carryObject: this.state.carryObject,
                vehichle: this.state.vehichle,
                driver: this.state.driver,
                cardNo: this.state.cardNo,
                imageUrl: this.state.imageUrl,
                contact: this.state.contact,
                contactDept: this.state.contactDept,
                purpose: this.state.purpose,
                signIn: moment().valueOf(),
                createdAt: moment().valueOf()
            });
        }
    };
    render() {
        return (
            <div className="dana-img-container">
                <div className="dana-camera">
                    {!!this.state.imageUrl ? 
                        <img className="img-thumbnail v-pics" src={this.state.imageUrl} /> : 
                        <Webcam className="img-thumbnail v-pics"
                            audio={false}
                            ref={this.setRef}
                            screenshotFormat="image/jpeg"
                        />
                    }
                    <div>
                        <button 
                            type="button" 
                            className={
                                !!this.state.imageUrl ? 
                                "pt-button pt-minimal pt-large pt-intent-danger pt-icon-refresh pt-fill dana-btn" : 
                                "pt-button pt-minimal pt-large pt-intent-success pt-icon-camera pt-fill dana-btn"
                            } 
                            onClick={this.webcamButton}
                        >
                            { !!this.state.imageUrl ? 'Retake' : 'Capture' }
                        </button>
                    </div>
                </div>
                <form className="form" onSubmit={this.onSubmit}>
                    {this.state.error && <p className="form__error">{this.state.error}</p>}
                    <input
                        autoFocus
                        type="text"
                        className="text-input"
                        placeholder="Full Name"
                        value={this.state.fullName}
                        onChange={this.onFullNameChange}
                    />
                    <input
                        type="text"
                        placeholder="Organization"
                        className="text-input"
                        value={this.state.company}
                        onChange={this.onCompanyChange}
                    />
                    <input
                        type="text"
                        placeholder="Address"
                        className="text-input"
                        value={this.state.address}
                        onChange={this.onAddressChange}
                    />
                    <div className="form-row">
                        <input
                            type="number"
                            placeholder="Phone Number"
                            className="text-input"
                            value={this.state.phone}
                            onChange={this.onPhoneChange}
                        />
                        <input
                            type="text"
                            className="text-input"
                            placeholder="Carrying Object"
                            value={this.state.carryObject}
                            onChange={this.onCarryObjectChange}
                        />
                    </div>
                    <input
                        type="text"
                        className="text-input"
                        placeholder="Driver Name"
                        value={this.state.driver}
                        onChange={this.onDriverChange}
                    />
                    <div className="form-row">
                        <input
                            type="text"
                            className="text-input"
                            placeholder="Vehicle Details"
                            value={this.state.vehichle}
                            onChange={this.onVehichleChange}
                        />
                        <input
                            type="text"
                            className="text-input"
                            placeholder="Card Number"
                            value={this.state.cardNo}
                            onChange={this.onCardNoChange}
                        />
                    </div>
                    <li className="pt-menu-divider"></li>
                    <input
                        type="text"
                        placeholder="Contact Person"
                        className="text-input"
                        value={this.state.contact}
                        onChange={this.onContactChange}
                    />
                    <div className="form-row">
                        <div className="pt-select pt-fill pt-large">
                            <select
                                value={this.state.contactDept}
                                onChange={this.onContactDeptChange}
                            >
                                <option value="">Choose a Department...</option>
                                <option value="ICT">ICT</option>
                                <option value="Finance">Finance</option>
                                <option value="Human Resource">Human Resource</option>
                                <option value="Office Services">Office Services</option>
                            </select>
                        </div>
                        <div className="pt-select pt-fill pt-large">
                            <select
                                value={this.state.purpose}
                                onChange={this.onPurposeChange}
                            >
                                <option value="">Purpose of visit...</option>
                                <option value="Interview">Interview</option>
                                <option value="Vendor">Vendor</option>
                                <option value="Appointment">Appointment</option>
                            </select>
                        </div>
                    </div>
                    <div>
                        <button className="pt-button pt-minimal pt-large pt-intent-success pt-icon-new-person pt-fill">Add Visitor</button>
                    </div>
                </form>
            </div>
        )
    }
}