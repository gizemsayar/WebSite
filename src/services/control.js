export class controlServices {
  getLoginData() {
    return fetch("data/login.json")
      .then((res) => res.json())
      .then((d) => d.data);
  }
}
