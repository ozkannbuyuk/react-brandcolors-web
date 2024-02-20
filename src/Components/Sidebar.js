import React, { useContext, useState } from "react";
import MainContext from "./MainContext";
import Download from "./Download";

import Modal from "react-modal";
import { GrClose } from "react-icons/gr";

export default function Sidebar(props) {
  const [modalsOpen, setModalIsOpen] = useState(false);
  const { selectedBrands } = useContext(MainContext);

  const toggleModal = () => {
    setModalIsOpen(!modalsOpen);
  };

  return (
    <React.Fragment>
      <aside className="sidebar">
        <div className="logo">
          <a>
            <img src="https://brandcolors.net/assets/img/logo.png" alt="" />
            Brand<b>Colors</b>
          </a>
        </div>
        <div className="description">
          The biggest collection of official brand color codes around. Curated
          by @brandcolors and friends.
        </div>

        <nav className="menu">
          <ul>
            <li>
              <a>Suggest a Brand</a>
            </li>
            <li>
              <a onClick={toggleModal}>About BrandColors</a>
            </li>
          </ul>
        </nav>
        {selectedBrands && <Download />}
      </aside>

      <Modal
        isOpen={modalsOpen}
        onRequestClose={toggleModal}
        contentLabel="Example Modal"
        className="about-modal"
        overlayClassName="about-modal-overlay"
      >
        <button onClick={toggleModal} className="modal-close-btn">
          <GrClose />
        </button>
        <h3>About Brand Colors</h3>
        <p>
          BrandColors was created by <b>DesignBombs</b>. The goal was to create
          a helpful reference for the brand color codes that are needed most
          often.
        </p>
        <p>
          It's been featured by Smashing Magazine, CSS-Tricks, Web Design Depot,
          Tuts+, and over <b>2 million pageviews</b>. There are now over{" "}
          <b>600 brands</b> with <b>1600 colors</b> and the collection is always
          growing.
        </p>
      </Modal>
    </React.Fragment>
  );
}
