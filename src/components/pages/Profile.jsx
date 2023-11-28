import React from "react";
import "./Profile.css";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import ProfileMask from "../../assets/img/ProfileMask.png";
function Profile({ flagLogin, setFlagLogin }) {
  const BACK_URL = import.meta.env.VITE_BACK_URL;
  const STORAGE_URL = import.meta.env.VITE_STORAGE_URL;

  const user = useSelector((state) => state.login.user);

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [password, setPassword] = useState("");
  const [avatar, setAvatar] = useState(null);
  const [oldAvatar, setOldAvatar] = useState(null);
  const [fileName, setFileName] = useState("");
  const [zip, setZip] = useState("");

  const navigate = useNavigate();
  const params = useParams();
  const notify = () => toast.success("Updating...");

  useEffect(() => {
    const getUser = async () => {
      const res = await axios({
        method: "GET",
        url: `${BACK_URL + "customers/" + user.id}`,
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      setOldAvatar(res.data.avatar ? res.data.avatar : "");
      setFirstname(res.data.firstname !== "null" ? res.data.firstname : "");
      setLastname(res.data.lastname !== "null" ? res.data.lastname : "");
      setEmail(res.data.email !== "null" ? res.data.email : "");
      setPhone(res.data.phones !== "null" ? res.data.phone : "");
      setAddress(res.data.address !== "null" ? res.data.address : "");
      setCity(res.data.city !== "null" ? res.data.city : "");
      setZip(res.data.zipcode !== "null" ? res.data.zipcode : "");
      setCountry(res.data.country !== "null" ? res.data.country : "");
    };
    getUser();
  }, [flagLogin]);

  const handleSubmitForm = async (e) => {
    const formData = new FormData();
    formData.append("firstname", firstname);
    formData.append("lastname", lastname);
    formData.append("email", email);
    formData.append("avatar", avatar);
    formData.append("zip", zip);
    formData.append("city", city);
    formData.append("country", country);
    formData.append("address", address);
    formData.append("phone", phone);

    try {
      e.preventDefault();
      const res = await axios({
        method: "PATCH",
        url: `${BACK_URL + "customers/" + user.id}`,
        data: formData,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setFlagLogin(!flagLogin);
      setFileName("");
      navigate(`/profile/${params.id}`);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="container d-flex justify-content-center overflow-auto">
        <form
          onSubmit={handleSubmitForm}
          className="form-Class  w-75 h-100 p-4"
        >
          <div className="row ">
            <div className="col-12 col-md-6">
              <h3 className="mb-4">My Profile</h3>
              <label htmlFor="firstname" className="text-Form fw-semibold">
                First name
              </label>
              <input
                type="text"
                name="firstname"
                className="form-control-plaintext border-bottom mb-3 text-Form"
                onChange={(event) => setFirstname(event.target.value)}
                value={firstname}
              />
              <label htmlFor="lastname" className="text-Form fw-semibold">
                Last name
              </label>
              <input
                type="text"
                name="lastname"
                className="form-control-plaintext border-bottom mb-3 text-Form"
                onChange={(event) => setLastname(event.target.value)}
                value={lastname}
              />
              <label htmlFor="email" className="text-Form fw-semibold">
                Email address
              </label>
              <input
                type="text"
                name="email"
                className="form-control-plaintext border-bottom mb-2 text-Form"
                onChange={(event) => setEmail(event.target.value)}
                value={email}
              />
              <label htmlFor="phone" className="text-Form fw-semibold">
                Phone
              </label>
              <input
                type="text"
                name="phone"
                id="phone"
                className="form-control-plaintext border-bottom mb-3 text-Form"
                onChange={(event) => setPhone(event.target.value)}
                value={phone}
              />
              <label htmlFor="country" className="text-Form fw-semibold">
                Country
              </label>
              <input
                type="text"
                name="country"
                className="form-control-plaintext border-bottom mb-3 text-Form"
                onChange={(event) => setCountry(event.target.value)}
                value={country}
              />
              <label htmlFor="city" className="text-Form fw-semibold">
                City
              </label>
              <input
                type="text"
                name="city"
                className="form-control-plaintext border-bottom mb-3 text-Form"
                onChange={(event) => setCity(event.target.value)}
                value={city}
              />
              <label htmlFor="address" className="text-Form fw-semibold">
                Address
              </label>
              <input
                type="text"
                name="address"
                className="form-control-plaintext border-bottom mb-3 text-Form"
                onChange={(event) => setAddress(event.target.value)}
                value={address}
              />
              <label htmlFor="zipcode" className="text-Form fw-semibold">
                ZIP code
              </label>
              <input
                type="text"
                name="zipcode"
                className="form-control-plaintext border-bottom mb-3 text-Form"
                onChange={(event) => setZip(event.target.value)}
                value={zip}
              />

              <Toaster />
            </div>
            <div className="col-12 col-md-6 ">
              <div className="d-flex flex-column h-100">
                <div className="d-flex justify-content-center alig-items-center flex-column position-relative">
                  <img
                    src={STORAGE_URL + oldAvatar}
                    alt=""
                    className="img-fluid ms-auto me-auto position-absolute d-none d-md-block"
                    style={{
                      width: "200px",
                      height: "200px",
                      objectFit: "cover",
                      borderRadius: "500px",
                      bottom: "-250px",
                      left: "125px",
                    }}
                  />
                  {fileName && (
                    <p
                      className="p-Size fw-bold m-0  position-absolute text-center mt-2 p-1 bg-white"
                      style={{
                        width: "80%",
                        bottom: "-340px",
                        left: "130px",
                      }}
                    >
                      File to upload:
                      <span className="text-success">{fileName}</span>
                    </p>
                  )}
                  <img
                    src={STORAGE_URL + oldAvatar}
                    alt=""
                    className="img-fluid d-md-none"
                    style={{
                      width: "200px",
                      height: "200px",
                      objectFit: "cover",
                      borderRadius: "500px",
                      bottom: "-250px",
                      left: "125px",
                    }}
                  />
                  <img
                    src={ProfileMask}
                    className="position-absolute d-none d-md-block"
                    alt=""
                    style={{
                      width: "250px",
                      bottom: "-275px",
                      left: "100px",
                      objectFit: "cover",
                    }}
                  />

                  {/* DESKTOP */}
                  <div
                    className=" d-none d-md-flex justify-content-center position-absolute"
                    style={{
                      width: "250px",
                      bottom: "-15px",
                      left: "100px",
                    }}
                  >
                    <div>
                      <label
                        htmlFor="avatar"
                        className="custom-file-upload mt-3 btn color-Secondary rounded-0 border fw-bold p-Size"
                      >
                        Change Avatar
                      </label>
                      <input
                        style={{ display: "none" }}
                        name="avatar"
                        type="file"
                        className="form-control rounded-0 p-Size"
                        id="avatar"
                        onChange={(event) => {
                          setAvatar(event.target.files[0]);
                          setFileName(
                            event.target.files[0]
                              ? event.target.files[0].name
                              : ""
                          );
                        }}
                      />
                    </div>
                  </div>
                  {/* MOBILE */}
                  <div
                    className=" d-block d-md-none justify-content-center "
                    style={{
                      width: "250px",
                      bottom: "-15px",
                      left: "100px",
                    }}
                  >
                    <div>
                      <label
                        htmlFor="avatar"
                        className="custom-file-upload mt-3 btn color-Secondary rounded-0 border fw-bold p-Size"
                      >
                        Change Avatar
                      </label>
                      <input
                        style={{ display: "none" }}
                        name="avatar"
                        type="file"
                        className="form-control rounded-0 p-Size"
                        id="avatar"
                        onChange={(event) => {
                          setAvatar(event.target.files[0]);
                          setFileName(
                            event.target.files[0]
                              ? event.target.files[0].name
                              : ""
                          );
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div className="d-flex justify-content-end mt-md-auto">
                  <button
                    onClick={notify}
                    type="submit"
                    className="btn btn-dark mb-3 px-5 rounded-0 btn-Sign-Up mt-2"
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default Profile;
