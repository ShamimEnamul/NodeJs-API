const { validationResult } = require('express-validator');
exports.getPost = (req, res, next) =>
{
    res.status(200).json({
        posts: [{ 
            _id:'123',
            title: 'First Post', 
            creator: {
                name:"shamim enamul"
            },
            createdAt: new Date(),
            imimageUrl: 'images/dummyForNodejs.png',
            content: 'This is the first title'

        }]
    });
};

exports.createPost = (req, res, next) =>
{
    //check for validation!!
    const errors = validationResult(req);
    
    if(!errors.isEmpty())
    {
        return res.status(422).json(
            {
                message: ' validation error occured!',
                errors: errors.array()
                
                
            }
        )
    };
    
    // Create post in db
    const title = req.body.title;
    const content = req.body.content;
    console.log(title, content);
    res.status(201).json({
        message: 'successfully created',
        post: { 
            _id: new Date().toISOString(), 
            title: title, 
            content: content,
            creator:{
                name:'shamim post'
            },
            createdAt: new Date()
            
        }
    });
};