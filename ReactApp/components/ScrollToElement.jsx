import React from "react";
import PropTypes from "prop-types";
import Scroll from "react-scroll";
import domHelpers from "../helpers/domHelpers";

class ScrollToElement extends React.Component {
  componentDidMount() {
    if (this.props.scrollOnMount) {
      this.scrollUnlessConstrained();
    }
  }

  componentDidUpdate() {
    if (this.props.scrollOnUpdate) {
      this.scrollUnlessConstrained();
    }
  }

  isWithinMaxViewport() {
    return domHelpers.isDomAvailable() &&
      domHelpers.getViewportWidth() < this.props.maxScrollViewport;
  }

  scrollUnlessConstrained() {
    if (!this.props.maxScrollViewport || this.isWithinMaxViewport()) {
      this.scrollToElement();
    }
  }

  scrollToElement() {
    Scroll.scroller.scrollTo(this.props.id, {
      delay: this.props.delay,
      duration: this.props.duration,
      smooth: this.props.smooth,
      offset: this.props.offset
    });
  }

  render() {
    const Element = Scroll.Element;
    return (
      <Element name={this.props.id}>
        {this.props.children}
      </Element>
    );
  }
}

ScrollToElement.propTypes = {
  id: PropTypes.string.isRequired,
  scrollOnMount: PropTypes.bool,
  scrollOnUpdate: PropTypes.bool,
  maxScrollViewport: PropTypes.number,
  offset: PropTypes.number,
  duration: PropTypes.number,
  delay: PropTypes.number,
  smooth: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

ScrollToElement.defaultProps = {
  scrollOnMount: false,
  scrollOnUpdate: false,
  maxScrollViewport: null,
  offset: null,
  duration: 400,
  delay: 100,
  smooth: true
};

export default ScrollToElement;
