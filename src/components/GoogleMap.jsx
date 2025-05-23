const GoogleMap = () => {

  const address = "117 Marl Close, Yeovil, Somerset, United Kingdom BA21 3NF";
  const mapSrc = `https://www.google.com/maps/embed/v1/place?key=AIzaSyAwUoZXUILzdpabj5_J4Pt2S0MEUw1TJK4&q=${encodeURIComponent(
    address
  )}`;


  return (
    <div className="rounded-lg w-full h-full overflow-hidden shadow-lg">
      <iframe
        title="Google Map"
        src={mapSrc}
        width="100%"
        height="100%"
        allowFullScreen
        loading="lazy"
        className="border-0"
      ></iframe>
    </div>
  );
};

export default GoogleMap;
