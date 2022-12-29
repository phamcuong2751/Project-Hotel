import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

import userRoute from '../routes/user.route.js'
import roomRoute from '../routes/room.route.js'
import typeRoomRoute from '../routes/typeRoom.route.js'
import customerRoute from '../routes/customer.route.js'
import receiptRoute from '../routes/receipt.route.js'
import rentingBillRoute from '../routes/rentingBill.route.js'
export default function(app){
    app.use('/api/users',userRoute);
    app.use('/api/rooms',roomRoute);
    app.use('/api/typerooms',typeRoomRoute);
    app.use('/api/customers',customerRoute);
    app.use('/api/receipt',receiptRoute);
    app.use('/api/rentingbills',rentingBillRoute);
}