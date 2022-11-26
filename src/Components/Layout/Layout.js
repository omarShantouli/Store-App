import React, { useEffect, useRef, useState } from "react";
import {Outlet} from "react-router-dom";
import {GlobalContext} from "../../Utils/context";
import NavBar from "../NavBar/NavBar";
import CustomModal from "../CustomModal/CustomModal";
import { Modal } from "bootstrap";


export default function Layout(){

    const [modalData, setModalData] = useState({
        body : "",
        title : "",
        footer : ""
      })



      const modal = useRef("");
     function showModal (options) {
          setModalData({
            body : "",
            title : "",
            footer : ""
          })

            const customModal = new Modal("#customModal");
            customModal.show();
          
        };
      
        useEffect(()=>{
            modal.current = new Modal("#customModal")
        }, [])

    return(
        <GlobalContext.Provider value={{ showModal}}>
        <div className="App">
          <CustomModal 
            title={modalData?.title}
            body={modalData?.body}
            footer={modalData?.footer}
          />
          <NavBar />
          <Outlet />
        </div>
      </GlobalContext.Provider>
    )
}
