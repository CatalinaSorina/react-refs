import React from "react";

// Imperative Animation
class ImperativeAnimation extends React.Component {
  // State.
  state = { background: "#fff" };

  // Render.
  render = () => (
    <div
      ref={this.divRef}
      style={{ height: "200vh", background: this.state.background }}
    >
      Scroll to turn background papayawhip.
    </div>
  );

  // Did Mount.
  componentDidMount() {
    window.addEventListener("scroll", this.onScroll);
  }

  // Div Ref.
  divRef = React.createRef();

  // On Scroll
  onScroll = event => {
    const div = this.divRef.current;
    const { y } = div.getBoundingClientRect();
    if (y < 0) this.setState({ background: "papayawhip" });
    else this.setState({ background: "white" });
  };
}

export default ImperativeAnimation;
