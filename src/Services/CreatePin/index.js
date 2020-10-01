import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import _ from "lodash";

import CreatePinComponent from "./component";
import Template from "../Template";

import { fetchTags, createPin } from "../actions";
import { getAllTags, getPin } from "../reducers";

const CreatePin = (props) => {
  const [title, setTitle] = useState("");
  const [pinImage, setPinImage] = useState("");
  const [image, setImage] = useState("");
  const [tag, setTag] = useState("");
  const [description, setDescription] = useState("");
  const [user, setUser] = useState({});

  const imageChangeListener = (file) => {
    const reader = new FileReader();

    reader.onload = (readerEvent) => {
      setImage(readerEvent.target.result);
    };

    reader.readAsDataURL(file);
    setPinImage(file);
  };

  const createPin = () => {
    const pin = {
      user: user.id,
      image: pinImage,
      title,
      description,
      tag,
    };

    props.createPin(pin);
  };

  const updateUser = () => {
    props.fetchTags();
    const userString = localStorage.getItem("user");

    if (userString) {
      setUser(JSON.parse(userString));
    }
  };

  useEffect(updateUser, []);
  return (
    <Template {...props}>
      <CreatePinComponent
        {...{
          title,
          setTitle,
          tag,
          setTag,
          image,
          setImage,
          description,
          setDescription,
          imageChangeListener,
          createPin,
        }}
        tags={props.tags}
        isPinCreated={!_.isEmpty(props.pin)}
      />
    </Template>
  );
};

const mapStateToProps = (state) => ({
  tags: getAllTags(state),
  pin: getPin(state),
});

const mapDispatchToProps = {
  fetchTags,
  createPin,
};

export default connect(mapStateToProps, mapDispatchToProps)(CreatePin);
