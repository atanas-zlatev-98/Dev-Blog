import "./CreatePost.style.scss";
import { useCreatePost } from "../../../hooks/useCreatePostForm.js";

const CreatePost = () => {

  const {formValues,changeHandler,submitHandler} = useCreatePost();
 
  return (
    <div className="main-create">
      <div className="form-container">
        <h1>Create Post.</h1>

        <form className="create-form" onSubmit={submitHandler}>

          <div className="form-group">
            <input type="text" placeholder="Header Image" name="imageUrl" value={formValues.imageUrl} onChange={changeHandler}/>
             {/* TODO: Add image from device */}
          </div>

          <div className="form-group">
            <input type="text" placeholder="Post Title" name="title" value={formValues.title} onChange={changeHandler}/>
          </div>

          <div className="form-group">
            <input type="text" placeholder="Tags" name="tags" value={formValues.tags} onChange={changeHandler}/>
          </div>

          <div className="form-group">
            <textarea className="text-area-content" type="text" rows={10} placeholder="Content" name="content" value={formValues.content} onChange={changeHandler}></textarea>
          </div>

          <div className="btn-container">
            <button type="submit">Create Post</button>
            {/* <button type="submit">Save as Draft</button> */}
          </div>

        </form>
      </div>
    </div>
  );
};

export default CreatePost;
