import React from "react";

const WhatsAppPage = () => {
  React.useEffect(() => {
    window.location.href = "https://wa.me/9043236861";
  }, []);
  return (
    <div style={{textAlign: "center", padding: "4rem"}}>
      <h2>Redirecting to WhatsApp...</h2>
      <p>If you are not redirected, <a href="https://wa.me/9043236861">click here</a>.</p>
    </div>
  );
};

export default WhatsAppPage;
