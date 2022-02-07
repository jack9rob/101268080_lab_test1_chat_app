const mongoose = require('mongoose')

const GroupMessageSchema = mongoose.Schema(
    {
        from_user: {
            type: String,
            required: true
        },
        room: {
            type: String,
            required: true,
        }, 
        message: {
            type: String,
            required: true,
            default:''
        },
        date_sent: {
            type: Date
        }
        
    }
)

module.exports = mongoose.model("GroupMessage", GroupMessageSchema);