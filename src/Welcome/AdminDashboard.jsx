import React from 'react';

const AdminDashboard = ({ admin, onLogout }) => {
  const [messages, setMessages] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState('');

  React.useEffect(() => {
    const fetchMessages = async () => {
      try {
  const res = await fetch('https://portfoliobackend-pearl-iota.vercel.app/api/contact');
        if (!res.ok) throw new Error('Failed to fetch messages');
        const data = await res.json();
        setMessages(data);
      } catch (err) {
        setError('Could not load messages.');
      }
      setLoading(false);
    };
    fetchMessages();
  }, []);

  return (
    <div style={{ minHeight: '100vh', background: '#181818', color: '#fff', padding: '2rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <h2 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '2rem' }}>Admin Dashboard</h2>
        <button onClick={onLogout} style={{ padding: '0.8rem 1.2rem', borderRadius: 8, border: 'none', background: 'linear-gradient(135deg, #fff 0%, #bfbfbf 100%)', color: '#181818', fontWeight: 600, cursor: 'pointer' }}>Logout</button>
      </div>
      <p style={{ marginBottom: '2rem' }}>Welcome, <b>{admin.email}</b>!</p>
      <div style={{ background: '#222', borderRadius: 12, padding: '1.5rem', boxShadow: '0 4px 24px rgba(0,0,0,0.18)' }}>
        <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600, fontSize: '1.3rem', marginBottom: '1rem' }}>Contact Messages</h3>
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p style={{ color: '#ff4d4f' }}>{error}</p>
        ) : messages.length === 0 ? (
          <p>No messages yet.</p>
        ) : (
          <table style={{ width: '100%', borderCollapse: 'collapse', background: 'transparent' }}>
            <thead>
              <tr style={{ background: '#181818', color: '#fff' }}>
                <th style={{ padding: '0.7rem', borderBottom: '2px solid #333', textAlign: 'left' }}>Name</th>
                <th style={{ padding: '0.7rem', borderBottom: '2px solid #333', textAlign: 'left' }}>Email</th>
                <th style={{ padding: '0.7rem', borderBottom: '2px solid #333', textAlign: 'left' }}>Message</th>
                <th style={{ padding: '0.7rem', borderBottom: '2px solid #333', textAlign: 'left' }}>Date</th>
              </tr>
            </thead>
            <tbody>
              {messages.map(msg => (
                <tr key={msg.id} style={{ borderBottom: '1px solid #333' }}>
                  <td style={{ padding: '0.7rem', verticalAlign: 'top' }}>{msg.name}</td>
                  <td style={{ padding: '0.7rem', verticalAlign: 'top' }}>{msg.email}</td>
                  <td style={{ padding: '0.7rem', verticalAlign: 'top' }}>{msg.message}</td>
                  <td style={{ padding: '0.7rem', verticalAlign: 'top' }}>{new Date(msg.createdAt).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
