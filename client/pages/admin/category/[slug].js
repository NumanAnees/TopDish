import dynamic from 'next/dynamic';
const ReactQuill = dynamic(()=>import("react-quill"),{ssr:false});
import { useState, useEffect } from 'react';
import axios from 'axios';
import { API } from '../../../config';
import { showSuccessMessage, showErrorMessage } from '../../../helpers/alerts';
import Layout from '../../../components/Layout';
import withAdmin from '../../withAdmin';
import 'react-quill/dist/quill.snow.css';


const Update = ({ oldCategory, token }) => {
    // console.log("----BOOOOOOyyyyyyy----",oldCategory);
    const [state, setState] = useState({
        name: oldCategory.name,
        url: oldCategory.image.url,
        error: '',
        success: '',
        buttonText: 'Update',
    });
    const [content,setContent] = useState(oldCategory.content); 
    const { name,url, success, error, buttonText } = state;

    const handleChange = name => e => {
        setState({ ...state, [name]: e.target.value, error: '', success: '' });
    };

    const handleSubmit = async e => {
        e.preventDefault();
        setState({ ...state, buttonText: 'Creating' });
        try {
           const response = await axios.put(
                `${API}/category/${oldCategory.slug}`,
                { name, content, url },
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );
            console.log('CATEGORY Update RESPONSE', response);
            setState({
                ...state,
                name: '',
                url: '',
                buttonText: 'Updated',
                success: "Record is Updated"
            });
            setContent("");

        } catch (error) {
            console.log('CATEGORY Update ERROR', error);
            setState({ ...state, name: '', buttonText: 'Update', error: "Sorry,can't update now" });
        }
    };

      const handleContent = e => {
        setContent(e);
        setState({ ...state, success: '', error: '' });
    };

    const UpdateCategoryForm = () => (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label className="text-muted">Name</label>
                <input onChange={handleChange('name')} value={name} type="text" className="form-control" required />
            </div>
            <div className="form-group">
                <label className="text-muted">Content</label>
                 <ReactQuill
                    value={content}
                    onChange={handleContent}
                    placeholder="Write something..."
                    theme="snow"
                    className="pb-5 mb-3"
                    style={{ border: '1px solid #666' }}
                />            </div>
              <div className="form-group">
                <label className="text-muted">Image Url</label>
                <input onChange={handleChange('url')} value={url} className="form-control" required />
            </div>
            <div>
                <button className="btn btn-outline-dark">{buttonText}</button>
            </div>
        </form>
    );

    return (
        <Layout>
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <h1>Update category</h1>
                    <br />
                    {success && showSuccessMessage(success)}
                    {error && showErrorMessage(error)}
                    {UpdateCategoryForm()}
                </div>
            </div>
        </Layout>
    );
};
Update.getInitialProps = async ({ req, query, token }) => {
    const response = await axios.post(`${API}/category/${query.slug}`);
    return { oldCategory: response.data.category, token };
};
export default withAdmin(Update);