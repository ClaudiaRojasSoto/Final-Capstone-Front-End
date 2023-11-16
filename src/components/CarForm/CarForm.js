import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createCar } from '../../redux/slices/carSlice';
import './carform.css';

const CarForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [carData, setCarData] = useState({
    name: '',
    description: '',
    deposit: 0,
    finance_fee: 0,
    option_to_purchase_fee: 0,
    total_amount_payable: 0,
    duration: 0,
    removed: false,
    image: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCarData({ ...carData, [name]: value });
  };

  const handleImageChange = (e) => {
    const imageFile = e.target.files[0];
    setCarData({ ...carData, image: imageFile });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(createCar(carData));
    navigate('/home');
  };

  return (
    <>
      <button className="border-1 btn m-2 rounded-circle btn-warning" onClick={() => navigate('/home')} type="button">
        Back
      </button>
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-10">
            <form onSubmit={handleSubmit} className="create-form p-2 text-white text-mobile-black">
              <h3 className=" text-center ">Create Car</h3>
              <div>
                <div>
                  <label htmlFor="name" className=" input-text w-100">
                    Name:
                    <input className="input-field px-1" type="text" id="name" name="name" value={carData.name} onChange={handleInputChange} required />
                  </label>
                </div>

                <div>
                  <label htmlFor="description" className=" input-text w-100">
                    Description:
                    <input className="input-field px-1" type="text" id="description" name="description" value={carData.description} onChange={handleInputChange} required />
                  </label>
                </div>

                <div>
                  <label htmlFor="deposit" className=" input-text w-100">
                    Deposit:
                    <input className="input-field px-1" type="number" id="deposit" name="deposit" value={carData.deposit} onChange={handleInputChange} required />
                  </label>
                </div>

                <div>
                  <label htmlFor="finance_fee" className=" input-text w-100">
                    Finance Fee:
                    <input className="input-field px-1" type="number" id="finance_fee" name="finance_fee" value={carData.finance_fee} onChange={handleInputChange} required />
                  </label>
                </div>

                <div>
                  <label htmlFor="option_to_purchase_fee" className=" input-text w-100">
                    Option to Purchase Fee:
                    <input className="input-field px-1" type="number" id="option_to_purchase_fee" name="option_to_purchase_fee" value={carData.option_to_purchase_fee} onChange={handleInputChange} required />
                  </label>
                </div>

                <div>
                  <label htmlFor="total_amount_payable" className=" input-text w-100">
                    Total Amount Payable:
                    <input className="input-field px-1" type="number" id="total_amount_payable" name="total_amount_payable" value={carData.total_amount_payable} onChange={handleInputChange} required />
                  </label>
                </div>

                <div>
                  <label htmlFor="duration" className=" input-text w-100">
                    Duration:
                    <input className="input-field px-1" type="number" id="duration" name="duration" value={carData.duration} onChange={handleInputChange} required />
                  </label>
                </div>

                <div>
                  <label htmlFor="image" className=" input-text w-100">
                    Image:
                    <input className="input-field" type="file" id="image" name="image" onChange={handleImageChange} accept="image/*" />
                  </label>
                </div>

              </div>
              <div className="mt-2 text-center">
                <button type="submit" className="btn btn-primary ">Create Car</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default CarForm;
