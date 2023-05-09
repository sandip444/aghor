import React from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";

const MailchimpForm = ({ subscribe, status, message }) => {
  const url =
    "https://aghori.us18.list-manage.com/subscribe/post?u=9befd7671a0d11379f7728142&amp;id=361f9d1c7a&amp;f_id=008b1de7f0";

  // simplest form (only email)
  const SimpleForm = () => <MailchimpSubscribe url={url} />;

  return (
    <div>
      <SimpleForm onSubmitted={(formData) => subscribe(formData)} />
      {status === "sending" && (
        <div className="text-white sendingStatus">sending...</div>
      )}
      {status === "error" && (
        <div
          dangerouslySetInnerHTML={{ __html: message }}
          className="text-rose-600	"
        />
      )}
      {status === "success" && (
        <div className="text-green-600">Subscribed !</div>
      )}
    </div>
  );
};

export default MailchimpForm;
