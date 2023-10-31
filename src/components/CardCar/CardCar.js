import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardFooter,
  MDBRow,
  MDBCol,
} from 'mdb-react-ui-kit';

const CarCard = ({ cars }) => (
  <MDBRow className="row-cols-1 row-cols-md-3 g-4">
    {cars.map((car) => (
      <MDBCol key={car.id}>
        <MDBCard className="h-100">
          <MDBCardImage
            src={car.image_url}
            alt={car.name}
            position="top"
          />
          <MDBCardBody>
            <MDBCardText>{car.description}</MDBCardText>
          </MDBCardBody>
          <MDBCardFooter>
            <MDBCardTitle>{car.name}</MDBCardTitle>
          </MDBCardFooter>
        </MDBCard>
      </MDBCol>
    ))}
  </MDBRow>
);

CarCard.propTypes = {
  cars: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      image_url: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default CarCard;
