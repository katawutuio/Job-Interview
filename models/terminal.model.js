const db = require('../utils/database');

module.exports = class Terminal {
  constructor(
    termId,
    branch,
    vendorNo,
    productNo,
    pmiNo,
    batch,
    slipNo,
    termName,
    termFood,
    payPerCent,
    payPerDay,
    includeVat,
    invPrint,
    invName,
    invAddress,
    termFlag,
    typePay,
    staffOfChange,
    staffProductNo,
    customerRef,
    rentalId,
    horizonSent,
    leaseType,
    clubCardCode,
    clubCardAmt,
    clubCardPoint,
    terminalType
  ) {
      this.termId = termId,
      this.branch = branch,
      this.vendorNo = vendorNo,
      this.productNo = productNo,
      this.pmiNo = pmiNo,
      this.batch = batch,
      this.slipNo = slipNo,
      this.termName = termName,
      this.termFood = termFood,
      this.payPerCent = payPerCent,
      this.payPerDay = payPerDay,
      this.includeVat = includeVat,
      this.invPrint = invPrint,
      this.invName = invName,
      this.invAddress = invAddress,
      this.termFlag = termFlag,
      this.typePay = typePay,
      this.staffOfChange = staffOfChange,
      this.staffProductNo = staffProductNo,
      this.customerRef = customerRef,
      this.rentalId = rentalId,
      this.horizonSent = horizonSent,
      this.leaseType = leaseType,
      this.clubCardCode = clubCardCode,
      this.clubCardAmt = clubCardAmt,
      this.clubCardPoint = clubCardPoint,
      this.terminalType = terminalType
  }

  static fetchAll() {
    return db.execute('SELECT * FROM TERMINAL_INFO');
  }
  
  static findById(id) {
    return db.execute(`SELECT * FROM TERMINAL_INFO WHERE TERM_ID = ?`, [id]);
  }
  
  save() {
    return db.execute(
      `INSERT INTO TERMINAL_INFO (
        TERM_ID, 
        BRANCH, 
        VENDORNO, 
        PRODUCTNO, 
        PMINO, 
        BATCH, 
        SLIPNO, 
        TERM_NAME, 
        TERM_FOOD, 
        PAYPERCENT, 
        PAYPERDAY, 
        INCLUDEVAT, 
        INV_PRINT,
        INV_NAME,
        INV_ADDR,
        TERM_FLAG,
        TYPEPAY,
        STAFFOFCHARGE,
        STAFFPRODUCTNO,
        CUSTOMER_REF,
        RENTAL_ID,
        HORIZON_SENT,
        LEASE_TYPE,
        CLUBCARD_CODE,
        CLUBCARD_AMT,
        CLUBCARD_POINT,
        TERMINAL_TYPE
      ) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`,
      [
        this.termId,
        this.branch,
        this.vendorNo,
        this.productNo,
        this.pmiNo,
        this.batch,
        this.slipNo,
        this.termName,
        this.termFood,
        this.payPerCent,
        this.payPerDay,
        this.includeVat,
        this.invPrint,
        this.invName,
        this.invAddress,
        this.termFlag,
        this.typePay,
        this.staffOfChange,
        this.staffProductNo,
        this.customerRef,
        this.rentalId,
        this.horizonSent,
        this.leaseType,
        this.clubCardCode,
        this.clubCardAmt,
        this.clubCardPoint,
        this.terminalType
      ]
    );
  }

  static update(id, updateData) {
    let query = '';
    const value = [];

    for (const key in updateData) {
      if (key === 'TERM_ID') {
        continue;
      }
      query += `${key} = ?,`;
      value.push(updateData[key]);
    }

    // remove ',' at end of query string
    query = query.slice(0, -1);

    return db.execute(`UPDATE TERMINAL_INFO SET ${query} WHERE TERM_ID = ${id}`, value);
  }

  static delete(id) {
    return db.execute('DELETE FROM TERMINAL_INFO WHERE TERM_ID = ?', [id]);
  }
};