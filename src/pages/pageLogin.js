import "primereact/resources/themes/lara-light-indigo/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css"; //icons

import React, { useState, useRef } from "react";
import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { Button } from "primereact/button";
import { Toolbar } from "primereact/toolbar";
import { Dialog } from "primereact/dialog";
import { Toast } from "primereact/toast";
import Image from "../images/image1.png";
import Image2 from "../images/image2.svg";
import { controlServices } from "../services/control";

import Lottie from "react-lottie";
import * as animationData from "../data/lottie.json";
import "../css/pageLogin.css";

//import "./DropdownDemo.css";

const PageLogin = () => {
  const [selectedUserType, setSelectedUserType] = useState(null);
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [showMessage, setShowMessage] = useState(false);
  const [kullaniciAdiClassName, setKullaniciAdiClassName] = useState(null);
  const [passwordClassName, setPasswordClassName] = useState(null);
  const controlService = new controlServices();

  const toast = useRef(null);
  const toastBC = useRef(null);

  const userType = [
    { name: "Standart Hesap", code: "1" },
    { name: "Onaylı Hesap", code: "2" },
    { name: "Premium Hesap", code: "3" },
  ];

  const controlUserInformation = async (userControl) => {
    // moc data icerisinden gelen veri ile yazilan bilgileri kontrol ediyorum -- gizem
    await controlService.getLoginData().then((data) => {
      console.log(userControl);
      console.log(data);
      let loginUserInfo = userControl.user_type.concat(
        "-",
        userControl.user_name,
        "-",
        userControl.user_password
      );
      if (data.indexOf(loginUserInfo) > -1) {
        setShowMessage(true);
        localStorage.setItem("currentUser", JSON.stringify(userName));
        setTimeout(function () {
          window.location.href = "http://localhost:3000/home";
        }, 3000);
      } else {
        // eger hata varsa hata uyarisi veriyorum
        toast.current.show({
          severity: "error",
          summary: "Hata !",
          detail: "Girilen Bilgiler Hatalı",
          life: 3000,
        });
      }
    });
  };

  const onUserTypeChange = (e) => {
    setSelectedUserType(e.value);
  };

  const leftTopToolbarTemplate = () => {
    return <h1 style={{ color: "blue" }}>FUPS</h1>;
  };

  const btnGirisYap = () => {
    if (userName == "" && password == "") {
      setKullaniciAdiClassName("p-invalid block");
      setPasswordClassName("p-invalid block");
    } else {
      // kullanici bilgilerini birlestiriyorum moc datadan kontrol edicem.
      let control = {
        user_type: "",
        user_name: "",
        user_password: "",
      };

      control.user_type = selectedUserType.code;
      control.user_name = userName;
      control.user_password = password;

      let userControl = control;
      setKullaniciAdiClassName();
      setPasswordClassName();
      controlUserInformation(userControl);
    }
  };

  const rightTopToolbarTemplate = () => {
    return (
      <Button
        label="Kayıt Ol"
        className="p-button-outlined p-button-secondary"
      />
    );
  };
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const leftToolbarTemplate = () => {
    return (
      <div>
        <div>
          <h1>Kullanıcı Girişi</h1>
        </div>
        <br />
        <div>Ad soyad ve şifren ile Fups hesabına giriş yapabilirsin</div>
        <br />
        <div className="field">
          <Dropdown
            value={selectedUserType}
            options={userType}
            onChange={onUserTypeChange}
            optionLabel="name"
            placeholder="Kullanıcı Tipi"
            style={{ width: "20vw" }}
          />
        </div>
        <div className="field">
          <span className="p-float-label">
            <InputText
              id="username"
              className={kullaniciAdiClassName}
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              style={{ width: "20vw" }}
              //style={{ width: "270px" }}
            />
            <label htmlFor="username">Kullanıcı Adı</label>
          </span>
        </div>
        <div className="field">
          <span className="p-float-label">
            <Password
              id="password"
              className={passwordClassName}
              inputClassName="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              //style={{ width: "19vw" }}
              toggleMask
              inputStyle={{ width: "20vw" }}
            />
            <label htmlFor="password">Şifre</label>
          </span>
        </div>
        <div style={{ display: "flex", width: "20vw" }}>
          <Button label="Şifremi Unuttum" className="p-button-link" />
          <Button label="Giriş Yap" onClick={btnGirisYap} />
        </div>
        <img src={Image2} width="100" style={{ paddingLeft: 0 }} />
      </div>
    );
  };
  const rightToolbarTemplate = () => {
    return (
      <div
        style={{
          backgroundColor: "black",
        }}
      >
        <div
          style={{
            color: "white",
            marginLeft: "1vw",
          }}
        >
          <h4>Nasıl giriş yaparım?</h4>
          <br />
          <i className="pi pi-phone">
            {" Telefonunuzdan Fups uygulamasını açınız"}
          </i>
          <br />
          <br />
          <i className="pi pi-user">
            {" Profil fotoğrafınızdaki QR ikonuna basın"}
          </i>
          <br />
          <br />
          <i className="pi pi-camera">
            {" QR Kodu okutarak internet şubeye giriş yapabilirsiniz."}
          </i>
        </div>
        <img src={Image} width="100%" />
      </div>
    );
  };

  return (
    <div className="form">
      <Toast ref={toastBC} position="bottom-center" />
      <Toast ref={toast} position="top-center" />
      <div className="flex justify-content-center">
        <div className="card">
          <div className="toolbar">
            <Toolbar
              left={leftTopToolbarTemplate}
              right={rightTopToolbarTemplate}
              style={{
                padding: "0",
              }}
            ></Toolbar>
            <Toolbar
              className="mb-4"
              left={leftToolbarTemplate}
              right={rightToolbarTemplate}
              style={{
                paddingLeft: "15vw",
              }}
            ></Toolbar>
          </div>
          <Dialog
            visible={showMessage}
            onHide={() => setShowMessage(false)}
            position="center"
            //footer={dialogFooter}
            //showHeader={false}
            style={{ width: "30vw", height: "20vw" }}
          >
            <div className="flex justify-content-center flex-column pt-6 px-3">
              <Lottie options={defaultOptions} height={100} width={100} />
              <h6 style={{ color: "blue" }}>Giriş Yapılıyor</h6>
            </div>
          </Dialog>
        </div>
      </div>
    </div>
  );
};
export default PageLogin;
