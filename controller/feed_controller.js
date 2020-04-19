exports.getPosts = (req, res, next) =>
{
    res.status(200).json({
        posts: [{title: 'First Post', content: 'This is the first title'}]
    });
};

exports.createPost = (req, res, next) =>
{
    // Create post in db
    const title = req.body.title;
    const content = req.body.content;
    res.status(201).json({
        message: 'successfully created',
        post: {id: new Date().toISOString, title: title, content: content}
    });
};