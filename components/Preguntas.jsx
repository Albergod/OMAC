import React from "react";
import ExpandableCard from "../utils/expandibleCart";

const Preguntas = () => {
  return (
    <>
      <div className="pregunta">
        <ExpandableCard title={"¿What services do they offer?"}>
          <p>
            Our application is designed to serve as an intermediary between your
            customers and your social networks. In our app, we provide the
            opportunity to register for free and use our service, however, that
            way only allows attach 3 links the caules are used to send clients
            directly to their social networks. <br />
            If you want to take full advantage of our service, we offer a
            premium version for a cost of $15, which will allow you to add 3
            more links to your profile and as a result much more traffic to your
            profiles.
            <br />
            <hr />
            Also, if you want to know more about how to manage and boost your
            networks social, our team of advisors is available to answer any
            questions you may have about the process. It is important highlight
            that our application is an intermediary to carry more traffic to
            your social networks, which translates into more opportunities job
            opportunities and greater recognition in your area.
            <br />
            <hr />
            In short, our application offers a unique opportunity for models
            looking to expand their online presence. Whether I'm looking for the
            free version or want to take full advantage of our services with the
            premium version, we are here to help you Connect with more customers
            and opportunities in your area. Do not hesitate to ask our advisors
            about how we can help you boost her modeling career.
          </p>
        </ExpandableCard>
      </div>
      <div className="pregunta">
        <ExpandableCard title={"¿I can trust you?"}>
          <p>
            In our company, our highest priority is to guarantee the trust and
            satisfaction of our customers. We don't just toast high-quality
            service, but we also make sure to be fully transparent in all
            transactions and communications with our clients. Our professionals
            are experts in their field and work hard to deliver concrete and
            measurable results. In addition, we offer a fair and transparent
            refund policy. for any dissatisfaction or problem. We are committed
            to offer an ethical and honest service, and we are willing to take
            measures to ensure the satisfaction of our customers.
          </p>
        </ExpandableCard>
      </div>
      <div className="pregunta">
        <ExpandableCard title={"¿That I have to do?"}>
          <p>
            If you are interested in our service you can click on the button
            below, which will take you to a form. You must fill it with data
            requested, the links you provide will be the networks that your
            customers can visit. <br />
            If you want to purchase our premium service after trying our free
            service, you do not need to fill in the form again. form. When you
            have made the payment you can have benefits so that you can
            communicate with our handlers and can create a premium profile for
            you.
            <br />
            With our service, you will not only have more time to focus on what
            really matters, but that you will also see improvements in your
            online presence on social media. Do not lose this chance to improve
            your online presence and sign up today!
          </p>
        </ExpandableCard>
      </div>
    </>
  );
};

export default Preguntas;
