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

// <!-- component -->
// <link rel="stylesheet" href="https://demos.creative-tim.com/notus-js/assets/styles/tailwind.css">
// <link rel="stylesheet" href="https://demos.creative-tim.com/notus-js/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css">

















// <section class="relative py-16 bg-blueGray-50">
// <div class="w-full mb-12 px-4">
//   <div class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded 
//   bg-pink-900 text-white">
//     <div class="rounded-t mb-0 px-4 py-3 border-0">
//       <div class="flex flex-wrap items-center">
//         <div class="relative w-full px-4 max-w-full flex-grow flex-1 ">
//           <h3 class="font-semibold text-lg text-white">Card Tables</h3>
//         </div>
//       </div>
//     </div>
//     <div class="block w-full overflow-x-auto ">
//       <table class="items-center w-full bg-transparent border-collapse">
//         <thead>
//           <tr>
//             <th class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-pink-800 text-pink-300 border-pink-700">Project</th>
//             <th class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-pink-800 text-pink-300 border-pink-700">Budget</th>
//             <th class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-pink-800 text-pink-300 border-pink-700">Status</th>
//             <th class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-pink-800 text-pink-300 border-pink-700">Users</th>
//             <th class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-pink-800 text-pink-300 border-pink-700">Completion </th>
//             <th class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-pink-800 text-pink-300 border-pink-700"></th>
//           </tr>
//         </thead>

//         <tbody>
//           <tr>
//             <th class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
//               <img src="https://demos.creative-tim.com/notus-js/assets/img/bootstrap.jpg" class="h-12 w-12 bg-white rounded-full border" alt="...">
//               <span class="ml-3 font-bold text-white"> Argon Design System </span></th>
//             <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">$2,500 USD</td>
//             <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
//               <i class="fas fa-circle text-orange-500 mr-2"></i>pending</td>
//             <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
//               <div class="flex">
//                 <img src="https://demos.creative-tim.com/notus-js/assets/img/team-1-800x800.jpg" alt="..." class="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow">
//                 <img src="https://demos.creative-tim.com/notus-js/assets/img/team-2-800x800.jpg" alt="..." class="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4">
//                 <img src="https://demos.creative-tim.com/notus-js/assets/img/team-3-800x800.jpg" alt="..." class="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4">
//                 <img src="https://demos.creative-tim.com/notus-js/assets/img/team-4-470x470.png" alt="..." class="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4">
//               </div>
//             </td>
//             <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"><div class="flex items-center">
//                 <span class="mr-2">60%</span>
//                 <div class="relative w-full">
//                   <div class="overflow-hidden h-2 text-xs flex rounded bg-red-200">
//                     <div style="width: 60%" class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500"></div>
//                   </div>
//                 </div>
//               </div>
//             </td>
//             <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right">
//               <a href="#pablo" class="text-blueGray-500 block py-1 px-3" onclick="openDropdown(event,'table-dark-1-dropdown')">
//                 <i class="fas fa-ellipsis-v"></i></a>
//               <div class="hidden bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48" id="table-dark-1-dropdown">
//                 <a href="#pablo" class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700">Action</a><a href="#pablo" class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700">Another action</a><a href="#pablo" class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700">Something else here</a>
//                 <div class="h-0 my-2 border border-solid border-blueGray-100"></div>
//                 <a href="#pablo" class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700">Seprated link</a>
//               </div>
//             </td>
//           </tr>

