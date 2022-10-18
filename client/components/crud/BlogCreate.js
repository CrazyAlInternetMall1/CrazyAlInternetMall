import Link from 'next/link'
import { useState, useEffect } from 'react'
import Router from 'next/router'
import dynamic from 'next/dynamic'
import { withRouter } from 'next/router'
import { getCookie, isAuth } from '../../actions/auth'
import { getCategories } from '../../actions/category'
import { getTags } from '../../actions/tag'
import { createBlog } from '../../actions/blog'

const ReactQuill = dynamic(() => import('react-quill'), {ssr:false})
import '../../../client/node_modules/react-quill/dist/quill.snow.css'
import { emitWarning } from 'process'

const CreateBlog = ({router}) => {

    // get blog that was previeosly worked on and sent to local storage
    const blogFromLS = () => {
        if(typeof window === 'undefined'){
            return false
        }
        if(localStorage.getItem('blog')){
            return JSON.parse(localStorage.getItem('blog'))
        } else {
            return false
        }
    }

    const [categories, setCategories] = useState([])
    const [tags, setTags] = useState([])

    const [checked, setChecked] = useState([]) //for setting cats
    const [checkedTag, setCheckedTag] = useState([]) //for setting tags



    const [body, setBody] = useState(blogFromLS())
    const [values, setValues] = useState({
        error: '',
        sizeError: '',
        success:'',
        formData:'',
        title:'',
        hidePublishButton: false
    })

    const {error, sizeError, success, formData, title, hidePublishButton} = values
    const token = getCookie('token')

    useEffect(() => {
        setValues({...values, formData: new FormData()})
        initCategories()
        initTags()
    }, [router])

    const initCategories = () => {
        getCategories().then(data => {
            if(data.error){
                setValues({...values, error: data.error})
            } else {
                setCategories(data)
            }
        })
    }

    const initTags = () => {
        getTags().then(data => {
            if(data.error){
                setValues({...values, error: data.error})
            } else {
                setTags(data)
            }
        })
    }

    const publishBlog = (e) => {
        e.preventDefault()
        
        createBlog(formData, token).then(data => {
            if(data.error){
                setValues({...values, error: data.error})
            } else {
                setValues({...values, title: '', error: '', success: `A new pst titled "${data.title} created"`})
                setBody('')
                setCategories([])
                setTags([])
            }
        })
    }

    const handleChange = name => e => {
        const value = name === 'photo' ? e.target.files[0] : e.target.value
        formData.set(name, value)
        setValues({...values, [name]: value, formData, error: ''})
    }

    const handleBody = e => {
        setBody(e)
        formData.set('body', e)
        if(typeof window !== 'undefined'){
            localStorage.setItem('blog', JSON.stringify(e))
        }
    }



    const handleToggle = (c) => () => {
        setValues({...values, error:''})
        //return the first index or -1
        const clickedCategory = checked.indexOf(c)
        const all = [...checked]

        if(clickedCategory === -1){
            all.push(c)
        } else{
            all.splice(clickedCategory, 1)
        }
        console.log(all);
        setChecked(all)
        formData.set('categories', all)
    }

    const handleToggleTag = (t) => () => {
        setValues({...values, error:''})
        //return the first index or -1
        const clickedTag = checked.indexOf(t)
        const all = [...checkedTag]

        if(clickedTag === -1){
            all.push(t)
        } else{
            all.splice(clickedTag, 1)
        }
        console.log(all);
        setCheckedTag(all)
        formData.set('tags', all)
    }

    const showCategories = () => {
        return (
            categories && categories.map((c, i) => (
                <li key={i} className="list-unstyled">
                    <input onChange={handleToggle(c._id)} type="checkbox" className="mr-2" />
                    <label className='form-check-label'>{c.name}</label>
                </li>
            ))
        )
    }

    const showTags = () => {
        return (
            tags && tags.map((t, i) => (
                <li key={i} className="list-unstyled">
                    <input onChange={handleToggleTag(t._id)} type="checkbox" className="mr-2" />
                    <label className='form-check-label'>{t.name}</label>
                </li>
            ))
        )
    }

    const showError = () => (
        <div className="alert alert-danger" style={{display: error ? '' : 'none'}}>{error}</div>
    )

    const showSuccess = () => (
        <div className="alert alert-sucess" style={{display: success ? '' : 'none'}}>{success}</div>
    )


    const createBlogForm = () => {
        return (
            <form action="" className="" onSubmit={publishBlog}>
                <div className="form-group">
                    <label htmlFor="" className='text-muted'>Title</label>
                    <input type="text" className='form-control'  onChange={handleChange('title')} value={title}/>
                </div>
                <div className="form-group">
                    <ReactQuill modules={CreateBlog.modules} formats={CreateBlog.formats} value={body} placeholder="type something cool..." onChange={handleBody}></ReactQuill>
                </div>
                <div className="">
                    <button className="btn btn-primary" type='submit'>Publish</button>
                </div>
            </form>
        )
    }

    return (
        <div className="container-fluid pb-5">
            <div className="row">
                <div className="col-md-8">
                    {createBlogForm()}
                    <div className="pt-3">
                        {showError()}
                        {showSuccess()}
                    </div>
                    <hr />
                </div>
                <div className="col-md-4">
                    <div>
                        <div className="form-group pb-2">
                            <h5>Featured Image</h5>
                            <hr />

                            <small className='text-muted'>Max size 1MB</small>
                            <label className='btn btn-outtline-info'>Upload Image
                            <input onChange={handleChange('photo')} type="file" accept='image/*' hidden/>
                            </label>
                        </div>
                    </div>
                    <div className="">
                        <h5>Categories</h5>
                        <hr />
                        <ul style={{maxHeight: '200px', overflowY: 'scroll'}}>
                            {showCategories()}
                        </ul>
                    </div>
                    <div className="">
                        <h5>Tags</h5>
                        <hr />
                        <ul style={{maxHeight: '200px', overflowY: 'scroll'}}>
                            {showTags()}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withRouter(CreateBlog);