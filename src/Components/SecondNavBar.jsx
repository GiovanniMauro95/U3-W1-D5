import React from 'react';
import { DropdownButton, Dropdown } from 'react-bootstrap';

const TVShowsComponent = () => {
  return (
    <div className="container-fluid px-4 bg-dark">
      <div className="d-flex justify-content-between">
        <div className="d-flex">
          <h2 className="mb-4 text-white">TV Shows</h2>
          <div className="btn-group" role="group">
            <div className="dropdown ms-4 mt-1">
              <DropdownButton
                variant="secondary"
                size="sm"
                id="dropdown-genres"
                title="Genres"
                className="rounded-0"
                style={{ backgroundColor: '#221f1f' }}
              >
                <Dropdown.Item href="#">Comedy</Dropdown.Item>
                <Dropdown.Item href="#">Drama</Dropdown.Item>
                <Dropdown.Item href="#">Thriller</Dropdown.Item>
              </DropdownButton>
            </div>
          </div>
        </div>
        <div>
          <i className="bi bi-grid icons" style={{ fontSize: '1.3rem', color: "white", marginLeft: "10px", marginRight: "10px" }}></i>
          <i className="bi bi-grid-3x3 icons ms-2" style={{ fontSize: '1.3rem', color: "white", marginLeft: "10px", marginRight: "10px" }}></i>
        </div>
      </div>
    </div>
  );
};

export default TVShowsComponent;