//           <tr>
//             <th class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
//               <img src="https://demos.creative-tim.com/notus-js/assets/img/angular.jpg" class="h-12 w-12 bg-white rounded-full border" alt="...">
//               <span class="ml-3 font-bold text-white">Angular Now UI Kit PRO </span></th>
//             <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">$1,800 USD</td>
//             <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
//               <i class="fas fa-circle text-emerald-500 mr-2"></i>completed</td>
//             <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
//               <div class="flex">
//                 <img src="https://demos.creative-tim.com/notus-js/assets/img/team-1-800x800.jpg" alt="..." class="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow">
//                 <img src="https://demos.creative-tim.com/notus-js/assets/img/team-2-800x800.jpg" alt="..." class="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4">
//                 <img src="https://demos.creative-tim.com/notus-js/assets/img/team-3-800x800.jpg" alt="..." class="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4">
//                 <img src="https://demos.creative-tim.com/notus-js/assets/img/team-4-470x470.png" alt="..." class="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4">
//               </div>
//             </td>
//             <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
//               <div class="flex items-center">
//                 <span class="mr-2">100%</span>
//                 <div class="relative w-full">
//                   <div class="overflow-hidden h-2 text-xs flex rounded bg-emerald-500">
//                     <div style="width: 30%" class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-emerald-500"></div>
//                   </div>
//                 </div>
//               </div>
//             </td>
//             <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right">
//               <a href="#pablo" class="text-blueGray-500 block py-1 px-3" onclick="openDropdown(event,'table-dark-1-dropdown')">
//                 <i class="fas fa-ellipsis-v"></i></a>
//               <div class="hidden bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48" id="table-dark-1-dropdown">
//                 <a href="#pablo" class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700">Action</a><a href="#pablo" class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700">Another action</a><a href="#pablo" class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700">Something else here</a>
//                 <div class="h-0 my-2 border border-solid border-blueGray-100"></div>
//                 <a href="#pablo" class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700">Seprated link</a>
//               </div>
//             </td>
//           </tr>

//           <tr>
//             <th class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
//               <img src="https://demos.creative-tim.com/notus-js/assets/img/sketch.jpg" class="h-12 w-12 bg-white rounded-full border" alt="...">
//               <span class="ml-3 font-bold text-white">Black Dashboard Sketch
//               </span></th>
//             <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">$3,150 USD</td>
//             <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
//               <i class="fas fa-circle text-orange-500 mr-2"></i>delayed</td>
//             <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
//               <div class="flex">
//                 <img src="https://demos.creative-tim.com/notus-js/assets/img/team-1-800x800.jpg" alt="..." class="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow">
//                 <img src="https://demos.creative-tim.com/notus-js/assets/img/team-2-800x800.jpg" alt="..." class="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4">
//                 <img src="https://demos.creative-tim.com/notus-js/assets/img/team-3-800x800.jpg" alt="..." class="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4">
//                 <img src="https://demos.creative-tim.com/notus-js/assets/img/team-4-470x470.png" alt="..." class="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4">
//               </div>
//             </td>
//             <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
//               <div class="flex items-center">
//                 <span class="mr-2">73%</span>
//                 <div class="relative w-full">
//                   <div class="overflow-hidden h-2 text-xs flex rounded bg-red-200">
//                     <div style="width: 73%" class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500"></div>
//                   </div>
//                 </div>
//               </div>
//             </td>
//             <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right">
//               <a href="#pablo" class="text-blueGray-500 block py-1 px-3" onclick="openDropdown(event,'table-dark-1-dropdown')">
//                 <i class="fas fa-ellipsis-v"></i></a>
//               <div class="hidden bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48" id="table-dark-1-dropdown">
//                 <a href="#pablo" class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700">Action</a><a href="#pablo" class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700">Another action</a><a href="#pablo" class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700">Something else here</a>
//                 <div class="h-0 my-2 border border-solid border-blueGray-100"></div>
//                 <a href="#pablo" class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700">Seprated link</a>
//               </div>
//             </td>
//           </tr>

