const db = require('../utils/database');

module.exports = class Log {
  constructor(
    itemCode,
    itemName,
    qty
  ) {
    this.itemCode = itemCode,
    this.itemName = itemName,
    this.qty = qty
  }

  static findByCode(itemCode) {
    return db.execute(`SELECT * FROM TEST_LOGS WHERE ITEMCODE = ?`, [itemCode]);
  }

  static update(itemCode, qty) {
    return db.execute(`UPDATE TEST_LOGS SET QTY = ? WHERE ITEMCODE = ?`, [qty, itemCode]);
  }

  save() {
    return db.execute(`INSERT INTO TEST_LOGS (ITEMCODE, ITEMNAME, QTY) VALUES (?,?,?)`, [this.itemCode, this.itemName, this.qty]);
  }
}