import React from "react";

export default function HomePage() {
  return (
    <div>
      <div
        className="p-5 text-center bg-image"
        style={{
          backgroundImage:
            "url('https://cdn.pixabay.com/photo/2018/10/05/17/34/cv-3726428_960_720.jpg')",
          height: "500px",
        }}
      >
        <div className="mask" style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}>
          <div className="d-flex justify-content-center align-items-center h-100">
            <div className="text-white">
              <h1 className="mb-3">Tên đội thi</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
