const { useContext } = require('react')
const { CurrentUser } = require('../contexts/CurrentUser')
function CommentCard({ comment, onDelete }) {
    const { currentUser } = useContext(CurrentUser)

    let deleteButton = null

    if(currentUser?.userId === comment.authorId) {
        deleteButton = (
            <button className="btn btn-danger" onClick={onDelete} >
                Delete Comment
            </button>
        )
    }
    const user = (!comment.author) ? comment.currentUser : comment.author
    return (
        <div className="border col-sm-4">
            <h2 className="rant">{comment.rant ? 'Rant! 😡' : 'Rave! 😻'}</h2>
            <h4>{comment.content}</h4>
            <h3>
                <strong>- {user.firstName} {user.lastName}</strong>
            </h3>
            <h4>Rating: {comment.stars}</h4>
            {deleteButton}
        </div>
    )
}

export default CommentCard;