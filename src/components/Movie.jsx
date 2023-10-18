import React from 'react'

function Movie() {
    return (
      <div className="image-poster">
        <img src="/images/poster/Rectangle 119-1.jpg" alt="poster" />
        <h5 className="text-center mt-3">Black Widow</h5>
        <span className="text-muted text-center" style={{ fontSize: "14px" }}>
          Action, Adventure, Sci-Fi
        </span>
        <div className="d-grid mt-2">
          <button className="btn btn-outline-primary">Details</button>
        </div>
      </div>
    );
}

export default Movie
