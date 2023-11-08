import React from "react";
import Image from "next/image";
import Header from "@/component/Header";
import Footer from "@/component/Footer";
import { Widget } from '@typeform/embed-react'

export default function Contact() {
  return (
    <div>
      <Header />
      <div className="mt-20 div">
        <p className="text-center contact_text"> Get In Touch</p>
        <div className="flex justify-between anime_contact">
          <div>
            <p className="contact_Sub">
              Let us help you. <br />
              save Time , Build Trust & close more Deals{" "}
            </p>
          </div>
          <Image src="/pt.png" width="450" height="450" />
        </div>
        <div className="bg-black form_fel flex justify-between">
         

        <Widget id="j14YAmqh"  className="widget" />


          
        </div>
      </div>
      <Footer />
    </div>
  );
}
