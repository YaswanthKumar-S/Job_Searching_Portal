import { createBrowserRouter } from "react-router-dom";
import AppLayout from "../components/layout/AppLayout";
import LoginPage from "../pages/LoginPage";
import MainLayout from "../components/layout/MainLayout";
import DashboardPage from "../pages/DashboardPage";
import JobPostingForm from "../components/common/JobPostingForm";
import JobList from "../components/common/JobList";
import UserManagement from "../components/common/UserManagement";
import ReportGenerator from "../components/common/ReportGenerator";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <LoginPage />
      },
      {
        path: "dashboard",
        element: <MainLayout />,
        children: [
          {
            index: true,
            element: <DashboardPage />
          }
        ]
      },
      {
        path: "add-a-job",
        element: <MainLayout />,
        children: [
          {
            index: true,
            element: <JobPostingForm />
          }
        ]
      },
      {
        path: "available-jobs",
        element: <MainLayout />,
        children: [
          {
            index: true,
            element: <JobList />
          }
        ]
      },
      {
        path: "manage-users",
        element: <MainLayout />,
        children: [
          {
            index: true,
            element: <UserManagement />
          }
        ]
      },
      {
        path: "generate",
        element: <MainLayout />,
        children: [
          {
            index: true,
            element: <ReportGenerator />
          }
        ]
      },
      {
        path: "/",
        element: <LoginPage />
      }
    ]
  }
]);
