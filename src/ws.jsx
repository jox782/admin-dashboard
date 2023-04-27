import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, createBrowserRouter } from "react-router-dom";

import Topbar from "./scenes/global/Topbar";
import Dashboard from "./scenes/dashboard";
import Sidebar from "./scenes/global/Sidebar";
import Team from "./scenes/team";
import Contacts from "./scenes/contacts";
import Invoices from "./scenes/invoices";
import Form from "./scenes/form";
import Calendar from "./scenes/calendar";
import FAQ from "./scenes/faq";
import Bar from "./scenes/bar";
import Pie from "./scenes/pie";
import Line from "./scenes/line";
import Geography from "./scenes/geography";

const AddPost = React.lazy(() => import("./pages/AddPost"));
const EditPost = React.lazy(() => import("./pages/EditPost"));
const Details = React.lazy(() => import("./pages/Details"));

const postParamHandler = ({ params }) => {
  if (isNaN(params.id)) {
    throw new Response("Bad Request", {
      statusText: "please make sure to insert correct post ID",
      status: 400,
    });
  }
};

const router = createBrowserRouter([
  {
    path: "/admin",
    element: <Dashboard />,
    errorElement: <FAQ />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: "team", element: <Team /> },
      {
        path: "admin/contacts",
        element: (
          <Suspense fallback="loading please wait...">
            <Contacts />
          </Suspense>
        ),
      },
      {
        path: "admin/invoices",
        element: (
          <Suspense fallback="loading please wait...">
            <Invoices />
          </Suspense>
        ),
        loader: postParamHandler,
      },
      {
        path: "admin/form",
        element: (
          <Suspense fallback="loading please wait...">
            <Form />
          </Suspense>
        ),
        loader: postParamHandler,
      },
      {
        path: "admin/calendar",
        element: (
          <Suspense fallback="loading please wait...">
            <Calendar />
          </Suspense>
        ),
        loader: postParamHandler,
      },
      {
        path: "admin/faq",
        element: (
          <Suspense fallback="loading please wait...">
            <FAQ />
          </Suspense>
        ),
        loader: postParamHandler,
      },
      {
        path: "admin/bar",
        element: (
          <Suspense fallback="loading please wait...">
            <Bar />
          </Suspense>
        ),
        loader: postParamHandler,
      },
      {
        path: "admin/pie",
        element: (
          <Suspense fallback="loading please wait...">
            <Pie />
          </Suspense>
        ),
        loader: postParamHandler,
      },
      {
        path: "admin/line",
        element: (
          <Suspense fallback="loading please wait...">
            <Line />
          </Suspense>
        ),
        loader: postParamHandler,
      },
      {
        path: "admin/geography",
        element: (
          <Suspense fallback="loading please wait...">
            <Line />
          </Suspense>
        ),
        loader: postParamHandler,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
