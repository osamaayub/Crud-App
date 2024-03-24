/* eslint-disable no-fallthrough */
/* eslint-disable no-unreachable */
/* eslint-disable no-undef */
/* eslint-disable array-callback-return */
/* eslint-disable default-case */
/* eslint-disable no-unused-vars */


const BlogReducer = (state, action) => {
    switch (action.type) {
        case "ADD_BLOG":
            return {
                ...state,
                blogs: [action.payload,...state.blogs],
            };
        case "UPDATE_BLOG":
            const updatedBlog = action.payload;
            const updatedBlogs = state.blogs.map((blog) =>
                blog.id === updatedBlog.id ? updatedBlog : blog
            );
            return {
                ...state,
                blogs: updatedBlogs,
            }
        case "DELETE_BLOG":
            return {
                ...state,
                blogs:state.blogs.filter((blog) => blog.id !== action.payload),
            };

        default:
            return state;
    }
}

export default BlogReducer;





