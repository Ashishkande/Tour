import React, { useRef } from 'react';
import './search-bar.css';
import { Col, FormGroup } from 'reactstrap';
import { BASE_URL } from '../utils/config';

const SearchBar = ({ setTours }) => {
   const locationRef = useRef('');
   const checkInRef = useRef('');
   const checkOutRef = useRef('');
   const guestsRoomsRef = useRef('');

   const searchHandler = async (e) => {
      e.preventDefault();
      const location = locationRef.current.value;
      const checkIn = checkInRef.current.value;
      const checkOut = checkOutRef.current.value;
      const guestsRooms = guestsRoomsRef.current.value;

      if (!location || !checkIn || !checkOut || !guestsRooms) {
         return alert('All fields are required!');
      }

      // Update the API call to include all fields if needed
      const res = await fetch(
         `${BASE_URL}/tours/search/getTourBySearch?city=${location}&checkIn=${checkIn}&checkOut=${checkOut}&guestsRooms=${guestsRooms}`
      );

      if (!res.ok) alert('Something went wrong');

      const result = await res.json();
      if (!result?.data) {
         return;
      }
      setTours(result?.data);
   };

   return (
      <Col lg="12">
         <div className="search__bar">
            <form onSubmit={searchHandler} className="d-flex align-items-center gap-4">
               {/* Location Field */}
               <FormGroup className="d-flex gap-3 form__group form__group-fast">
                  <span><i className="ri-map-pin-line"></i></span>
                  <div>
                     <h6>Location</h6>
                     <input
                        type="text"
                        placeholder="Where are you going?"
                        ref={locationRef}
                     />
                  </div>
               </FormGroup>

               {/* Check In Field */}
               <FormGroup className="d-flex gap-3 form__group form__group-fast">
                  <span><i className="ri-calendar-line"></i></span>
                  <div>
                     <h6>Check In</h6>
                     <input
                        type="date"
                        ref={checkInRef}
                        defaultValue="2025-04-29" // Match the date in the image
                     />
                  </div>
               </FormGroup>

               {/* Check Out Field */}
               <FormGroup className="d-flex gap-3 form__group form__group-fast">
                  <span><i className="ri-calendar-line"></i></span>
                  <div>
                     <h6>Check Out</h6>
                     <input
                        type="date"
                        ref={checkOutRef}
                        defaultValue="2025-04-30" // Match the date in the image
                     />
                  </div>
               </FormGroup>

               {/* Guests and Rooms Field */}
               <FormGroup className="d-flex gap-3 form__group form__group-fast">
                  <span><i className="ri-group-line"></i></span>
                  <div>
                     <h6>Guests and Rooms</h6>
                     <input
                        type="text"
                        placeholder="1 Guest, 1 Room"
                        ref={guestsRoomsRef}
                        defaultValue="1 Guest, 1 Room" // Match the text in the image
                     />
                  </div>
               </FormGroup>

               {/* Search Button */}
               <button type="submit" className="search__button">
                  SEARCH
               </button>
            </form>
         </div>
      </Col>
   );
};

export default SearchBar;
