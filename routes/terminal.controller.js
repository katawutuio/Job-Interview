const Terminal = require('../models/terminal.model');

async function getShops(req, res) {
  let data = [];

  try {
    const [rows, fields] = await Terminal.fetchAll();
    data = rows;

  } catch (error) {
    return res.status(500).json({error: 'something went wrong'});
  }

  return res.json(data);
}

async function getShop(req, res) {
  const terminalId = req.params.id;
  let data =[];

  try {
    const [rows, fields] = await Terminal.findById(terminalId);
    data = rows;

  } catch (error) {
    return res.status(500).json({error: 'something went wrong'});
  }

  return res.json(data);
}

async function addShop(req, res) {

  try {
    const [rows, fields] = await Terminal.findById(req.body.TERM_ID);

    if (rows.length !== 0) {
      return res.status(400).json({message: 'Invalid request'});
    }

    const termId = req.body.TERM_ID;
    const branch = req.body.BRANCH;
    const vendorNo = req.body.VENDORNO;
    const productNo = req.body.PRODUCTNO;
    const pmiNo = req.body.PMINO;
    const batch = req.body.BATCH;
    const slipNo = req.body.SLIPNO;
    const termName = req.body.TERM_NAME;
    const termFood = req.body.TERM_FOOD;
    const payPerCent = req.body.PAYPERCENT;
    const payPerDay = req.body.PAYPERDAY;
    const includeVat = req.body.INCLUDEVAT;
    const invPrint = req.body.INV_PRINT;
    const invName = req.body.INV_NAME;
    const invAddress = req.body.INV_ADDR;
    const termFlag = req.body.TERM_FLAG;
    const typePay = req.body.TYPEPAY;
    const staffOfChange = req.body.STAFFOFCHARGE;
    const staffProductNo = req.body.STAFFPRODUCTNO;
    const customerRef = req.body.CUSTOMER_REF;
    const rentalId = req.body.RENTAL_ID;
    const horizonSent = req.body.HORIZON_SENT;
    const leaseType = req.body.LEASE_TYPE;
    const clubCardCode = req.body.CLUBCARD_CODE;
    const clubCardAmt = req.body.CLUBCARD_AMT;
    const clubCardPoint = req.body.CLUBCARD_POINT;
    const terminalType = req.body.TERMINAL_TYPE;

    const terminal = new Terminal(
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
    );

    await terminal.save();
    return res.status(201).json({message: 'Success.'});

  } catch (error) {
    return res.status(500).json({error: 'something went wrong'});
  }
}

async function updateShop(req, res) {
  const termId = req.body.TERM_ID;
  const updateData = req.body;

  try {
    await Terminal.update(termId, updateData);
  } catch (error) {
    return res.status(500).json({error: 'something went wrong'});
  }

  return res.status(201).json({message: 'data updated.'})

}

async function deleteShop(req, res) {
  const termId = req.params.id;

  try {
    const [rows, fields] = await Terminal.delete(termId);
    if (rows.affectedRows === 0) {
      return res.status(404).json({message: 'Record not found.'});
    }

  } catch (error) {
    return res.status(500).json({error: 'something went wrong'});
  }

  return res.status(200).json({message: 'data deleted.'});
}

module.exports = {
  getShops,
  getShop,
  addShop,
  updateShop,
  deleteShop
}