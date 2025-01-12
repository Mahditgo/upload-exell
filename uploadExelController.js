const XLXS = require('xlsx');
const UploadModel = require('./uploadModel');

exports.uploadXlxs = async (req, res) => {
    try {

        const filePath = req.file.path;

        const workbook = XLXS.readFile(filePath);
        const sheetName = workbook.SheetNames[0];
        let data = XLXS.utils.sheet_to_json(workbook.Sheets[sheetName]);
console.log(data);

    
        data = data.map((row) => ({
            InvoiceNumber: row['شماره صورتحساب'] || null,
            InvoiceDate: row['تاریخ صورتحساب'] || null,
            BuyerDetailCode: row['کد تفصیل خریدار'] || null,
            buyersName: row['نام خریدار'] || null,
            productCode: row['کد محصول'] || null,
            productName: row['نام محصول'] || null,
            unit: row['واحد'] || null,
            amount: row['تعداد'] || null,
            rate: row['نرخ'] || null,
            salesAmount: row['مبلغ فروش'] || null,
            AddedValue: row['ارزش افزوده'.trim()],
            finalAmount: row['مبلغ نهایی با ارزش افزوده'] || null
        }));

        const records = await UploadModel.insertMany(data);

        res.status(200).json({
            message : "file uploaded successfully",
            records
        })


    }catch(e) {
        console.log(e.message);
        res.status(500).json('internal server error')
        
    }
}

