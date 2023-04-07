import React, { useState } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardHeader,
  MDBCardBody,
  MDBIcon,
  MDBBtn,
  MDBCardFooter,
  MDBInputGroup,
} from "mdb-react-ui-kit";

import "react-perfect-scrollbar/dist/css/styles.css";

import PerfectScrollbar from "react-perfect-scrollbar";

export default function ResumeAI() {
  const [message, setMessage] = useState("");
  const [messageList, setMessageList] = useState([]);
  const [file, setFile] = useState(null);
  const [urlImage, setUrlImage] = useState(null);
  const [jd, setjd] = useState("");
  const onJDChange = (e) => {
    setjd(e.target.value);
  };

  const onFileChange = (e) => {
    if (e.target.files) {
      // if(e.target.files[0].type === "application/pdf" || e.target.files[0].type === "image/png" )
      //   setFile(e.target.files[0])
      // else
      //   return
      setFile(e.target.files[0]);
    }
  };

  const onInputChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message !== "") {
      setMessageList([...messageList, message]);
      setMessage("");
    }
  };

  const toBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });

  const [viewPdf, setViewPdf] = useState(null);

  const handleUploadClick = async () => {
    if (!file) {
      return;
    }
    setUrlImage(URL.createObjectURL(file));
    const cvBase64 = await toBase64(file);
    const base64ImageData = cvBase64.substring(cvBase64.indexOf(",") + 1);
    console.log(
      JSON.stringify({
        jd,
        base64ImageData,
      })
    );

    // 👇 Uploading the file using the fetch API to the server
    fetch("http://103.160.76.63:5000/predict", {
      method: "POST",
      body: JSON.stringify({ jd: { jd }, cv: { base64ImageData } }),
      // 👇 Set headers manually for single file upload
      headers: {
        "content-type": file.type,
        "content-length": `${file.size}`, // 👈 Headers need to be a string
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <MDBContainer fluid className="py-5" style={{ backgroundColor: "#FFF" }}>
        <MDBRow className="d-flex justify-content-right">
          <MDBCol md="4" lg="4" xl="4" className="mb-4 mb-md-0">
            <input type="file" onChange={onFileChange} />
            <div>{file && `${file.name} - ${file.type}`}</div>
            <div style={{ margin: "10px" }}>
              <p>Job Description</p>
            </div>
            <textarea
              style={{ width: "350px", height: "450px" }}
              placeholder="Input JD..."
              onChange={onJDChange}
            />
            <br></br>
            <input
              type="button"
              value="Submit"
              className="btn btn-success btn-lg"
              onClick={handleUploadClick}
            />
          </MDBCol>
          <MDBCol md="4" lg="4" xl="4" className="mb-4 mb-md-0 pdf-container">
            <img src={urlImage} />
          </MDBCol>
          <MDBCol md="8" lg="6" xl="4">
            <MDBCard>
              <MDBCardHeader
                className="d-flex justify-content-between align-items-center p-3"
                style={{ borderTop: "4px solid #ffa900" }}
              >
                <h5 className="mb-0">Chat messages</h5>
                <div className="d-flex flex-row align-items-center">
                  <span className="badge bg-warning me-3">20</span>
                  <MDBIcon
                    fas
                    icon="minus"
                    size="xs"
                    className="me-3 text-muted"
                  />
                  <MDBIcon
                    fas
                    icon="comments"
                    size="xs"
                    className="me-3 text-muted"
                  />
                  <MDBIcon
                    fas
                    icon="times"
                    size="xs"
                    className="me-3 text-muted"
                  />
                </div>
              </MDBCardHeader>
              <PerfectScrollbar
                style={{ position: "relative", height: "400px" }}
              >
                <MDBCardBody>
                  {messageList.map(function(i) {
                    return (
                      <div className="d-flex flex-row justify-content-end">
                        <div>
                          <p className="small p-2 me-3 mb-1 text-white rounded-3 bg-primary">
                            {i}
                          </p>
                        </div>
                        <img
                          src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                          alt="avatar 1"
                          style={{ width: "45px", height: "100%" }}
                        />
                      </div>
                    );
                  })}
                </MDBCardBody>
              </PerfectScrollbar>
              <MDBCardFooter className="text-muted d-flex justify-content-start align-items-center p-3">
                <MDBInputGroup className="mb-0">
                  <input
                    className="form-control"
                    placeholder="Type message"
                    type="text"
                    value={message}
                    onChange={onInputChange}
                  />
                  <MDBBtn
                    color="warning"
                    style={{ paddingTop: ".55rem" }}
                    onClick={handleSubmit}
                  >
                    Send
                  </MDBBtn>
                </MDBInputGroup>
              </MDBCardFooter>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      
    </div>
  );
}
