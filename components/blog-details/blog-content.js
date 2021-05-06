import React from "react";
import blogDetailsImage from "../../assets/images/blog/blog-d-1-1.jpg";

const BlogContent = () => {
  return (
    <div>
      <div className="blog-card__image">
        <img src={blogDetailsImage} alt="" />
        <div className="blog-card__date">20 May</div>
      </div>
      <div className="blog-card__meta d-flex justify-content-start mt-0 mb-0">
        <a href="news-details.html">
          <i className="far fa-user-circle"></i> Admin
        </a>
        <a href="news-details.html">
          <i className="far fa-comments"></i> 2 Comments
        </a>
      </div>
      <h3>Background:</h3>
      <p>
      On February 1st 2021, a military coup violently took over the democratically
      elected government of Myanmar, detained all of its leaders and denied the voices
      of over 40 million Myanmar people. In just 3 months, over <span style={{color: 'red', fontWeight: 'bold'}}>750 people have been
      killed</span> including peaceful protestors and dozens of children, and over 3000 people
      have been arbitrarily detained and charged with crimes they did not commit.
      Myanmar is on the brink of a failed state, economy is in a freefall, and civil wars
      have broken out all throughout the country.
      </p>

      <h3>What CDM is:</h3>
      <p>Civilian workers including healthcare professionals, teachers, engineers, railway
      workers and civil servants of all various sectors have been participating in a
      nationwide labour strike by the name of <b>Civil Disobedience Movement (CDM)</b>.
      These workers have been hanging by a thread without any type of income since the
      coup took place and bravely refused to return to work in a defiance against the
      regime even though their lives have been threatened. Families have been evicted
      from their homes for participating in CDM, and many have lost their loved ones
      who were bread winners.</p>

      <h3>Why support:</h3>
      <p>Not knowing how much longer this fight will take but <b>Civil Disobedience
      Movement</b> participants are absolutely relentless in their fight for democracy and
      justice. People are impacted by the mounting financial burden of not being able to
      earn wages from working. Their bravery and sacrifice are praised globally and
      have recently been nominated for the Nobel Peace Prize for next year. There is
      incredible strength of the solidarity of the Myanmar people and we urge all our
      citizens worldwide to join us in this historic fight. We ask for your much-needed
      support to assist these courageous people of Myanmar participating in CDM in an
      <b>effort to restore democracy</b>.</p>

      <h3>Why Donate:</h3>
      <p><span style={{color: 'red', fontWeight: 'bold'}}>We can’t effort to go back to the dictatorship after living under them for
      almost 60 years!</span> Please help us by donating to our fundraiser organized by UCS
      FS through the link below. The funds raised by your generosity from this campaign
      will be distributed to participants of CDM in terms of food, shelter, and allotted
      monthly amounts.</p>
      <p>The people of Myanmar desperately need your help and any amount helps!</p>
      <div className="blog-details__meta">
        <ul className="list-unstyled blog-details__category">
          <li>
            <span>Tags:</span>
          </li>
          <li>
            <a href="#">charity</a>
          </li>
          <li>
            <a href="#">donations</a>
          </li>
          <li>
            <a href="#">savelives</a>
          </li>
        </ul>
        <ul className="list-unstyled blog-details__category">
          <li>
            <span>Category:</span>
          </li>
          <li>
            <a href="#">charity</a>
          </li>
          <li>
            <a href="#">childrens</a>
          </li>
        </ul>
      </div>
      <div className="blog-navigations">
        <a href="#">Our donation is hope for poor childrens</a>
        <a href="#">Fundrising for Early Childhood Rise</a>
      </div>
    </div>
  );
};

export default BlogContent;
