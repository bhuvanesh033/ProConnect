import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import store from './redux/store';
import Homelayout from './components/Homelayout';
import Job from './components/Jobs';
import AppliedJobs from './components/AppliedJobs';
import BidForm from './components/BidForm';
import PostJob from './components/PostJob';
import Login from './components/Login';
import Signup from './components/Signup';
import CreateJob from './components/CreateJob';
import MyJobs from './components/MyJobs';
import ViewBids from './components/ViewBids';
import SendMessage from './components/SendMessage'; // Adjust the path as needed
import BidsList from './components/BidsList';
import AcceptedBids from './components/AcceptedBids';  
import Messages from './components/Messages';
import Conversations from './components/Conversations';
import ChatPage from './components/ChatPage';
import { AuthProvider } from './redux/AuthContext'; // Adjust the path as needed
import ProtectedRoute from './components/ProtectedRoute'; // Adjust the path as needed
import './index.css'; // or wherever Tailwind CSS is imported

const App = () => {
  return (
    <Provider store={store}>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/" element={<Homelayout />}>
              <ProtectedRoute path="/create-job" element={<CreateJob />} />
              <ProtectedRoute path="/my-jobs" element={<MyJobs />} />
              <ProtectedRoute path="/my-bids" element={<ViewBids />} />
              <Route path="/" element={<Job />} />
              <ProtectedRoute path="/applied-jobs" element={<AppliedJobs />} />
              <ProtectedRoute path="/jobs/:jobId/bid" element={<BidForm />} />
              <ProtectedRoute path="/send-message/:jobId" element={<SendMessage />} />
              <ProtectedRoute path="/bids/:jobId" element={<BidsList />} />
              <ProtectedRoute path="/accepted-bids" element={<AcceptedBids />} />
              <ProtectedRoute path="/messages" element={<Messages />} />
              <ProtectedRoute path="/conversations" element={<Conversations />} />
              <ProtectedRoute path="/post-job" element={<PostJob />} />
              <ProtectedRoute path="/chat/:conversationId" element={<ChatPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </Provider>
  );
};

export default App;
