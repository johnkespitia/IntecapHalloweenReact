const Error = ({ error }) => {
    if(!error) return null;
    return <div style={{ color: 'red', fontWeight: 'bold' }}>
        <p>Error: {error}</p>
    </div>
}

export default Error;