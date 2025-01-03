const Layout = ({ children }) => {
  return (
    <div style={{
       minHeight: '1vh',
      backgroundImage: 'url("/aeroplane.jpeg")',
      backgroundSize: 'cover',
      // backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      // backgroundAttachment: 'fixed'
    }}>
      {children}
    </div>
  );
}; 