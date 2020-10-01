import React from "react";
import _ from "lodash";

import Pin from "../Pin";

const PinList = ({ pins, ...props }) => (
  <React.Fragment>
    {!_.isEmpty(pins)
      ? pins.map((pin) => (
          <React.Fragment key={pin.id}>
            <Pin pin={pin} onProfileClick={props.onProfileClick} />
          </React.Fragment>
        ))
      : null}
  </React.Fragment>
);

export default PinList;
