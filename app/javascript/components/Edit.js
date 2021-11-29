import React from 'react';
import axios from 'axios';
import { render } from 'react-dom';
// import { Formik } from 'formik';
// import * as yup from 'yup';
// import { withFormik } from 'formik'
// import { useParams, useNavigate } from 'react-router-dom';
import { Form, FormGroup, Label, Input, Button, FormFeedback } from 'reactstrap';
import { Formik } from 'formik';
import * as Yup from 'yup';

class Edit extends React.Component {
    constructor(props) {
        super(props)
    }
    // render() {
    //     return(
            handleOnSubmit = (values) => {
                    alert(JSON.stringify(values));
                  }
                
                  render() {
                    return (
                      <div className="container">
                        <h3 className="my-5">動的バリデーションテスト</h3>
                        <Formik
                          initialValues={{ content: this.props.content}}
                          onSubmit={(values) => this.handleOnSubmit(values)}
                          validationSchema={Yup.lazy(values => {
                            // if (values.content === "") {
                            //   return Yup.object().shape({
                            //     content: Yup.string().max(100, '本文は200文字以内で入力してください').required('本文は必須項目です'),
                            //   });
                            // } else {
                            // if (values.content === "content") {
                              return Yup.object().shape({
                                content: Yup.string().max(100, '本文は100文字以内で入力してください').required('本文は必須項目です'),
                                // pet: Yup.string().required(),
                                // petName: Yup.string().required(),
                              });
                            // }
                          })}
                        >
                          {
                            ({ handleSubmit, handleChange, handleBlur, values, errors, touched, setFieldValue }) => (
                              <Form>
                                <FormGroup>
                                  <Label>Content</Label>
                                  <Input
                                    type="content"
                                    name="content"
                                    value={values.content}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    invalid={Boolean(errors.content && touched.content)}
                                  />
                                  <FormFeedback>
                                    {errors.content}
                                  </FormFeedback>
                                </FormGroup>
                                {/* <FormGroup>
                                  <legend className="col-form-label">犬を飼っていますか？</legend>
                                  <FormGroup inline check>
                                    <Label check>
                                      飼っている：
                                      <Input
                                        type="radio"
                                        name="pet"
                                        value="havePet"
                                        onChange={handleChange}
                                      />
                                    </Label>
                                  </FormGroup>
                                  <FormGroup inline check>
                                    <Label check>
                                      飼っていない：
                                      <Input
                                        type="radio"
                                        name="pet"
                                        value="noPet"
                                        onChange={handleChange}
                                      />
                                    </Label>
                                  </FormGroup>
                                  <span className="text-danger small">{touched.pet && errors.pet ? errors.pet : null}</span>
                                </FormGroup>
                                <FormGroup>
                                  <Label>ペットの名前</Label>
                                  <Input
                                    type="text"
                                    name="petName"
                                    value={values.petName}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    invalid={Boolean(errors.petName && touched.petName)}
                                  />
                                  <FormFeedback>
                                    {errors.petName}
                                  </FormFeedback>
                                </FormGroup> */}
                                <FormGroup></FormGroup>
                                <Button onClick={handleSubmit}>申し込む</Button>
                              </Form>
                            )
                          }
                        </Formik>
                      </div>
                    );
                //   }
                // }
    //     )
    }
}

//   handleOnSubmit = (values) => {
//     alert(JSON.stringify(values));
//   }

//   render() {
//     return (
//       <div className="container">
//         <h3 className="my-5">動的バリデーションテスト</h3>
//         <Formik
//           initialValues={{ email: '', pet: '', petName: '' }}
//           onSubmit={(values) => this.handleOnSubmit(values)}
//           validationSchema={Yup.lazy(values => {
//             if (values.pet === 'noPet') {
//               return Yup.object().shape({
//                 email: Yup.string().required(),
//                 pet: Yup.string().required(),
//               });
//             } else {
//               return Yup.object().shape({
//                 email: Yup.string().required(),
//                 pet: Yup.string().required(),
//                 petName: Yup.string().required(),
//               });
//             }
//           })}
//         >
//           {
//             ({ handleSubmit, handleChange, handleBlur, values, errors, touched, setFieldValue }) => (
//               <Form>
//                 <FormGroup>
//                   <Label>Email</Label>
//                   <Input
//                     type="email"
//                     name="email"
//                     value={values.email}
//                     onChange={handleChange}
//                     onBlur={handleBlur}
//                     invalid={Boolean(errors.email && touched.email)}
//                   />
//                   <FormFeedback>
//                     {errors.email}
//                   </FormFeedback>
//                 </FormGroup>
//                 <FormGroup>
//                   <legend className="col-form-label">犬を飼っていますか？</legend>
//                   <FormGroup inline check>
//                     <Label check>
//                       飼っている：
//                       <Input
//                         type="radio"
//                         name="pet"
//                         value="havePet"
//                         onChange={handleChange}
//                       />
//                     </Label>
//                   </FormGroup>
//                   <FormGroup inline check>
//                     <Label check>
//                       飼っていない：
//                       <Input
//                         type="radio"
//                         name="pet"
//                         value="noPet"
//                         onChange={handleChange}
//                       />
//                     </Label>
//                   </FormGroup>
//                   <span className="text-danger small">{touched.pet && errors.pet ? errors.pet : null}</span>
//                 </FormGroup>
//                 <FormGroup>
//                   <Label>ペットの名前</Label>
//                   <Input
//                     type="text"
//                     name="petName"
//                     value={values.petName}
//                     onChange={handleChange}
//                     onBlur={handleBlur}
//                     invalid={Boolean(errors.petName && touched.petName)}
//                   />
//                   <FormFeedback>
//                     {errors.petName}
//                   </FormFeedback>
//                 </FormGroup>
//                 <FormGroup></FormGroup>
//                 <Button onClick={handleSubmit}>申し込む</Button>
//               </Form>
//             )
//           }
//         </Formik>
//       </div>
//     );
//   }
// }



// class Edit extends React.Component {
//     render() {
//         return(

//         )
//     }
// }

// function Edit() {
//     const initialTodoState = {
//         id: null,
//         content: "",
//         check: false
//       }
//     // let navigate = useNavigate();
//     const [currentPost, setCurrentPost] = useState(initialTodoState);
//     // const { id } = useParams();

//     useEffect(() => {
//         axios.get(`/posts/${id}.json`)
//         .then(resp => {
//             // setCurrentPost(resp.data.content)
//             setCurrentPost({
//                 content: resp.data.content,
//                 check: resp.data.check
//             })
//         });
//     }, []);

    
//     const updatePost = event => {
//         var data = {
//             content: currentPost
//         };
//         event.preventDefault();
//         axios.patch(`/posts/${id}`, data)
//         .then(resp => {
//             // navigate("/posts")
//         });
//     };
    
//     const updateCheck = post => {
//         var data = {
//             // content: post.content,
//             check: !post.check
//         };
//         axios.patch(`/posts/${id}`, data)
//         .then(resp => {
//             setCurrentPost(resp.data)
//         });
//     };
//     return(
//         <>
//             <h1>編集</h1>
//             <form>
//                 <input
//                     type="text"
//                     name="content"
//                     value={currentPost.content}
//                     onChange={e => setCurrentPost(e.target.value)}
//                 />
//                 <button onClick={updatePost}>更新</button><br />
//                 {currentPost.check ? (
//                     <button onClick={() => updateCheck(currentPost)}>UnChecked</button>
//                 ):(
//                     <button onClick={() => updateCheck(currentPost)}>Checked</button>
//                 )
//                 }
//             </form>
//         </>
//     );
// };

export default Edit;