//           <tr>
//             <th class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
//               <img src="https://demos.creative-tim.com/notus-js/assets/img/react.jpg" class="h-12 w-12 bg-white rounded-full border" alt="...">
//               <span class="ml-3 font-bold text-white">React Material Dashboard
//               </span></th>
//             <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">$4,400 USD</td>
//             <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
//               <i class="fas fa-circle text-teal-500 mr-2"></i>on schedule</td>
//             <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
//               <div class="flex">
//                 <img src="https://demos.creative-tim.com/notus-js/assets/img/team-1-800x800.jpg" alt="..." class="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow">
//                 <img src="https://demos.creative-tim.com/notus-js/assets/img/team-2-800x800.jpg" alt="..." class="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4">
//                 <img src="https://demos.creative-tim.com/notus-js/assets/img/team-3-800x800.jpg" alt="..." class="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4">
//                 <img src="https://demos.creative-tim.com/notus-js/assets/img/team-4-470x470.png" alt="..." class="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4">
//               </div>
//             </td>
//             <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
//               <div class="flex items-center">
//                 <span class="mr-2">90%</span>
//                 <div class="relative w-full">
//                   <div class="overflow-hidden h-2 text-xs flex rounded bg-teal-200">
//                     <div style="width: 90%" class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-teal-500"></div>
//                   </div>
//                 </div>
//               </div>
//             </td>
//             <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right">
//               <a href="#pablo" class="text-blueGray-500 block py-1 px-3" onclick="openDropdown(event,'table-dark-1-dropdown')">
//                 <i class="fas fa-ellipsis-v"></i></a>
//               <div class="hidden bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48" id="table-dark-1-dropdown">
//                 <a href="#pablo" class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700">Action</a><a href="#pablo" class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700">Another action</a><a href="#pablo" class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700">Something else here</a>
//                 <div class="h-0 my-2 border border-solid border-blueGray-100"></div>
//                 <a href="#pablo" class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700">Seprated link</a>
//               </div>
//             </td>
//           </tr>

//           <tr>
//             <th class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
//               <img src="https://demos.creative-tim.com/notus-js/assets/img/vue.jpg" class="h-12 w-12 bg-white rounded-full border" alt="...">
//               <span class="ml-3 font-bold text-white">Vue Material Dashboard
//               </span></th>
//             <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">$2,200USD</td>
//             <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
//               <i class="fas fa-circle text-emerald-500 mr-2"></i>completed</td>
//             <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
//               <div class="flex">
//                 <img src="https://demos.creative-tim.com/notus-js/assets/img/team-1-800x800.jpg" alt="..." class="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow">
//                 <img src="https://demos.creative-tim.com/notus-js/assets/img/team-2-800x800.jpg" alt="..." class="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4">
//                 <img src="https://demos.creative-tim.com/notus-js/assets/img/team-3-800x800.jpg" alt="..." class="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4">
//                 <img src="https://demos.creative-tim.com/notus-js/assets/img/team-4-470x470.png" alt="..." class="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4">
//               </div>
//             </td>
//             <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
//               <div class="flex items-center">
//                 <span class="mr-2">100%</span>
//                 <div class="relative w-full">
//                   <div class="overflow-hidden h-2 text-xs flex rounded bg-emerald-200">
//                     <div style="width: 100%" class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-emerald-500"></div>
//                   </div>
//                 </div>
//               </div>
//             </td>
//             <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right">
//               <a href="#pablo" class="text-blueGray-500 block py-1 px-3" onclick="openDropdown(event,'table-dark-1-dropdown')">
//                 <i class="fas fa-ellipsis-v"></i></a>
//               <div class="hidden bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48" id="table-dark-1-dropdown">
//                 <a href="#pablo" class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700">Action</a><a href="#pablo" class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700">Another action</a><a href="#pablo" class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700">Something else here</a>
//                 <div class="h-0 my-2 border border-solid border-blueGray-100"></div>
//                 <a href="#pablo" class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700">Seprated link</a>
//               </div>
//             </td>
//           </tr>
//         </tbody>
//       </table>
//     </div>
//   </div>
// </div>
//     <footer class="relative pt-8 pb-6 mt-8">
//       <div class="container mx-auto px-4">
//         <div class="flex flex-wrap items-center md:justify-between justify-center">
//           <div class="w-full md:w-6/12 px-4 mx-auto text-center">
//             <div class="text-sm text-blueGray-500 font-semibold py-1">
//               Made with <a href="https://www.creative-tim.com/product/notus-js" class="text-blueGray-500 hover:text-gray-800" target="_blank">Notus JS</a> by <a href="https://www.creative-tim.com" class="text-blueGray-500 hover:text-blueGray-800" target="_blank"> Creative Tim</a>.
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
// </section>