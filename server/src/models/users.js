const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
//creating a schema

const userSchema = new mongoose.Schema({
     firstName:{
         type: String,
         required: true,
         min:3,
         trim: true,
         max:15
     },
     lastName:{
         type: String,
         required: true,
         min:3,
         trim: true,
         max:15
     },
    username:{
         type: String,
         required: true,
         min:3,
         trim: true,
         max:15,
         unique: true,
         lowercase: true,
         index: true
     },
     email:{
         type: String,
         required: true,
         trim: true,
         unique: true,
         lowercase: true,
     },
     hash_password:{
         type: String,
         required: true,
         trim: true,
         unique: true,
         min: 4,
    },
    role:{
        type: String,
        enum: ['user', 'admin'],
        default: 'admin'
    },
    contactNumber:{
        type: String
    },
    profilePicture:{
        type: String
    },
    
}, {timestamps: true} )

userSchema.virtual('password')
.set((password) => {
    this.hash_password = bcrypt.hashSync(password, 10)
})

userSchema.methods = {
    authenticate: function(password) {
        return bcrypt.compareSync(password, this.hash_password)
    }
}

module.export = mongoose.model('User', userSchema)