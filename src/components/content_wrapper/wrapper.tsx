import React from "react";
import Button from "../template/button/button";
import Content from "./content/content";
import ContentHeader from "./content_header/header";
import classes from "./wrapper.module.css";

function MainPageContent() {
  return (
    <div className={classes.wrapper}>
      <ContentHeader />
      <Content text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem reiciendis ..." />
<<<<<<< HEAD
      <div className={classes.buttonWrapper}>
        <Button buttonText="Learn More" />
      </div>
=======
      <Button buttonText="Learn More" maxWidth = '15rem'/>
>>>>>>> HW_39
    </div>
  );
}

export default MainPageContent;
