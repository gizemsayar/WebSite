import { Button } from "primereact/button";
import React from "react";
import { Menubar } from "primereact/menubar";

import CurrentUserHelper from "./currentUserHelper";

const AppTopBar = () => {
  const { getCurrentUser } = CurrentUserHelper();
  const currentUser = getCurrentUser();

  const start = <h1 style={{ color: "blue", paddingRight: "10%" }}>FUPS</h1>;
  const end = <i className="pi pi-user">{" " + currentUser}</i>;
  const items = [
    {
      label: "Hesaplar",
      icon: "pi pi pi-shopping-bag",
      items: [
        {
          label: "İtem 1",
          icon: "pi pi-fw pi-plus",
        },
        {
          label: "İtem 2",
          icon: "pi pi-fw pi-trash",
        },
      ],
    },
    {
      label: "Kartlar",
      icon: "pi pi-credit-card",
      items: [
        {
          label: "İtem 1",
          icon: "pi pi-fw pi-plus",
        },
        {
          label: "İtem 2",
          icon: "pi pi-fw pi-trash",
        },
      ],
    },
    {
      label: "İşlemler",
      icon: "pi pi-th-large",
      items: [
        {
          label: "İtem 1",
          icon: "pi pi-fw pi-plus",
        },
        {
          label: "İtem 2",
          icon: "pi pi-fw pi-trash",
        },
      ],
    },
    {
      label: "Kampanyalar",
      icon: "pi pi-star-fill",
      items: [
        {
          label: "İtem 1",
          icon: "pi pi-fw pi-plus",
        },
        {
          label: "İtem 2",
          icon: "pi pi-fw pi-trash",
        },
      ],
    },
  ];

  return (
    <div className="block-header">
      <Menubar
        model={items}
        start={start}
        end={end}
        style={{ height: "60px" }}
      />
    </div>
  );
};
export default AppTopBar;
