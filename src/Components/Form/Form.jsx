import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";
import "./Form.css";

export default function Form() {
  const navigate = useNavigate();
  const form = useRef();
  const [results, setResults] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_9p6vpym",
        "template_e97gsqw",
        form.current,
        "3mMpa1jcYlBBAtSWe"
      )
      .then(
        () => {
          setResults("success");
        },
        (error) => {
          setResults("error");
        }
      );
  };

  useEffect(() => {
    if (results === "success") {
      navigate("/merci");
    }
  }, [results, navigate]);

  return (
    <div className="form-box">
      <div className="container">
        <form
          className="flex-between-center g-20"
          ref={form}
          onSubmit={sendEmail}>
          <div className="text flex-center g-20">
            <h3>Commencer&nbsp;!</h3>
          </div>
          <input
            className="form-field"
            type="text"
            name="name"
            placeholder="Nom Complet*"
            required
          />
          <input
            className="form-field"
            type="text"
            name="phone"
            placeholder="N°Téléphone*"
            required
          />
          <input
            className="form-field"
            type="text"
            name="ref"
            placeholder="Référence STEG*"
            required
          />
          <input
            className="form-field"
            type="text"
            name="lieux"
            placeholder="Lieux des traveaux*"
            required
          />
          <select className="form-select" name="type">
            <option disabled value="" selected>
              Service
            </option>
            <option value="">Installation Solaire</option>
            <option value="">Pompage Solaire</option>
            <option value="">Maintenance Et Suivi</option>
          </select>
          <button
            type="submit"
            className="primary-btn flex-center-center g-10 form-btn">
            Envoyer
            <i className="fa-solid fa-caret-right " />
          </button>
        </form>
      </div>
    </div>
  );
}
