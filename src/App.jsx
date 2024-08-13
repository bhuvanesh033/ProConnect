import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
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
import SendMessage from './components/SendMessage';
import BidsList from './components/BidsList';
import AcceptedBids from './components/AcceptedBids';  
import Messages from './components/Messages';
import Conversations from './components/Conversations';
import ChatPage from './components/ChatPage';
import ProtectedRoute from './components/ProtectedRoute';
import './index.css';

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Homelayout />}>
            <Route path="/" element={<ProtectedRoute element={<Job />} />} />
            <Route path="/create-job" element={<ProtectedRoute element={<CreateJob />} />} />
            <Route path="/my-jobs" element={<ProtectedRoute element={<MyJobs />} />} />
            <Route path="/my-bids" element={<ProtectedRoute element={<ViewBids />} />} />
            <Route path="/applied-jobs" element={<ProtectedRoute element={<AppliedJobs />} />} />
            <Route path="/jobs/:jobId/bid" element={<ProtectedRoute element={<BidForm />} />} />
            <Route path="/send-message/:jobId" element={<ProtectedRoute element={<SendMessage />} />} />
            <Route path="/bids/:jobId" element={<ProtectedRoute element={<BidsList />} />} />
            <Route path="/accepted-bids" element={<ProtectedRoute element={<AcceptedBids />} />} />
            <Route path="/messages" element={<ProtectedRoute element={<Messages />} />} />
            <Route path="/conversations" element={<ProtectedRoute element={<Conversations />} />} />
            <Route path="/post-job" element={<ProtectedRoute element={<PostJob />} />} />
            <Route path="/chat/:conversationId" element={<ProtectedRoute element={<ChatPage />} />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
