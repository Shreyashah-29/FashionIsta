import React, { useState } from 'react';
import axios from 'axios';

const ReviewForm = ({ productId }) => {
  const [review, setReview] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://192.168.2.61:8080/api/review/addReview', {
        productId,
        review
      });
      console.log(productId);
      console.log('Review added:', response.data);
      setReview(''); // Clear the review textarea after successful submission
      setError(null);
    } catch (error) {
      console.error('Error adding review:', error);
      setError('Failed to add review');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <textarea
          value={review}
          onChange={(e) => setReview(e.target.value)}
          placeholder="Write your review..."
          required
        />
        <button type="submit">Submit Review</button>
      </form>
      {error && <div>Error: {error}</div>}
    </div>
  );
};

export default ReviewForm;

// import React, { useState } from 'react';
// import axios from 'axios';
// import io from 'socket.io-client';


// const ReviewForm = ({ productId }) => {
//   const [review, setReview] = useState('');
//   const [error, setError] = useState(null);

//   // Connect to Socket.IO server
//   const socket = io('http://localhost:8080');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:8080/api/review/addReview', {
//         productId,
//         review
//       });
//       console.log('Review added:', response.data);
//       setReview(''); // Clear the review textarea after successful submission
//       setError(null);

//       // Emit event to Socket.IO server
//       socket.emit('newReview', response.data); // Adjust 'newReview' event name as per your server-side implementation
//     } catch (error) {
//       console.error('Error adding review:', error);
//       setError('Failed to add review');
//     }
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <textarea
//           value={review}
//           onChange={(e) => setReview(e.target.value)}
//           placeholder="Write your review..."
//           required
//         />
//         <button type="submit">Submit Review</button>
//       </form>
//       {error && <div>Error: {error}</div>}
//     </div>
//   );
// };

// export default ReviewForm;
