const mongoose=require("mongoose");

const projectSchema= new mongoose.Schema({
    title:{
        type:String,
    },
    domain:{
        type: String,
    },
    description:{
        type:String,
    },
    startDate:{
        type:Date,
    },
    token:{
        type:Number,
        default:0,
        required:true
    },
    endDate:{
        type:Date,
        default: new Date("2099-12-12")
    },
    ratings:{
        type:Number,
        default:0
    },
    numOfReviews:{
        type:Number,
        default:0
    },
    reviews:[
        {
            userId:{
                type:mongoose.Schema.ObjectId,
                ref:"User",
                required:true,
            },
            name:{
                type:String,
                required:true,
            },
            rating:{
                type:Number,
                required:true,
            },
            comment:{
                type:String,
                
            }
        }
    ],
    mentor:{
        type:mongoose.Schema.ObjectId,
        ref:"User",
    },
    organization:{
        type:mongoose.Schema.ObjectId,
        ref:"Organization",
    },
    menteesRequired:{
        type:Number,
        default:0
    },
    menteesApplication:[
        {
            user:{
                type:mongoose.Schema.ObjectId,
                ref:"User",
            },
            status:{
                type:String,
                default: "pending",
            }
        }
    ],
    menteesApproved:[
        {
            user:{
                type:mongoose.Schema.ObjectId,
                ref:"User",
            },
            assignedTaskIds:{
                type:[String],
            }
        }
    ],
    tasks:[
        {
            id:{
                type:String,
            },
            title:{
                type:String,
            },
            token:{
                type:Number,
                default:0
            },
            description:{
                type:String,
            },
            priority:{
                type:String,
            },
            dueDate:{
                type:Date
            },
            taskStatus:{
                type:String,
                default: "pending",
            },
            menteesAssigned:[
                {
                    type:mongoose.Schema.ObjectId,
                    ref:"User",
                }
            ],
            verificationKey:{
                type: String,
                default: null
            }
        }
    ],
    parentProjectId:{
        type: mongoose.Schema.ObjectId,
        ref: "Project",
        default: null,
    },
    links:[
        {
            linkType:{
                type:String
            },
            linkUrl:{
                type:String
            }
        }
    ]
})

module.exports=mongoose.model("Project",projectSchema);