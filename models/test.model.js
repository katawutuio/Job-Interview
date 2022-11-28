const db = require('../utils/database');

module.exports = class Test {
  constructor(
    itemCode,
    itemName,
    max,
    min
  ) {
    this.itemCode = itemCode,
    this.itemName = itemName,
    this.max = max,
    this.min = min
  }

  static findByCode(itemCode) {
    return db.execute(`SELECT * FROM TEST_TABLE WHERE ITEMCODE = ?`, [itemCode]);
  }

  static updateMin(itemCode, min) {
    return db.execute(`UPDATE TEST_TABLE SET MIN = ? WHERE ITEMCODE = ?`, [min, itemCode]);
  }
}