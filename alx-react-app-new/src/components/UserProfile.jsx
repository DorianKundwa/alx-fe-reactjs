const UserProfile = (props) => {
    return (
        <div style={{ border: '1px solid gray', padding: '12px', margin: '16px', borderRadius: '8px', backgroundColor: '#f9fafb' }}>
            <h2 style={{ color: 'blue', marginBottom: '8px' }}>{props.name}</h2>
            <p style={{ margin: '4px 0' }}>Age: <span style={{ fontWeight: 'bold' }}>{props.age}</span></p>
            <p style={{ color: '#333', margin: '4px 0' }}>Bio: {props.bio}</p>
        </div>
    );
};

export default UserProfile;
