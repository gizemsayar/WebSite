import React, { useState, useEffect, useRef, Fragment } from "react";
import { Toolbar } from "primereact/toolbar";
import { Paginator } from "primereact/paginator";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import Turkcell from "../images/turkcell.png";
import Oyun from "../images/oyun.png";
import Ucret from "../images/ucret.png";
import footer from "../images/footer.png";
import AppTopBar from "./pageAppTopBar";
import "../css/home.css";
import "primereact/resources/themes/lara-light-indigo/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css"; //icons
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const PageHome = () => {
  const toolbarTemplate = () => {
    return (
      <React.Fragment>
        <h6> HESAP HAREKETLERİ</h6>
      </React.Fragment>
    );
  };
  const toolbarTemplateRight = () => {
    return (
      <React.Fragment>
        <h6 style={{ color: "blue" }}>Harcama Analizi</h6>
        <i style={{ color: "blue" }} className="pi pi-chevron-right" />
      </React.Fragment>
    );
  };
  return (
    <div className="flex justify-content-center">
      <div className="block-section">
        <AppTopBar />
      </div>
      <div className="card">
        <div>
          <div className="header" style={{ height: "5vw" }}>
            <h5>SİZE ÖZEL KAMPANYALAR</h5>
          </div>
          <div className="image-gallery">
            <Swiper
              slidesPerView={3}
              spaceBetween={30}
              slidesPerGroup={3}
              loop={true}
              loopFillGroupWithBlank={true}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Pagination, Navigation]}
              className="mySwiper"
            >
              <SwiperSlide>
                <Card title="TURKCELL KAMPANYASI">
                  <img
                    src={Turkcell}
                    className="image"
                    title=" Fatura ödemelerinizde her ay 10 TL kazan dilediğince harca."
                  />
                  <p>
                    Fatura ödemelerinizde her ay 10 TL kazan dilediğince harca.
                  </p>
                </Card>
              </SwiperSlide>
              <SwiperSlide>
                <Card title="OYUN & E-PIN FIRSATI">
                  <img src={Oyun} className="image" />
                  <p>
                    Tüm alışverişlerinizde %20 bonus kazanma fırsatını kaçırma.
                  </p>
                </Card>
              </SwiperSlide>
              <SwiperSlide>
                <Card title="ÜCRETSİZ İŞLEM">
                  <img src={Ucret} className="image" />
                  <p>
                    Fups App'i hemen indir! Ücretsiz işlem fırsatından sende
                    yararlan.
                  </p>
                </Card>
              </SwiperSlide>
              <SwiperSlide>
                <Card title="TURKCELL KAMPANYASI">
                  <img src={Turkcell} className="image" />
                  <p>
                    Fatura ödemelerinizde her ay 10 TL kazan dilediğince harca.
                  </p>
                </Card>
              </SwiperSlide>
              <SwiperSlide>
                <Card title="OYUN & E-PIN FIRSATI">
                  <img src={Oyun} className="image" />
                  <p>
                    Tüm alışverişlerinizde %20 bonus kazanma fırsatını kaçırma.
                  </p>
                </Card>
              </SwiperSlide>
              <SwiperSlide>
                <Card title="ÜCRETSİZ İŞLEM">
                  <img src={Ucret} className="image" />
                  <p>
                    Fups App'i hemen indir! Ücretsiz işlem fırsatından sende
                    yararlan.
                  </p>
                </Card>
              </SwiperSlide>
            </Swiper>
          </div>
          <Toolbar
            left={toolbarTemplate}
            right={toolbarTemplateRight}
            style={{
              padding: "0",
              height: "4vw",
            }}
          />
          <div>
            <div style={{ display: "flex" }}>
              <p>
                <h5>
                  <i className="pi pi-shopping-cart" /> Burger’s Lab
                </h5>
                <span className="font">Aile Hesabım (Yasemin Pınar)</span>
                <h5>
                  <i className="pi pi-money-bill" /> Gelen Transfer
                </h5>
                <span className="font">Dolar Hesabım (Erman Karakaya)</span>
                <h5>
                  <i className="pi pi-wallet" /> Para Yükle
                </h5>
                <span className="font">Atın Hesabıma</span>
              </p>
              <div style={{ paddingLeft: "78vw" }}>
                <h4>-₺200</h4>
                <span className="font">2 saat önce</span>
                <h4 style={{ color: "green" }}>+ $200</h4>
                <span className="font">6 saat önce</span>
                <h4>2,00 gr</h4>
                <span className="font">12 saat önce</span>
              </div>
            </div>
            <Paginator></Paginator>
            <div style={{ display: "flex" }}>
              <div>
                <h5>Sosyal hesaplar sizlerle!</h5>
                Lorem ipsum dolor sit amet, consectetur adipiscing eliti, donec
                rhoncus velit enim, ut malesuada erat dignissim sed.
              </div>
              <img src={footer} className="image-footer" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageHome;
