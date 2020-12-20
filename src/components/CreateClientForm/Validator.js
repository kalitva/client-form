export class Validator {
  constructor(matchers) {
    this.matchers = matchers
    this.resolved = false
    this.message = ''
  }

  getMessage() {
    return this.message
  }

  isResolved() {
    return this.resolved
  }

  validate(value) {
    this.message = ''
    this.resolved = false

    for (const matcher of this.matchers) {
      if (!matcher.match(value)) {
        this.message = matcher.message
        return
      }
    }

    this.resolved = true
  }
}
