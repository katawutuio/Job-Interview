const Test = require('../models/test.model');
const Log = require('../models/log.model');

async function update(req, res) {
  const itemCode = req.body.ITEMCODE;
  const qty = req.body.QTY;

  const [rows, fields] = await Test.findByCode(itemCode);

  if (rows.length === 0) {
    return res.status(400).json({error: 'Invalid request value.'});
  }
  
  const data = rows[0];
  const itemName = data.ITEMNAME;
  const currentMax = data.MAX;
  const currentMin = data.MIN;
  const updatingMin = qty + currentMin;

  if (updatingMin > currentMax) {
    return res.status(400).json({error: 'Invalid request value.'});
  }

  try {
    await Test.updateMin(itemCode, updatingMin);

    // save log
    const [existLog, fields] = await Log.findByCode(itemCode);
    if (existLog.length > 0) {
      await Log.update(itemCode, existLog[0].QTY + qty);
    } else {
      const log = new Log(itemCode, itemName, qty)
      await log.save();
    }

  } catch (error) {
    return res.status(500).json({error: 'something went wrong'});
  }
  
  return res.status(201).json({message: 'data updated.'});
}

module.exports = {
  update
}