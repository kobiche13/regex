export default class Validator {
  constructor(name) {
    this.name = name;
  }

  validateUsername(name) {
    return /^[a-z]((?!\d{4,})[\w-])*[a-z]$/i.test(this.name);
  }
}
