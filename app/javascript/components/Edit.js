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
import Index from "./Index"

class Edit extends React.Component {
    constructor(props) {
        super(props)

        this.state = {posts: []}
    }

    componentDidMount() {
      axios.get('/posts.json')
      .then(resp => {
      });
      // console.log(this.state.posts)
    }
    
    handleClickCancel = () => {
      // console.log("aaaaa")
      // <Index edit={false}/>
      // const { onCancel, id } = this.props;
      this.props.onCancel(this.props.id, "editing", false);
    };

    // handleClickCancel = () => {
    //   const { onCancel, id } = this.props;
    //   onCancel(id, "editing", false);
    // };
            handleOnSubmit = (values) => {
                    alert(JSON.stringify(values));
                  }
                
                  render() {
                    return (
                      <div className="flex justify-center">
                        <h3 className="text-gray-700">編集</h3>
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
                            ({ handleSubmit, handleChange, handleBlur, handleCancel, values, errors, touched, setFieldValue }) => (
                              <Form>
                                <FormGroup>
                                  {/* <Label>Content</Label> */}
                                  <Input
                                    className="py-2 border-b focus:outline-none focus:border-b-2 focus:border-indigo-500 placeholder-gray-500 placeholder-opacity-50"
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
                                <FormGroup></FormGroup>
                                <Button onClick={handleSubmit} className="bg-green-700 font-semibold text-white py-2 px-4 rounded">編集する</Button>
                              </Form>
                            )
                          }
                        </Formik>
                          <button onClick={() => this.handleClickCancel()} className="bg-red-700 font-semibold text-white py-2 px-4 rounded">キャンセル</button>
                      </div>
                    );
                //   }
                // }
    //     )
    }
    // handleClickCancel = () => {
    //   console.log("aaaaa")
    //   // <Index edit={false}/>
    //   // const { onCancel, id } = this.props;
    //   // this.props.onCancel(this.props.id, "editing", false);
    // };
}


export default Edit;