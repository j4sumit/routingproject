import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import {createRoutesFromElements,createBrowserRouter,Route,RouterProvider} from "react-router-dom";

import "./index.css"
import Root,{ loader as rootLoader,action as rootAction, } from './routes/root';
import ErrorPage from './ErrorPage';
import Contact, {loader as contactLoader,   action as contactAction,} from './routes/contact';
import EditContact,{action as editAction} from './routes/edit';
import {action as destroyAction } from './routes/destroy'


// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Root/>,
//     errorElement: <ErrorPage/>,
//     loader: rootLoader,
//     action: rootAction,
   
//   children:[
//    {
//     errorElement: <ErrorPage />,
//     children:[
//       { index: true, element: <App /> },
//     {
//       path: "contacts/:contactId",
//       element: <Contact/>,
//       loader: contactLoader,
//       action: contactAction,

//     },
//     {
//       path: "contacts/:contactId/edit",
//       element: <EditContact/>,
//       loader: contactLoader,
//       action: editAction,
//     },
//     {
//       path: "contacts/:contactId/destroy",
//       action: destroyAction,
//       errorElement: <div>Oops! There was an error.</div>,
//     },
//   ],

//    } 
//   ]
// },

// ]);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<Root />}
      loader={rootLoader}
      action={rootAction}
      errorElement={<ErrorPage />}
    >
      <Route errorElement={<ErrorPage />}>
        <Route index element={<App />} />
        <Route
          path="contacts/:contactId"
          element={<Contact />}
          loader={contactLoader}
          action={contactAction}
        />
        <Route
          path="contacts/:contactId/edit"
          element={<EditContact />}
          loader={contactLoader}
          action={editAction}
        />
        <Route
          path="contacts/:contactId/destroy"
          action={destroyAction}
          
        />
      </Route>
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
