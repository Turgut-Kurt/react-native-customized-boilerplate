export default class Global {
  token = '';
  lang = '';
  static setToken = token => {
    this.token = token;
  };

  static getToken = () => {
    return this.token;
  };
  static setLang = lang => {
    this.lang = lang;
  };

  static getLang = () => {
    return this.lang;
  };
}
