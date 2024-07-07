// src/pages/CommunityPage.js
import React, { useState } from 'react';
import './community.css'; // Import the CSS for styling

const Community = () => {
  const [newPostContent, setNewPostContent] = useState('');
  const [posts, setPosts] = useState([
    { id: 1, user: 'Ararsa', content: 'How can I improve my business plan?', timestamp: new Date() - 7200000, likes: 3, comments: [] }, // 2 hours ago
    { id: 2, user: 'melkamu', content: 'What are the best funding options for startups?', timestamp: new Date() - 18000000, likes: 5, comments: [] }, // 5 hours ago
  ]);
  const [searchQuery, setSearchQuery] = useState('');

  const handlePostChange = (e) => {
    setNewPostContent(e.target.value);
  };

  const handlePostSubmit = () => {
    if (newPostContent.trim()) {
      const newPost = {
        id: posts.length + 1,
        user: 'You',
        content: newPostContent,
        timestamp: new Date(),
        likes: 0,
        comments: [],
      };
      setPosts([newPost, ...posts]);
      setNewPostContent('');
    }
  };

  const handleLikePost = (postId) => {
    setPosts(posts.map(post => post.id === postId ? { ...post, likes: post.likes + 1 } : post));
  };

  const handleCommentChange = (postId, commentContent) => {
    setPosts(posts.map(post => post.id === postId ? {
      ...post,
      comments: [...post.comments, { id: post.comments.length + 1, content: commentContent }]
    } : post));
  };

  const formatTimestamp = (timestamp) => {
    const now = new Date();
    const diff = now - new Date(timestamp);

    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (seconds < 60) {
      return 'Just now';
    } else if (minutes < 60) {
      return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
    } else if (hours < 24) {
      return `${hours} hour${hours > 1 ? 's' : ''} ago`;
    } else {
      return `${days} day${days > 1 ? 's' : ''} ago`;
    }
  };

  const filteredPosts = posts.filter(post => 
    post.content.toLowerCase().includes(searchQuery.toLowerCase()) || 
    post.user.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="community-page" >
      
      <section className="intro" >
        <h1 >Community Hub</h1>
        <p>Connect with fellow entrepreneurs, share insights, and learn from others.</p>
      </section>

      <section className="create-post">
        <h2>Create a Post</h2>
        <textarea
          value={newPostContent}
          onChange={handlePostChange}
          placeholder="What's on your mind?"
          className="post-input"
        ></textarea>
        <button onClick={handlePostSubmit} className="post-button">Post</button>
      </section>

      <section className="search-posts">
        <input 
          type="text" 
          placeholder="Search posts by content or user..." 
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-input-community"
        />
      </section>

      <section className="posts">
        <h2>Recent Posts</h2>
        <div className="posts-list">
          {filteredPosts.map(post => (
            <div key={post.id} className="post-card">
              <h3>{post.user}</h3>
              <p>{post.content}</p>
              <span className="timestamp">{formatTimestamp(post.timestamp)}</span>
              <div className="post-interactions">
                <button onClick={() => handleLikePost(post.id)} className="like-button">
                  Like ({post.likes})
                </button>
                <div className="comments-section">
                  <input 
                    type="text" 
                    placeholder="Add a comment..." 
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' && e.target.value.trim()) {
                        handleCommentChange(post.id, e.target.value.trim());
                        e.target.value = '';
                      }
                    }}
                  />
                  <ul className="comments-list">
                    {post.comments.map(comment => (
                      <li key={comment.id}>{comment.content}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
        
      <section className="discussion-topics">
        <h2>Discussion Topics</h2>
        <div className="topics-list">
          <div className="topic-card">
            <h3>Business Strategy</h3>
            <p>Share and discuss business strategies and best practices.</p>
          </div>
          <div className="topic-card">
            <h3>Funding & Investment</h3>
            <p>Explore funding opportunities and investment strategies.</p>
          </div>
          <div className="topic-card">
            <h3>Marketing & Sales</h3>
            <p>Discuss effective marketing and sales techniques.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Community;
