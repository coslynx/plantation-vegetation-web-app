import React, { useState, useEffect } from 'react';
import { useQuery, useMutation } from 'react-query';
import { fetchForumPosts, createForumPost, updateForumPost, deleteForumPost } from '../services/forumService';
import { useAuth } from '../contexts/AuthContext';
import { useUserContext } from '../contexts/UserContext';
import ForumPostCard from './ForumPostCard';
import ForumPostForm from './ForumPostForm';

const Forum = () => {
  const { isAuthenticated } = useAuth();
  const { users } = useUserContext();

  const [selectedPost, setSelectedPost] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    authorId: '',
  });

  const { data: posts, isLoading, error } = useQuery('forumPosts', fetchForumPosts);

  const createForumPostMutation = useMutation(createForumPost, {
    onSuccess: () => {
      setShowForm(false);
      setFormData({
        title: '',
        content: '',
        authorId: '',
      });
    },
    onError: (error) => {
      console.error('Error creating forum post:', error);
    },
  });

  const updateForumPostMutation = useMutation(updateForumPost, {
    onSuccess: () => {
      setSelectedPost(null);
      setShowForm(false);
    },
    onError: (error) => {
      console.error('Error updating forum post:', error);
    },
  });

  const deleteForumPostMutation = useMutation(deleteForumPost, {
    onSuccess: () => {
      setSelectedPost(null);
    },
    onError: (error) => {
      console.error('Error deleting forum post:', error);
    },
  });

  const handlePostSelect = (post) => {
    setSelectedPost(post);
    setFormData({
      title: post.title,
      content: post.content,
      authorId: post.authorId,
    });
  };

  const handleFormSubmit = async (data) => {
    if (selectedPost) {
      updateForumPostMutation.mutate({
        id: selectedPost.id,
        ...data,
      });
    } else {
      createForumPostMutation.mutate(data);
    }
  };

  const handleDeletePost = (id) => {
    deleteForumPostMutation.mutate(id);
  };

  if (isLoading) {
    return <p>Loading forum posts...</p>;
  }

  if (error) {
    return <p>An error occurred while fetching forum posts.</p>;
  }

  return (
    <div className="forum">
      <h1>Forum</h1>
      {isAuthenticated && (
        <>
          <button onClick={() => setShowForm(true)}>Create Post</button>
          {showForm && (
            <ForumPostForm
              onSubmit={handleFormSubmit}
              formData={formData}
              setFormData={setFormData}
              users={users}
            />
          )}
        </>
      )}
      <div className="forum-posts">
        {posts.map((post) => (
          <ForumPostCard
            key={post.id}
            post={post}
            onSelect={handlePostSelect}
            onDelete={handleDeletePost}
          />
        ))}
      </div>
      {selectedPost && (
        <div className="forum-post-details">
          <h2>{selectedPost.title}</h2>
          <p>{selectedPost.content}</p>
          <p>Author: {users.find((user) => user.id === selectedPost.authorId)?.username}</p>
        </div>
      )}
    </div>
  );
};

export default Forum;