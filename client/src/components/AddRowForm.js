import React, { useState } from 'react';

const AddRowForm = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        dateOfBirth: '',
        address: '',
        city: '',
        zipCode: '',
        landLine: '',
        cellularPhone: '',
        infectedBefore: false,
        previousConditions: [],
        otherConditions: '',
    });
    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState('');



    const handleSubmit = async (e) => {
        e.preventDefault();
        setSuccessMessage('');
        setErrors({});

        try {
            const response = await fetch('http://localhost:8080/api/registrations', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                const errorData = await response.json();
                setErrors(errorData);
            }else {
                setSuccessMessage('Record added successfully!');
                setTimeout(() => {
                     window.location.href = '/';
                }, 1000);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        if (name === 'previousConditions') {
            const isChecked = checked;
            const condition = value;

            setFormData((prevData) => {
                if (isChecked) {
                    return {
                        ...prevData,
                        previousConditions: [...prevData.previousConditions, condition],
                    };
                } else {
                    return {
                        ...prevData,
                        previousConditions: prevData.previousConditions.filter((item) => item !== condition),
                    };
                }
            });
        } else {
            const newValue = type === 'checkbox' ? checked : value;

            setFormData((prevData) => ({
                ...prevData,
                [name]: newValue,
            }));
        }
    };


    return (
        <div className="container-fluid">
            <h2>Add New Row</h2>
            {successMessage && (
                <div className="alert alert-success position-fixed w-100 text-center" role="alert">
                    {successMessage}
                </div>
            )}
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <legend>Personal Information</legend>
                    <div className="row">
                        <div className="col-md-6 mb-3">
                            <label htmlFor="firstName" className="form-label" htmlFor="firstName">
                                First Name
                            </label>
                            <input
                                type="text"
                                className={`form-control ${errors.firstName ? 'is-invalid' : ''}`}
                                id="firstName"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                            />
                            {errors.firstName && <div className="invalid-feedback">{errors.firstName}</div>}
                        </div>
                        <div className="col-md-6 mb-3">
                            <label htmlFor="lastName" className="form-label" htmlFor="lastName">
                                Last Name
                            </label>
                            <input
                                type="text"
                                className={`form-control ${errors.lastName ? 'is-invalid' : ''}`}
                                id="lastName"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                            />
                            {errors.lastName && <div className="invalid-feedback">{errors.lastName}</div>}
                        </div>
                        <div className="col-md-6 mb-3">
                            <label htmlFor="dateOfBirth" className="form-label" htmlFor="dateOfBirth">
                                Date of Birth
                            </label>
                            <input
                                type="date"
                                className={`form-control ${errors.dateOfBirth ? 'is-invalid' : ''}`}
                                id="dateOfBirth"
                                name="dateOfBirth"
                                value={formData.dateOfBirth}
                                onChange={handleChange}
                            />
                            {errors.dateOfBirth && <div className="invalid-feedback">{errors.dateOfBirth}</div>}
                        </div>
                    </div>
                </fieldset>

                <fieldset>
                    <legend>Contact Information</legend>
                    <div className="row">
                        <div className="col-md-6 mb-3">
                            <label htmlFor="address" className="form-label" htmlFor="address">
                                Address
                            </label>
                            <input
                                type="text"
                                className={`form-control ${errors.address ? 'is-invalid' : ''}`}
                                id="address"
                                name="address"
                                value={formData.address}
                                onChange={handleChange}
                            />
                            {errors.address && <div className="invalid-feedback">{errors.address}</div>}
                        </div>
                        <div className="col-md-6 mb-3">
                            <label htmlFor="city" className="form-label" htmlFor="city">
                                City
                            </label>
                            <input
                                type="text"
                                className={`form-control ${errors.city ? 'is-invalid' : ''}`}
                                id="city"
                                name="city"
                                value={formData.city}
                                onChange={handleChange}
                            />
                            {errors.city && <div className="invalid-feedback">{errors.city}</div>}
                        </div>
                        <div className="col-md-6 mb-3">
                            <label htmlFor="zipCode" className="form-label" htmlFor="zipCode">
                                Zip Code
                            </label>
                            <input
                                type="text"
                                className={`form-control ${errors.zipCode ? 'is-invalid' : ''}`}
                                id="zipCode"
                                name="zipCode"
                                value={formData.zipCode}
                                onChange={handleChange}
                            />
                            {errors.zipCode && <div className="invalid-feedback">{errors.zipCode}</div>}
                        </div>
                        <div className="col-md-6 mb-3">
                            <label htmlFor="landLine" className="form-label" htmlFor="landLine">
                                Landline
                            </label>
                            <input
                                type="text"
                                className={`form-control ${errors.landLine ? 'is-invalid' : ''}`}
                                id="landLine"
                                name="landLine"
                                value={formData.landLine}
                                onChange={handleChange}
                            />
                            {errors.landLine && <div className="invalid-feedback">{errors.landLine}</div>}
                        </div>
                        <div className="col-md-6 mb-3">
                            <label htmlFor="cellularPhone" className="form-label" htmlFor="cellularPhone">
                                Cellphone
                            </label>
                            <input
                                type="text"
                                className={`form-control ${errors.cellularPhone ? 'is-invalid' : ''}`}
                                id="cellularPhone"
                                name="cellularPhone"
                                value={formData.cellularPhone}
                                onChange={handleChange}
                            />
                            {errors.cellularPhone && <div className="invalid-feedback">{errors.cellularPhone}</div>}
                        </div>
                    </div>
                </fieldset>

                <fieldset>
                    <legend>Medical Information</legend>
                    <div className="row">
                        <div className="col-md-12 mb-3">
                            <div className="form-check">
                                <input
                                    type="checkbox"
                                    className="form-check-input"
                                    id="infectedBefore"
                                    name="infectedBefore"
                                    checked={formData.infectedBefore}
                                    onChange={handleChange}
                                />
                                <label htmlFor="infectedBefore" className="form-check-label">
                                    Infected by COVID-19 before
                                </label>
                            </div>
                        </div>
                        <div className="col-md-12 mb-3">
                            <label htmlFor="previousConditions" className="form-label" htmlFor="previousConditions">
                                Previous Conditions
                            </label>
                            <div className="form-check">
                                <input
                                    type="checkbox"
                                    className="form-check-input"
                                    id="diabetes"
                                    name="previousConditions"
                                    value="Diabetes"
                                    checked={formData.previousConditions.includes('Diabetes')}
                                    onChange={handleChange}
                                />
                                <label htmlFor="diabetes" className="form-check-label">
                                    Diabetes
                                </label>
                            </div>
                            <div className="form-check">
                                <input
                                    type="checkbox"
                                    className="form-check-input"
                                    id="cardiovascular"
                                    name="previousConditions"
                                    value="Cardiovascular"
                                    checked={formData.previousConditions.includes('Cardiovascular')}
                                    onChange={handleChange}
                                />
                                <label htmlFor="cardiovascular" className="form-check-label">
                                    Cardiovascular Problems
                                </label>
                            </div>
                            <div className="form-check">
                                <input
                                    type="checkbox"
                                    className="form-check-input"
                                    id="allergies"
                                    name="previousConditions"
                                    value="Allergies"
                                    checked={formData.previousConditions.includes('Allergies')}
                                    onChange={handleChange}
                                />
                                <label htmlFor="allergies" className="form-check-label">
                                    Allergies
                                </label>
                            </div>
                            <div className="form-check">
                                <input
                                    type="checkbox"
                                    className="form-check-input"
                                    id="other"
                                    name="previousConditions"
                                    value="Other"
                                    checked={formData.previousConditions.includes('Other')}
                                    onChange={handleChange}
                                />
                                <label htmlFor="other" className="form-check-label">
                                    Other
                                </label>
                                {formData.previousConditions.includes('Other') && (
                                    <input
                                        type="text"
                                        className="form-control mt-2"
                                        name="otherConditions"
                                        value={formData.otherConditions}
                                        onChange={handleChange}
                                    />
                                )}
                            </div>
                            {errors.previousConditions && <div className="invalid-feedback">{errors.previousConditions}</div>}
                        </div>
                    </div>
                </fieldset>

                <div className="text-center">
                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddRowForm;
