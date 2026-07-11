/**
 * logstream - Core module
 */

"use strict";

class Logstream {
  constructor(options = {}) {
    this.options = options;
    this.initialized = false;
    this._startTime = null;
  }

  init() {
    if (this.initialized) return;
    this._startTime = Date.now();
    this.initialized = true;
    console.log(`logstream initialized`);
  }

  process(data) {
    if (!this.initialized) throw new Error("Must call init() first");
    return data.map((item) => ({
      id: item.id,
      status: "processed",
      timestamp: Date.now(),
    }));
  }

  shutdown() {
    if (this._startTime) {
      const elapsed = (Date.now() - this._startTime) / 1000;
      console.log(`Shutting down after ${elapsed.toFixed(2)}s`);
    }
    this.initialized = false;
  }
}

module.exports = Logstream;
