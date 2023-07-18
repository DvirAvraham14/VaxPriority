import React, { useEffect, useState } from 'react';

const ViewAllRows = () => {
    const [rows, setRows] = useState([]);
    const [dateQuery, setDateQuery] = useState('');
    const [cityQuery, setCityQuery] = useState('');
    const [filteredRows, setFilteredRows] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/api/registrations', {
            method: 'GET',
        })
            .then((response) => response.json())
            .then((data) => {
                setRows(data);
                setFilteredRows(data);
            });
    }, []);

    const handleDateSearch = (event) => {
        const query = event.target.value.toLowerCase();
        setDateQuery(query);

        const filtered = rows.filter((row) =>
            row.dateOfBirth.toLowerCase().includes(query)
        );

        setFilteredRows(filtered);
    };

    const handleCitySearch = (event) => {
        const query = event.target.value.toLowerCase();
        setCityQuery(query);

        const filtered = rows.filter((row) =>
            row.city.toLowerCase().includes(query)
        );

        setFilteredRows(filtered);
    };

    return (
        <div>
            <h2>View All Rows</h2>

            <div className="row mb-3">
                <div className="col-md-4">
                    <label htmlFor="dateInput" className="form-label">
                        Search by Date of Birth
                    </label>
                    <input
                        type="date"
                        className="form-control"
                        id="dateInput"
                        value={dateQuery}
                        onChange={handleDateSearch}
                    />
                </div>

                <div className="col-md-4">
                    <label htmlFor="cityInput" className="form-label">
                        Search by City
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="cityInput"
                        value={cityQuery}
                        onChange={handleCitySearch}
                        placeholder="Enter city"
                    />
                </div>
                <div className="col-md-4">
                    <label htmlFor="cityInput" className="form-label">

                    </label>
                    <button type={"button"} className={"btn btn-primary"} onClick={() => {
                        setFilteredRows(rows);
                        setCityQuery('');
                        setDateQuery('');
                    }
                    }>Reset Filters</button>
                </div>

            </div>

            <div className="table-responsive">
                <table className="table table-striped">
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Date of Birth</th>
                        <th>Address</th>
                        <th>City</th>
                        <th>Zip Code</th>
                        <th>Landline</th>
                        <th>Cellphone</th>
                        <th>Infected Before</th>
                        <th>Previous Conditions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {filteredRows.length === 0 ? (
                        <tr>
                            <td colSpan="11" className="text-center">
                                <b>No rows found :(</b>
                            </td>
                        </tr>
                    ) : (
                        filteredRows.map((row) => (
                            <tr key={row.id}>
                                <td>{row.id}</td>
                                <td>{row.firstName}</td>
                                <td>{row.lastName}</td>
                                <td>{row.dateOfBirth}</td>
                                <td>{row.address}</td>
                                <td>{row.city}</td>
                                <td>{row.zipCode}</td>
                                <td>{row.landLine}</td>
                                <td>{row.cellularPhone}</td>
                                <td>{row.infectedBefore ? 'Yes' : 'No'}</td>
                                <td>{row.previousConditions.join(', ')}</td>
                            </tr>
                        ))
                    )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ViewAllRows;
